import { fold } from '../lib/text.js';

/**
 * Jump-to-a-name search over the prebuilt index.
 * The index is fetched once, on first keystroke, and cached by the browser.
 */
let indexPromise = null;

function loadIndex() {
	if (!indexPromise) {
		indexPromise = fetch('/search-index.json')
			.then((r) => (r.ok ? r.json() : []))
			.catch(() => []);
	}
	return indexPromise;
}

const debounce = (fn, ms) => {
	let t;
	return (...args) => {
		clearTimeout(t);
		t = setTimeout(() => fn(...args), ms);
	};
};

export function wireSearch(input, hitsNode, countNode, limit = 8) {
	if (!input || !hitsNode) return;

	const status = document.createElement('p');
	status.id = 'jump-status';
	status.className = 'sr-only';
	input.after(status);

	function render(results, total) {
		hitsNode.replaceChildren();
		for (const row of results) {
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.href = `/names/${row.s}/`;
			a.innerHTML =
				`<span class="n">${row.n}</span>` +
				`<span class="w" lang="sa"></span>` +
				`<span class="i"></span>`;
			a.querySelector('.w').textContent = row.d;
			a.querySelector('.i').textContent = row.i;
			li.appendChild(a);
			hitsNode.appendChild(li);
		}
		hitsNode.hidden = results.length === 0;
		if (countNode) countNode.textContent = results.length ? `${results.length}` : '0';
		status.textContent = results.length
			? `${results.length} of ${total} names match`
			: total
				? 'No name matches'
				: '';
	}

	const run = debounce(async () => {
		const q = fold(input.value.trim());
		if (!q) {
			hitsNode.hidden = true;
			hitsNode.replaceChildren();
			if (countNode) countNode.textContent = '1,000';
			status.textContent = '';
			return;
		}
		const all = await loadIndex();
		const matches = [];
		for (const row of all) {
			if (row.f.includes(q)) {
				matches.push(row);
				if (matches.length >= limit) break;
			}
		}
		render(matches, all.length);
	}, 90);

	input.addEventListener('input', run);
	input.addEventListener('focus', () => {
		loadIndex();
	});
	input.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			const first = hitsNode.querySelector('a');
			if (first) {
				event.preventDefault();
				first.click();
			}
		}
		if (event.key === 'Escape') {
			input.value = '';
			run();
		}
	});
}

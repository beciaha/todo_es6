export function qs(selector, scope) {
	return (scope || document).querySelector(selector);
}
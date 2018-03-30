/**
 * @param {string} selector 
 * @param {Element} scope 
 */
export function qs(selector, scope) {
	return (scope || document).querySelector(selector);
}
/**
 * Event wrapper
 * @param {Element|Window} target 
 * @param {string} type 
 * @param {Function} callback 
 */
export function $ew(target, type, callback) {
	target.addEventListener(type, callback);
}
/**
 * 
 * @param {*	} target 
 * @param {*} selector 
 * @param {*} type 
 * @param {*} handler 
 */
export function $delegate(target, selector, type, handler) {
	let event = function () {
		let potentialElements = target.querySelectorAll(selector);
		let i = potentialElements.length;
		while (i--) {
			if (potentialElements[i] == window.event.target) {
				handler.call(window.event.target, window.event)
			}
		}
	}
	$ew(target, type, event);
}
export const typeWriter = (function () {
	let i = 0;
	let txt = 'What needs to be done?';
	let speed = 80;
	let id = qs('.new-item');
	return function () {
		if (i < txt.length) {
			id.placeholder += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}
})();
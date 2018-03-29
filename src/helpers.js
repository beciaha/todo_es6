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

export function $delegate(target, selector, type, handler) {
	let event =function() {
		let potentialElements = target.querySelectorAll(selector);
		let i = potentialElements.length;
		while(i--) {
			if(potentialElements[i]==window.event.target) {
				handler.call(window.event.target,window.event)
			}
		}
	}
	$ew(target, type,event);
}
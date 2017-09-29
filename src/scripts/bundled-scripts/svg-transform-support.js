const supportsCSSTransformsOnSVG = (() => {
	const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.setAttribute('viewBox', '0 0 2 2');
	Object.assign(svg.style, {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '2px',
		height: '2px',
	});
	svg.innerHTML = '<rect width="1" height="1" style="transform: translate(1px, 1px)"/>';
	document.body.appendChild(svg);
	const result = document.elementFromPoint(1, 1) !== svg;
	svg.parentNode.removeChild(svg);
	return result;
})();
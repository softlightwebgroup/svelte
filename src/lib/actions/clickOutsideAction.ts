export const clickOutsideAction = (node) => {
	const handleClick = (e: MouseEvent) => {
		if (node && !node.contains(e.target) && !e.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('clickOutside', node));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
};

export const fnClassnames = (...args: any[]) => {
	return args
		.reduce((classNames, arg) => {
			if (typeof arg === 'string') {
				return classNames + ' ' + arg;
			}
			if (typeof arg === 'object') {
				return (
					classNames +
					' ' +
					Object.entries(arg)
						.filter(([key, value]) => value)
						.map(([key]) => key)
						.join(' ')
				);
			}
			return classNames;
		}, '')
		.trim();
};
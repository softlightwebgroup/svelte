export const fnSlug = (text: string) => {
	return text
		.toLowerCase()
		.replace(/[^a-zA-Z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');
};

export const fnCapitalizeFirstLetter = (str: string): string => {
	return str?.charAt(0)?.toUpperCase() + str?.slice(1);
};

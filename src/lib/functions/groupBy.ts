export const fnGroupBy = <T, K>(arr: T[], callback: (item: T) => K): Record<string, T[]> =>
	arr.reduce(
		(groups, item) => {
			const key = callback(item);
			if (!groups[key]) {
				groups[key] = [];
			}
			groups[key].push(item);
			return groups;
		},
		{} as Record<string, T[]>
	);

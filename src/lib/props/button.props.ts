export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonColor = 'alternative' | 'blue' | 'dark' | 'green' | 'light' | 'info' | 'warning' | 'primary' | 'secondary' | 'success' | 'purple' | 'red' | 'yellow' | 'none';

export type TButtonProps = {
	tag?: string;
	pill?: boolean;
	block?: boolean;
	disabled?: boolean;
	outline?: boolean;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	href?: string;
	type?: ButtonType;
	color?: ButtonColor;
	shadow?: boolean;
};

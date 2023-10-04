<script lang='ts'>
	import { fnClassnames } from '$lib/functions/classnames.js';
	import type { ButtonType, SizeType } from '$lib';
	import { getContext } from 'svelte';

	type ButtonColor = keyof typeof colorClasses;

	const group: SizeType = getContext('group');

	const colorClasses = {
		alternative: 'soft-button--color-alternative',
		blue: 'soft-button--color-blue',
		dark: 'soft-button--color-dark',
		green: 'soft-button--color-green',
		light: 'soft-button--color-light',
		info: 'soft-button--color-info',
		warning: 'soft-button--color-warning',
		primary: 'soft-button--color-primary',
		purple: 'soft-button--color-purple',
		red: 'soft-button--color-red',
		yellow: 'soft-button--color-yellow',
		none: 'soft-button--color-none'
	};

	const outlineClasses = {
		alternative: 'soft-button--outline-alternative',
		blue: 'soft-button--outline-blue',
		dark: 'soft-button--outline-dark',
		green: 'soft-button--outline-green',
		light: 'soft-button--outline-light',
		info: 'soft-button--outline-info',
		warning: 'soft-button--outline-warning',
		primary: 'soft-button--outline-primary',
		purple: 'soft-button--outline-purple',
		red: 'soft-button--outline-red',
		yellow: 'soft-button--outline-yellow',
		none: 'soft-button--outline-none'
	};

	const sizeClasses = {
		xs: 'soft-button--size-xs',
		sm: 'soft-button--size-sm',
		md: 'soft-button--size-md',
		lg: 'soft-button--size-lg',
		xl: 'soft-button--size-xl'
	};

	export let pill: boolean = false;
	export let outline: boolean = false;
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = group ? 'sm' : 'md';
	export let href: string | undefined = undefined;
	export let type: ButtonType = 'button';
	export let color: ButtonColor = group ? (outline ? 'dark' : 'alternative') : 'primary';
	export let shadow: boolean = false;

	const hasBorder = () => outline || color === 'alternative' || color === 'light';

	let buttonClass: string;

	$: buttonClass = fnClassnames(
		'soft-button',
		sizeClasses[size],
		outline ? outlineClasses[color] : colorClasses[color],
		hasBorder() ? 'soft-button--border' : '',
		shadow ? 'soft-button--shadow' : '',
		pill ? 'soft-button--pill' : ''
	);
</script>

<svelte:element
	{...$$restProps}
	class={buttonClass} {href} on:change
	on:click on:keydown on:keyup on:mouseenter on:mouseleave on:touchcancel on:touchend
	on:touchstart|passive role={href ? 'link' : 'button'} this={href ? 'a' : 'button'} type={href ? undefined : type}>
	<slot />
</svelte:element>

<style lang='scss'>
  @use "$lib/scss/vars/colors" as *;
  @use "$lib/scss/vars/size" as *;
  @use "$lib/scss/mixins/size" as *;

  .soft-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 0;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: opacity 0.3s ease-in-out;

    &--border {
      border: 1px solid var(--color-gray);
    }

    &--shadow {
      box-shadow: 0 0 0 1px var(--color-dark);
    }

    &--pill {
      border-radius: 9999px;
    }

    &--color {
      @each $color, $value in $colors {
        &-#{$color} {
          background-color: var(--color-#{$color});
          color: if(lightness($value) > 55%, var(--color-dark), var(--color-light));
        }
      }
    }

    &--outline {
      background: none;

      @each $color, $value in $colors {
        &-#{$color} {
          border: 1px solid var(--color-#{$color});
          color: var(--color-#{$color})
        }
      }
    }

    &--size {
      @each $size, $value in $size-variants {
        @include size($size, map-get($value, 'font-size'), map-get($value, 'padding'));
      }
    }

    &:hover {
      opacity: .8;
    }
  }
</style>
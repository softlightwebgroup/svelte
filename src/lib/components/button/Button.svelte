<script lang='ts'>
	import { fnClassnames } from '$lib/functions/classnames.js';
	import type { SizeType } from '$lib';
	import { createEventDispatcher, getContext } from 'svelte';
	import type { TButtonProps } from '$lib/props/button.props.js';

	const dispatch = createEventDispatcher();
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
		secondary: 'soft-button--color-secondary',
		success: 'soft-button--color-success',
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

	let { tag, pill, block, disabled, outline, size = group ? 'sm' : 'md', href, type = 'button', color = group ? (outline ? 'dark' : 'alternative') : 'primary', shadow, ...restProps } = $props<TButtonProps>();

	const hasBorder = () => outline || color === 'alternative' || color === 'light';

	let buttonClass: string = $derived(fnClassnames(
		'soft-button',
		sizeClasses[group?.size || size],
		outline ? outlineClasses[color] : colorClasses[color],
		hasBorder() ? 'soft-button--border' : '',
		shadow ? 'soft-button--shadow' : '',
		pill ? 'soft-button--pill' : '',
		group ? 'soft-button--group' : '',
		disabled ? 'soft-button--disabled' : '',
		block ? 'soft-button--block' : ''
	));

	const onClick = (e) => {
		group?.onClick({ event: e });
		dispatch('click', { event: e });
	};

	let extraProps = {};
	const fnDisabled = (disabled: boolean) => {
		extraProps = {
			...extraProps,
			disabled
		};

		if (!disabled) {
			delete extraProps.disabled;
		}
	};

	$effect(() => {
		fnDisabled(disabled);
	});
</script>

<svelte:element
	{...restProps}
	{...extraProps} class={buttonClass}
	{href}
	on:change
	on:click={onClick} on:keydown on:keyup on:mouseenter on:mouseleave on:touchcancel on:touchend
	on:touchstart|passive role={href ? 'link' : 'button'} this={tag || (href ? 'a' : 'button')}
	type={href ? undefined : type}
>
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
    gap: var(--spacing-sm);
    border-radius: 0.5rem;
    text-decoration: none;
    transition: opacity 0.3s ease-in-out;
    line-height: 1;

    &--border {
      border: 1px solid var(--color-gray);
    }

    &--shadow {
      box-shadow: 0 0 0 1px var(--color-dark);
    }

    &--pill {
      border-radius: 9999px;
    }

    &--block {
      width: 100%;
    }

    &--group {
      &:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      &:not(:first-child):not(:last-child) {
        border-left-width: 0;
        border-right-width: 0;
        border-radius: 0;
      }

      &:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
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

    &[disabled] {
      background-color: rgb(44, 44, 44);
      border-color: rgb(44, 44, 44);
      color: rgb(124, 124, 124);
      opacity: .6;

      &:hover {
        cursor: default;
      }
    }
  }
</style>
<script lang='ts'>
	import { createEventDispatcher, setContext } from 'svelte';
	import type { SizeType } from '$lib/types.js';
	import { fnClassnames } from '$lib/functions/classnames.js';

	const dispatch = createEventDispatcher();
	export let size: SizeType = 'md';
	export let divClass: string = 'soft-button-group';

	const onClick = (detail) => {
		dispatch('click', detail);
	};

	setContext('group', { size, onClick });
</script>

<div {...$$restProps} class={fnClassnames(divClass, $$props.class)} role='group'>
	<slot />
</div>

<style lang='scss'>
  .soft-button-group {
    display: inline-flex;
    border-radius: .5rem;
  }
</style>
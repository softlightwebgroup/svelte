<script lang='ts'>
	let { tag = 'article', href, children, pill = false, ...rest } = $props<{
		tag: string
		children: () => any
		pill: boolean
		href?: string
	}>();

</script>

<svelte:element {...rest} class='atom-item' class:pill {href} this={href ? 'a' : tag}>
	{@render children()}
</svelte:element>

<style lang='scss'>
  .atom-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border: 0;
    border-radius: 0.25rem;
    transition: all 0.2s ease-in-out;

    &.pill {
      border-radius: 80px;
    }

    &:hover {
      cursor: pointer;
      background: var(--atom-item-hover-bg, var(--soft-atom-item-hover-bg, gainsboro));
    }
  }
</style>
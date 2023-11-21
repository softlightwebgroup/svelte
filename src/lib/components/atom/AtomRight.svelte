<script lang='ts'>
	let { children, ...rest } = $props<{
		children: () => any
	}>();
</script>

<div {...rest} class='atom-right'>
	{@render children()}
</div>

<style lang='scss'>
  .atom-right {
    display: flex;
    align-items: center;
    margin-left: auto;
		gap: 0.5rem;
  }
</style>
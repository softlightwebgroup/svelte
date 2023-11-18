<script>
	let { ...rest } = $props();
</script>

<div {...rest} class='atom-title'>
	<slot></slot>
</div>

<style lang='scss'>
  .atom-title {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex: 1;
  }
</style>
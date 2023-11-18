<script lang='ts'>
	let { ...rest } = $props();
</script>

<header {...rest} class='atom-navbar'>
	<slot></slot>
</header>

<style lang='scss'>
  .atom-navbar {
    height: var(--soft-navbar-height);
    display: flex;
    background-color: var(--navbar-bg, var(--soft-navbar-bg));
    padding: 0 var(--soft-spacing);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    position: sticky;
    top: 0;
  }
</style>
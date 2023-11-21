<div class='atom-sidebar'>
	<slot />
</div>

<style lang='scss'>
  .atom-sidebar {
    width: 100%;
    height: var(--sidebar-height, auto);
    background-color: var(--sidebar-bg, var(--soft-sidebar-bg, whitesmoke));
    overflow: hidden;
    overflow-y: auto;
  }
</style>
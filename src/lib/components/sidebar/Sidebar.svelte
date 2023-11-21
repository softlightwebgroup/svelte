<script lang='ts'>
	import AtomSidebar from '$lib/components/atom/AtomSidebar.svelte';
	import { getContext, setContext } from 'svelte';
	import { clickOutsideAction } from '$lib/actions/clickOutsideAction';
	import { fly } from 'svelte/transition';

	const { closeMenu } = getContext('Navbar');

	let { children, ...rest } = $props<{
		children: () => any
	}>();

	setContext('Sidebar', {});
</script>

<aside {...rest} class='soft-sidebar' on:clickOutside={closeMenu} transition:fly={{ x: -300 }} use:clickOutsideAction>
	<AtomSidebar>
		{@render children()}
	</AtomSidebar>
</aside>

<style lang='scss'>
  .soft-sidebar {
    --sidebar-height: 100vh;
    background-color: var(--sidebar-bg, var(--soft-sidebar-bg, whitesmoke));
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 300px;
    box-shadow: 0 0 10px -5px black;
  }
</style>
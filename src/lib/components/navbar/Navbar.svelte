<script lang='ts'>
	import AtomNavbar from '$lib/components/atom/AtomNavbar.svelte';
	import AtomTitle from '$lib/components/atom/AtomTitle.svelte';
	import AtomRight from '$lib/components/atom/AtomRight.svelte';
	import { setContext } from 'svelte';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';

	let menu = $state(false);

	setContext('Navbar', {
		get menu() {
			return menu;
		},
		closeMenu() {
			menu = false;
		},
		toggleMenu() {
			menu = !menu;
		}
	});

	let { title, children, sidebar, ...rest } = $props<{
		title: string | (() => any),
		children: () => any,
		sidebar?: () => any
	}>();

	function toggleMenu() {
		menu = !menu;
	}
</script>

<AtomNavbar {...rest}>
	<button on:click={toggleMenu}>
		<i class='fas fa-bars'></i>
	</button>
	<AtomTitle>
		{#if typeof title === 'function'}
			{@render title()}
		{:else}
			{title}
		{/if}
	</AtomTitle>
	{#if children}
		<AtomRight>
			{@render children()}
		</AtomRight>
	{/if}
	{#if menu}
		<Sidebar>
			{@render sidebar()}
		</Sidebar>
	{/if}
</AtomNavbar>

<style lang='scss'>
  button {
    display: flex;
    background-color: var(--navbar-bg, var(--soft-navbar-bg));
    align-items: center;
    border: 0;
    padding: 20px;
    cursor: pointer;

    &:hover {
      background: whitesmoke;
    }

    @media (width>768px) {
      display: none;
    }
  }
</style>
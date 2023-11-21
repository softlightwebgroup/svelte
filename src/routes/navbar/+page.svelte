<script>
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import AtomItem from '$lib/components/atom/AtomItem.svelte';
</script>

{#snippet title()}
<h1 style='font-size: clamp(1rem, 5vw, 1.2rem);'>
	SoftlightWeb
</h1>
{/snippet}

{#snippet sidebar()}
<AtomItem pill>
	<i class='fas fa-home'></i>
	Home
</AtomItem>
<AtomItem pill>
	<i class='fas fa-search'></i>
	Search
</AtomItem>
<AtomItem>
	<i class='fas fa-user-circle'></i>
	User
</AtomItem>
{/snippet}

<Navbar {sidebar} {title}>
	<AtomItem pill>
		<i class='fas fa-home'></i>
	</AtomItem>
	<AtomItem pill>
		<i class='fas fa-search'></i>
	</AtomItem>
	<button>
		<i class='fas fa-user-circle'></i>
	</button>
</Navbar>

<style lang='scss'>
  button {
    display: flex;
    align-items: center;
    font-size: 2rem;
    border: 0;
    cursor: pointer;

    &:hover {
      background: whitesmoke;
    }
  }
</style>
<script>
	import Button from '$lib/components/button/Button.svelte';
	import ButtonGroup from '$lib/components/button-group/ButtonGroup.svelte';
</script>

<ButtonGroup on:click={console.log}>
	<Button>Profile</Button>
	<Button>Settings</Button>
	<Button>Messages</Button>
</ButtonGroup>
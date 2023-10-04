<script lang='ts'>
	import Button from '$lib/components/button/Button.svelte';
</script>

<div>
	<Button>Default</Button>
	<Button color='alternative'>Alternative</Button>
	<Button color='dark'>Dark</Button>
	<Button color='light'>Light</Button>
	<Button color='blue'>Blue</Button>
	<Button color='green'>Green</Button>
	<Button color='red'>Red</Button>
	<Button color='yellow'>Yellow</Button>
	<Button color='purple'>Purple</Button>
</div>

<Button href='/'>Home</Button>

<div>
	<Button pill>Default</Button>
	<Button color='alternative' pill>Alternative</Button>
	<Button color='dark' pill>Dark</Button>
	<Button color='light' pill>Light</Button>
	<Button color='blue' pill>Blue</Button>
	<Button color='green' pill>Green</Button>
	<Button color='red' pill>Red</Button>
	<Button color='yellow' pill>Yellow</Button>
	<Button color='purple' pill>Purple</Button>
</div>

<div>
	<Button outline>Default</Button>
	<Button color='dark' outline>Dark</Button>
	<Button color='green' outline>Green</Button>
	<Button color='red' outline>Red</Button>
	<Button color='yellow' outline>Yellow</Button>
	<Button color='purple' outline>Purple</Button>
</div>

<div>
	<Button size='xs'>
		Extra small
	</Button>
	<Button size='sm'>
		Small
	</Button>
	<Button size='md'>
		Base
	</Button>
	<Button size='lg'>
		Large
	</Button>
	<Button size='xl'>
		Extra large
	</Button>
</div>
<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="/css/main.css" media="(min-width: 1280px)" />
	<link rel="stylesheet" href="/css/main_690.css" media="(min-width: 690px) and (max-width: 1279px)" />
	<link rel="stylesheet" href="/css/main_340.css" media="(min-width: 340px) and (max-width: 659px)" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</svelte:head>
{@render children()}

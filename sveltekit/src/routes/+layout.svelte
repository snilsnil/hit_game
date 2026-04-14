<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="/css/main_340.css" media="screen and (min-width: 340px)" />
	<link rel="stylesheet" href="/css/main_690.css" media="screen and (max-width: 690px)" />
	<link rel="stylesheet" href="/css/main_1400.css" media="screen and (min-width: 1400px)" />
	<link rel="stylesheet" href="/css/main_1900.css" media="screen and (max-width: 1900px)" />
	<script src="/js/index.js"></script>
	<script defer src="/js/index2.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</svelte:head>
<Header />
{@render children()}

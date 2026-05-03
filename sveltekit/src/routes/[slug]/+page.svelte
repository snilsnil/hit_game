<script>
	import { page } from '$app/state';
	import GameIntroduction from '$lib/components/GameIntroduction.svelte';
	import PostList from '$lib/components/PostList.svelte';

	const userId = page.data.id;
	const slug = page.params.slug;

	$effect(() => {
		if (page.data?.success === false) {
			alert(page.form.message);
		}
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/postList.css" media="(min-width: 1280px)" />
</svelte:head>

<GameIntroduction />
<PostList />

{#if userId}
	<input type="button" onclick={() => (location.href = `${slug}/write`)} value="글 작성" />
{/if}

<br /><br /><br /><br /><br />

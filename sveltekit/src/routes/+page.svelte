<script>
	import { resolve } from '$app/paths';
	import Introduction from '$lib/components/Introduction.svelte';
	import { page } from '$app/state';

	// 데이터 구조화
	const games = page.data.simpleGameData;
</script>

<Introduction />

<div style="color:white" id="gm_menu">
	<div class="device" id="nintento_device">
		<div class="imagepr">
			{#if games}
				{#each games as game (game.gameNum)}
					<div class="image" id={'image' + game.gameNum}>
						<a href={resolve(game.gamePath)}>
							<img src={game.gameImage} alt="{game.gameTitle} {game.gameSubTitle}" />
						</a>
						<div id="imageprst">{game.gameTitle}<br />{game.gameSubTitle}</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>

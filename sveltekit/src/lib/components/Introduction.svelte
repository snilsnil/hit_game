<script lang="ts">
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	// 데이터 구조화
	const gameData = page.data.simpleGameData;

	let selectedGame: (typeof gameData)[number] | null = null;
	let deviceWidth = 0;
	let deviceHeight = 0;
	let show = false;

	onMount(() => {
		if (window.innerWidth > 1279) {
			deviceWidth = window.innerWidth;
			deviceHeight = window.innerHeight;
			selectedGame = gameData[Math.floor(Math.random() * gameData.length)];
			show = true;
		}
	});
</script>

<div id="article">
	<div id="contents">
		<div id="gm_prolog nav">
			{#if show === true}
				<div id="tdvideo">
					<video id="vdio" muted autoplay loop>
						<source src={selectedGame.gameVideo} type="video/mp4" />
					</video>
				</div>
				<div id="tdimg" style="margin-top: {deviceHeight * 0.35}px;">
					<a href={resolve(selectedGame.gamePath)}>
						<img
							style="width: {deviceWidth * 0.15}px;"
							src={selectedGame.gameImage}
							alt={`${selectedGame.gameTitle} ${selectedGame.gameDataubTitle}`}
						/>
					</a>
				</div>
				<div id="tdstory" style="margin- top: {deviceHeight * 0.35}px;">
					<div id="gm_story">
						<strong style=" padding-left:0px; font-size: {deviceHeight * 0.02}px;"
							><span>
								{#if selectedGame.gameSubTitle}
									{`${selectedGame.gameTitle} : ${selectedGame.gameSubTitle}`}
								{:else}
									{`${selectedGame.gameTitle} `}
								{/if}
							</span></strong
						>
						<br /><br />
						<p style="font-size: {deviceHeight * 0.02}px;">
							{selectedGame.gameDescription}
						</p>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

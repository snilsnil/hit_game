<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/postList.css" media="(min-width: 1280px)" />
</svelte:head>

<table class="type">
	<thead>
		<tr>
			<th class="top" style="text-align:left"> 번호</th>
			<th class="top">제목</th>
			<th class="top">장르</th>
			<th class="top">개발사</th>
			<th class="top">배급사 </th>
			<th class="top">플랫폼</th>
			<th class="top">출시일</th>
			<th class="top">한국어 자막</th>
			<th class="top">한국어 음성</th>
		</tr>
	</thead>
	<tbody class="type06">
		{#if page.data.gameListData}
			{#each page.data.gameListData as game (game.gameNum)}
				<tr>
					<td>{game.gameNum}</td>
					<td>
						<!-- <a href="/gameList{game.gamePath}"> -->
						<a href={resolve('/gameList' + game.gamePath)}>
							{game.gameTitle}{game.gameSubTitle}
						</a>
					</td>
					<td>{game.gameGenre}</td>
					<td>{game.gameDeveloper}</td>
					<td>{game.gamePublisher}</td>
					<td>{game.gamePlatform}</td>
					<td>{game.gameReleaseDate}</td>
					<td>{game.gameKoreanSubtitle == 'true' ? 'O' : 'X'}</td>
					<td>{game.gameKoreanVoice == 'true' ? 'O' : 'X'}</td>
				</tr>
			{/each}
		{/if}
	</tbody>
</table>
<button class="write" on:click={() => (location.href = '/gameList/create')}>게임 추가</button>

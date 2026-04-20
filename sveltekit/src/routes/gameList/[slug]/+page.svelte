<script lang="ts">
	import { page } from '$app/state';
	const game = page.data.gameData;
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/postList.css" media="(min-width: 1280px)" />
</svelte:head>

<table class="type">
	<tbody class="type06">
		{#if game}
			<tr>
				<td>번호</td>
				<td>{game.gameNum}</td>
			</tr>
			<tr>
				<td>제목</td>
				<td>{game.gameTitle} {game.gameSubTitle}</td>
			</tr>
			<tr>
				<td>장르</td>
				<td>
					{#each game.gameGenre as genre (genre)}
						{genre}, &nbsp;
					{/each}
				</td>
			</tr>
			<tr>
				<td>개발사</td>
				<td>
					{#each game.gameDeveloper as developer (developer)}
						{developer}, &nbsp;
					{/each}
				</td>
			</tr>
			<tr>
				<td>배급사</td>
				<td>
					{#each game.gamePublisher as publisher (publisher)}
						{publisher}, &nbsp;
					{/each}
				</td>
			</tr>
			<tr>
				<td>플랫폼</td>
				<td>
					{#each game.gamePlatform as platform (platform)}
						{platform}, &nbsp;
					{/each}
				</td>
			</tr>
			<tr>
				<td>출시일</td>
				<td>{game.gameReleaseDate}</td>
			</tr>
			<tr>
				<td>한국어 자막 여부</td>
				<td>
					{#if game.gameKoreanSubtitle == 'true'}
						O
					{:else}
						X
					{/if}
				</td>
			</tr>
			<tr>
				<td>한국어 음성 여부</td>
				<td>
					{#if game.gameKoreanVoice == 'true'}
						O
					{:else}
						X
					{/if}
				</td>
			</tr>
			<tr>
				<td>하위 경로</td>
				<td>{game.gamePath}</td>
			</tr>
			<tr>
				<td>사진 경로</td>
				<td>{game.gameImage}</td>
			</tr>
			<tr>
				<td>영상 경로</td>
				<td>{game.gameVideo}</td>
			</tr>
			<tr>
				<td>내용</td>
				<td>{game.gameDescription}</td>
			</tr>
		{/if}
	</tbody>
</table>

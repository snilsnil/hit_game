<script lang="ts">
	import { page } from '$app/state';

	$effect(() => {
		if (page.data?.success === false) {
			alert(page.form.message);
		}
	});
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
					{game.gameGenre.join(', ')}
				</td>
			</tr>
			<tr>
				<td>개발사</td>
				<td>
					{game.gameDeveloper.join(', ')}
				</td>
			</tr>
			<tr>
				<td>배급사</td>
				<td>
					{game.gamePublisher.join(', ')}
				</td>
			</tr>
			<tr>
				<td>플랫폼</td>
				<td>
					{game.gamePlatform.join(', ')}
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
				<td><a href={game.gameImage} target="_blank">{game.gameImage}</a></td>
			</tr>
			<tr>
				<td>영상 경로</td>
				<td><a href={game.gameVideo} target="_blank">{game.gameVideo}</a></td>
			</tr>
			<tr>
				<td>내용</td>
				<td><pre>{game.gameDescription}</pre></td>
			</tr>
		{/if}
	</tbody>
</table>
<input
	type="button"
	onclick={() => (location.href = `${page.params.slug}/modification`)}
	value="글 수정"
/>

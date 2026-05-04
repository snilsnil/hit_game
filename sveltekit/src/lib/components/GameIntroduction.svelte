<script>
	import { page } from '$app/state';

	// 데이터 구조화
	const game = page.data.game;

	$effect(() => {
		if (page.data?.success === false) {
			alert(page.form.message);
		}
	});
</script>

<div id="head">
	<video controls>
		<source src={game.gameVideo} type="video/mp4" />
	</video>
	<table class="gm">
		<tbody>
			<tr>
				<td colspan="3">
					{#if game.gameSubtitle}
						{game.gameTitle} {game.gameSubTitle}
					{:else}
						{game.gameTitle}
					{/if}
				</td>
			</tr>
			<tr style="overflow-y:auto; overflow-x:hidden; width:100%; height:150px;">
				<td colspan="3"><img src={game.gameImage} /></td>
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
		</tbody>
	</table>
</div>

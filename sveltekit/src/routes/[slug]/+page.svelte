<script>
	import { page } from '$app/state';

	$effect(() => {
        if (page.data?.success === false) {
            alert(page.form.message);
        }
    });

	// 데이터 구조화
	const game = page.data.game;
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/postList.css" media="(min-width: 1280px)" />
</svelte:head>

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
		</tbody>
	</table>
</div>
<table class="type">
	<thead>
		<tr>
			<th class="top" style="text-align:left">글 번호</th>
			<th class="top">제목</th>
			<th class="top">작성자</th>
			<th class="top">작성일</th>
			<th class="top">조회수 </th>
		</tr>
	</thead>
	<tbody class="type06">
		<!-- {#if postData}
			{#each postData as post}
				<tr>
					<td>
						{post.postNum}
					</td>
					<td>
						<form action="/<%= title %>/view_<%= text.textNum %>" method="post">
							<input type="hidden" name="title" value="<%= title %>" />
							<input type="submit" class="write" value={post.postTitle} />
						</form>
					</td>
					<td>
						{post.id}
					</td>
					<td>
						{#if !post.update}
							{#if post.create.toLocaleDateString( 'ko-KR', { year: 'numeric', month: 'long', day: 'numeric' } ) == today.toLocaleDateString( 'ko-KR', { year: 'numeric', month: 'long', day: 'numeric' } )}
								{post.create.toLocaleTimeString('ko-KR', { hour: 'numeric', minute: 'numeric' })}
							{:else}
								{post.create.toLocaleDateString('ko-KR', {
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})}
							{/if}
						{:else if post.update.toLocaleDateString( 'ko-KR', { year: 'numeric', month: 'long', day: 'numeric' } ) == today.toLocaleDateString( 'ko-KR', { year: 'numeric', month: 'long', day: 'numeric' } )}
							{post.update.toLocaleTimeString('ko-KR', {
								hour: 'numeric',
								minute: 'numeric'
							})}
						{:else}
							{post.update.toLocaleDateString('ko-KR', {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						{/if}
					</td>
					<td>
						{post.textViewer}
					</td>
				</tr>
			{/each}
		{/if} -->
	</tbody>
</table>

<!-- <% if (isLoggedIn) { %>
    <form action="/write" method="post" style="text-align: center;">
        <input type="hidden" name="title" value="<%= title %>">
        <input type="submit" class="write" value="글 작성">
    </form>
    <% } %> -->
<br /><br /><br /><br /><br />

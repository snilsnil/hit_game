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
<button class="write" on:click={() => (location.href = '/gameList/create')}>게임 추가</button>
<script lang="ts">
	import { page } from '$app/state';

	const postNum = page.params.post;

	const formatTimestamp = (dateString: string | Date) => {
		const target = new Date(dateString);

		const year = target.getFullYear();
		const month = target.getMonth() + 1;
		const date = target.getDate();
		const hours = target.getHours();
		const minutes = target.getMinutes();
		const second = target.getSeconds();
		return `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes.toString().padStart(2, '0')}분 ${second}초`;
	};

	const postData = page.data.postData;
</script>

<table class="type">
	<thead>
		<tr>
			<th colspan="4" class="top" style="text-align:left">게시판 글보기</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>글 제목</td>
			<td>
				{postData.postTitle}
			</td>
			<td>조회수</td>
			<td>
				{postData.postView}
			</td>
		</tr>
		<tr>
			<td>작성자</td>
			<td>
				{postData.poster}
			</td>
			<td>작성일자</td>
			<td>
				{#if postData.createdAt == postData.updatedAt}
					{formatTimestamp(postData.createdAt)}
				{:else}
					{formatTimestamp(postData.updatedAt)}
				{/if}
			</td>
		</tr>
		<tr>
			<td colspan="4" style="padding-top:40px;">내용</td>
		</tr>
		<tr>
			<td colspan="4" style="width:100px; height:200px; text-align:left;">
				<pre>{postData.postDescription}</pre>
			</td>
		</tr>
	</tbody>
</table>
<input type="button" on:click={() => (location.href = `${postNum}/modification`)} value="글 수정" />

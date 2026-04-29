<script lang="ts">
	import { page } from '$app/state';

	const formatTimestamp = (dateString: string | Date) => {
    const target = new Date(dateString);
    const now = new Date();

    // 년, 월, 일 비교를 위한 변수
    const isSameYear = target.getFullYear() === now.getFullYear();
    const isSameMonth = target.getMonth() === now.getMonth();
    const isSameDay = target.getDate() === now.getDate();

    if (isSameYear && isSameMonth && isSameDay) {
      // 1. 해당일인 경우: 22시 10분
		const hours = target.getHours();
		const minutes = target.getMinutes();
		return `${hours}시 ${minutes.toString().padStart(2, '0')}분`;
    } else if (isSameYear) {
      // 2. 같은 년도지만 다른 날인 경우: 4월 29일
		return `${target.getMonth() + 1}월 ${target.getDate()}일`;
    } else {
      // 3. 다른 년도인 경우: 2025년도
		return `${target.getFullYear()}년도`;
    }
};


	$effect(() => {
        if (page.data?.success === false) {
            alert(page.form.message);
        }
    });
	const postData=page.data.postData
</script>

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
		{#if postData}
			{#each postData as post(post)}
				<tr>
					<td>
						{post.postNum}
					</td>
					<td>
						<a href="/{page.params.slug}/{post.postNum}">
							{post.postTitle}
						</a>
					</td>
					<td>
						{post.poster}
					</td>
					<td>
						{#if post.createdAt==post.updatedAt}
							{formatTimestamp(post.createdAt)}
						{:else}
							{formatTimestamp(post.updatedAt)}
						{/if}
					</td>
					
					<td>
						{post.postView}
					</td>
				</tr>
			{/each}
		{/if}
	</tbody>
</table>
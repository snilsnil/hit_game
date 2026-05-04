<script lang="ts">
	import { page } from '$app/state';
	import { enhance } from '$app/forms';
	import { modificationOnSubmitForm } from '$lib/handler/createPostHandler';
	import type { SubmitFunction } from '@sveltejs/kit';

	const postData = page.data.postData;

	const handlerEnhance: SubmitFunction = ({ formData, cancel }) => {
		const result = modificationOnSubmitForm(formData);

		if (!result.valid) {
			alert(result.message);
			cancel(); // submit 막기
		}
	};
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/postList.css" media="(min-width: 1280px)" />
</svelte:head>

<form method="post" action="?/modifyPost" use:enhance={handlerEnhance}>
	<table class="t">
		<thead>
			<tr>
				<th colspan="2" class="top" style="text-align:left"> 게시판 수정하기 </th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<div class="tt">작성자 : {page.data.id}</div>
					<input type="hidden" name="poster" value={page.data.id} readonly />
				</td>
			</tr>
			<tr>
				<td>
					<div class="tt">글 제목 : {postData.postTitle}</div>
				</td>
			</tr>
			<tr>
				<td
					><textarea
						class="tt"
						placeholder="글 내용"
						name="postDescription"
						maxlength="2048"
						style="height:350px;"
						value={postData.postDescription}
					></textarea></td
				>
			</tr>
		</tbody>
	</table>
	<input type="submit" value="글 수정하기" class="write" />
</form>

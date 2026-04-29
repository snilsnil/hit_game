<script lang="ts">
	import type { SubmitFunction } from '@sveltejs/kit';
	import { page } from '$app/state';
	import { enhance } from '$app/forms';
	import { onSubmitForm } from '$lib/handler/createPostHandler';
    
	$effect(() => {
        if (page.data?.success === false) {
            alert(page.form.message);
        }
    });

	const handlerEnhance: SubmitFunction = ({ formData, cancel }) => {
		const result = onSubmitForm(formData);

		if (!result.valid) {
			alert(result.message);
			cancel(); // submit 막기
		}
	};
</script>
<svelte:head>
	<link rel="stylesheet" href="/css/postList.css" media="(min-width: 1280px)" />
</svelte:head>


<form 
    method="post" 
    action="?/writePost"
    use:enhance={handlerEnhance}>
    <table class="t">
        <thead>
            <tr>
                <th colspan="2" class="top" style="text-align:left">
                    게시판 글쓰기
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                <div class="tt">작성자 : {page.data.id}</div>
                    <input type="hidden" name="poster" value="{page.data.id}" readonly>
                </td>
            </tr>
            <tr>
                <td><input class="tt" type="text" placeholder="글 제목" name="postTitle" maxlength="50"></td>
            </tr>
            <tr>
                <td><textarea class="tt" placeholder="글 내용" name="postDescription" maxlength="2048"
                        style="height:350px;"></textarea></td>
            </tr>
        </tbody>
    </table>
    <input type="submit" value="글쓰기" class="write">
</form>
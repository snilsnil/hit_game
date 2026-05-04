import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// export const prerender = true;

export const load: PageServerLoad = async ({ parent}) => {
    const parentData = await parent();
    if(!parentData.role){
        return redirect(302, '/');
    }
}

export const actions = {
    modifyPost: async ({ request, params}) => { 
        const slug = params.slug
        const post=params.post
        const data = await request.formData();

        const postDescription=data.get('postDescription')

        const response = await fetch(`http://localhost:3000/${slug}/${post}/modify`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({slug:slug, postNum:post, postDescription})
        });


        const result = await response.json();

        if (result.statusCode === 200) {
            return redirect(303, `/${slug}/${post}`);
        } else if (result.statusCode === 400) {
            return { success: false, message: result.message };
        } else {
            return { success: false, message: result.message || '게임 추가 중 오류가 발생했습니다.' };
        }
    }
} satisfies Actions
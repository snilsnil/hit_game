
import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';


export const load: PageServerLoad = async ({parent}) => {
    const parentData = await parent();
    if(!parentData.role){
        return redirect(302, '/');
    }
}

export const actions = {
    writePost: async ({ request, params, }) => {
        const slug=params.slug
        const data = await request.formData();
        
        const postTitle = data.get('postTitle')
        const poster = data.get('poster')
        const postDescription=data.get('postDescription')

        const response = await fetch(`http://localhost:3000/${slug}/write`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({postTitle, poster, postDescription})
        });


        const result = await response.json();

        if (result.statusCode === 200) {
            return redirect(303, `/${slug}`);
        } else if (result.statusCode === 400) {
            return { success: false, message: result.message };
        } else {
            return { success: false, message: result.message || '게임 추가 중 오류가 발생했습니다.' };
        }
        
    }
} satisfies Actions;
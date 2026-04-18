
import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
    // const accessToken = cookies.get('accessToken');
    // const refreshToken = cookies.get('refreshToken');
    // if (accessToken || refreshToken) {
    //     throw redirect(302, '/');
    // }
}

export const actions = {
    gameCreate: async ({ request, }) => {
        const data = await request.formData();

        

        const response = await fetch('http://localhost:3000/gameCreate', {
            method: 'POST',
            body: data
        });

        const result = await response.json();

         if (result.statusCode === 200) {
            return redirect(303, '/gameList');
        } else if (result.statusCode === 400) {
            return { success: false, message: result.message };
        } else {
            return { success: false, message: result.message || '게임 추가 중 오류가 발생했습니다.' };
        }
        
    }
} satisfies Actions;
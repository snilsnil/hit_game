
import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies }) => {
    const accessToken = cookies.get('accessToken');
    const refreshToken = cookies.get('refreshToken');
    if (accessToken || refreshToken) {
        throw redirect(302, '/');
    }
}

export const actions = {
    signup: async ({ request, }) => {
        const data = await request.formData();
        const id = data.get('id');
        const password = data.get('password');
        const email = data.get('email');
        
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, password, email })
        });

        const result = await response.json();

        if (result.statusCode === 200) {
            return redirect(303, '/login');
        } else if (result.statusCode === 400) {
            return { success: false, message: result.message };
        } else {
            return { success: false, message: result.message || '회원가입 중 오류가 발생했습니다.' };
        }
    }
} satisfies Actions;
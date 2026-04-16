
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
    const accessToken = cookies.get('accessToken');
    const refreshToken = cookies.get('refreshToken');
    if (accessToken || refreshToken) {
        throw redirect(302, '/');
    }
}

export const actions = {
    login: async ({ request, cookies }) => {
        const data = await request.formData();
        const id = data.get('id');
        const password = data.get('password');
        
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, password })
        });

        const result = await response.json();

        if (result.statusCode === 200) {

            // accessToken을 쿠키에 저장
            cookies.set('accessToken', result.accessToken, {
                httpOnly: true,
                secure: true,
                maxAge: 60 * 60 * 2 // 2 hours
                ,
                path: '/'
            });

            //refreshToken을 쿠키에 저장
            cookies.set('refreshToken', result.refreshToken, {
                httpOnly: true,
                secure: true,
                maxAge: 60 * 60 * 24 * 7 // 7 days
                ,
                path: '/'
            });
            
            return redirect(302, '/');

            // return { success: true };
        } else if (result.statusCode === 400) {
            return { success: false, message : result.message };
        } else {
            return { success: false, message : '문제가 발생했습니다. 잠시후 다시 시도해주세요.' };
        }
    }
} satisfies Actions;
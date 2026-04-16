import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {

    // 로그아웃 시 쿠키에서 accessToken과 refreshToken 삭제
    cookies.delete('accessToken', { path: '/' });
    cookies.delete('refreshToken', { path: '/' });

    return redirect(302, '/');
}
import type { LayoutServerLoad  } from "./$types";


// accessToken 검증 함수
const checkAccessToken = async (accessToken: string) => { 
        const checkAccessTokenResponse = await fetch('http://localhost:3000/checkAccessToken', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
            }
        });

        const checkAccessTokenResult = await checkAccessTokenResponse.json();

        return checkAccessTokenResult;
}

// refreshToken 검증 함수
const checkRefreshToken = async (refreshToken: string) => {
        const checkRefreshTokenResponse = await fetch('http://localhost:3000/checkRefreshToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${refreshToken}`
            }
        });

        const checkRefreshTokenResult = await checkRefreshTokenResponse.json();

        return checkRefreshTokenResult;
}



/**
 * 
 * 레이아웃 서버 로드 함수
 * 
 * 1. accessToken이 유효한 경우 사용자 정보를 반환
 * 2. accessToken이 유효하지 않은 경우 refreshToken을 검증하여 새로운 accessToken과 refreshToken을 발급받고 사용자 정보를 반환
 * 3. accessToken과 refreshToken이 모두 유효하지 않은 경우 쿠키에서 삭제
 * 
 */

export const load :LayoutServerLoad= async ({ cookies }) => {

    const accessToken = cookies.get('accessToken');
    const refreshToken = cookies.get('refreshToken');
    
    // accessToken이 유효하지 않은 경우 refreshToken을 검증하여 새로운 accessToken과 refreshToken을 발급받고 사용자 정보를 반환
    if (!accessToken&&refreshToken) {
        const checkRefreshTokenResult = await checkRefreshToken(refreshToken);
    
        if (checkRefreshTokenResult.statusCode === 200) {
            const newAccessToken = checkRefreshTokenResult.accessToken;
            const newRefreshToken = checkRefreshTokenResult.refreshToken;

            // 새로운 accessToken울 쿠키에 저장
            cookies.set('accessToken', newAccessToken, {
                httpOnly: true,
                secure: true,
                maxAge: 60 * 60 * 2 // 2 hours
                , path: '/'
            });
            // 새로운 refreshToken을 쿠키에 저장
            cookies.set('refreshToken', newRefreshToken, {
                httpOnly: true,
                secure: true,
                maxAge: 60 * 60 * 24 * 7 // 1 week
                , path: '/'
            });
        }
    } 

    // accessToken이 유효한 경우 사용자 정보를 반환
    if (accessToken) {
        const checkAccessTokenResult =await checkAccessToken(accessToken) 
        if (checkAccessTokenResult.statusCode === 200) {
            return { id: checkAccessTokenResult.id, role: checkAccessTokenResult.role };
        }
    }
    
    if(!accessToken&&!refreshToken){
        // accessToken과 refreshToken이 모두 유효하지 않은 경우 쿠키에서 삭제
        cookies.delete('accessToken', { path: '/' });
        cookies.delete('refreshToken', { path: '/' });
        return {id:null};
    }
}



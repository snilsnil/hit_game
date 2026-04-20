
import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

const changeStringToArray =  (gameData:FormData, target:string) => { 
    const string = gameData.get(target) as string
    

    // 1. 기존의 단일 문자열 값을 삭제
    gameData.delete(target);

    // 2. 콤마로 나누고 공백을 제거한 뒤, 하나씩 다시 추가(append)
    // 이렇게 하면 FormData 내부적으로 같은 키에 여러 값이 쌓임
    string.split(',').map(s => s.trim()).forEach(item => {
        gameData.append(target, item);
    });
    
}

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

        // 게임 개발사 데이터를 배열화
        changeStringToArray(data, "gameDeveloper")

        // 게임 배급사 데이터를 배열화
        changeStringToArray(data, "gamePublisher")

        // 게임 장르 데이터를 배열화
        changeStringToArray(data, "gameGenre")

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
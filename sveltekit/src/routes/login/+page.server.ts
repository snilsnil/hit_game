
import type { Actions } from './$types';

export const load = async () => {
    // const response = await fetch('http://localhost:3000/login');
    // const data = await response.json();
    // console.log(data);
    return {};
}

export const actions = {
    login: async ({ request, }) => {
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

        if (response.ok) {
            const result = await response.json();
            console.log(result);
            // return { success: true };
        } else {
            return { success: false, message : '문제가 발생했습니다. 잠시후 다시 시도해주세요.' };
        }
    }
} satisfies Actions;

import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
    // const response = await fetch('http://localhost:3000/login');
    // const data = await response.json();
    // console.log(data);
    return {};
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
            return { success: false, message: 'Signup failed' };
        }
    }
} satisfies Actions;
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

// export const prerender = true;

export const load: LayoutServerLoad = async ({ parent, params }) => {
	const parentData = await parent();

	if (parentData.role !== 'admin' || !parentData.role) {
		return redirect(302, '/');
	}

	const param = params;
	const getGameList = await fetch(`http://localhost:3000/gameList/${param.slug}`, {
		method: 'GET'
	});
	const result = await getGameList.json();

	if (result.statusCode === 200) {
		return { success: true, gameData: result.data };
	} else {
		return { success: false, message: result.message };
	}
};

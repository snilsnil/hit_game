import { getGameIntroduction, getPostListData } from '$lib/api/post/+server';
import type { PageServerLoad } from './$types';

export const prerender = true;


export const load: PageServerLoad = async ({ params }) => {
    const slug = params.slug

    return {
        game: await getGameIntroduction(slug),
        postData: await getPostListData(slug)
    }
}
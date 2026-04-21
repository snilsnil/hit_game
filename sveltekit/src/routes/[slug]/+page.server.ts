import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const slug=params.slug
    const getGameData=await fetch(`http://localhost:3000/${slug}`, {
        method:'GET',
    })
    const result = await getGameData.json()
    
    if (result.statusCode === 200) { 
        return {success: true, game:result.data}
    } else { 
        return {success: false, message:result.message}
    }
}
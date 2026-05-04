import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async({params} )=> { 
    const param = params;
    const getGameList = await fetch(`http://localhost:3000/gameList/${param.slug}`, {
        method:'GET',
    })
    const result = await getGameList.json()
    
    if (result.statusCode === 200) { 
        return {success: true, gameData:result.data}
    } else { 
        return {success: false, message:result.message}
    }
}
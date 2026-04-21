import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {

    const getGameData=await fetch(`http://localhost:3000/simpleGameList/`, {
        method:'GET',
    })
    const result = await getGameData.json()
    
    if (result.statusCode === 200) { 
        return {simpleGameData:result.data}
    } else { 
        return {message:result.message}
    }
}
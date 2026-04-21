import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {

    const getGameData=await fetch(`http://localhost:3000/simpleGameList/`, {
        method:'GET',
    })
    const result = await getGameData.json()
    
    if (result.statusCode === 200) { 
        return {success:true, simpleGameData:result.data}
    } else { 
        return {success:false, message:result.message}
    }
}
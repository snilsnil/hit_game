import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent,}) => {
    const parentData = await parent();

    if(parentData.role !== 'admin'||!parentData.role){
        return redirect(302, '/');
    }

    const getGameList = await fetch('http://localhost:3000/gameList', {
        method:'GET',
    })
    const result = await getGameList.json()
    
    if (result.statusCode === 200) { 
        return { success: true, gameListData:result.data}
    } else { 
        return  { success: false, message: result.message };
    }
};
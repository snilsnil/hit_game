import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const prerender = true;

export const load: PageServerLoad = async ({ parent, params}) => {
    const parentData = await parent();
    const param = params;

    if(parentData.role !== 'admin'||!parentData.role){
        return redirect(302, '/');
    }

    const getGameList = await fetch(`http://localhost:3000/gameList/${param.slug}`, {
        method:'GET',
    })
    const result = await getGameList.json()
    
    if (result.statusCode === 200) { 
        return {gameData:result.data}
    } else { 
        return {message:result.message}
    }
};
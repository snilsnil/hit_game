import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

// export const prerender = true;

export const load: LayoutServerLoad = async ({ parent}) => {
    const parentData = await parent();

    if(parentData.role !== 'admin'||!parentData.role){
        return redirect(302, '/');
    }

    
};
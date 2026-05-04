import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params }) => {
    const slug = params.slug
    const postNum = params.post
    
    const getPostData = await fetch(`http://localhost:3000/${slug}/${postNum}`, {
            method: 'GET'
    });

    const postData = await getPostData.json()

        if (postData.statusCode === 200) { 
        return {success:true, postData:postData.data}
    } else { 
        return {success:false, message:postData.message}
    }
}
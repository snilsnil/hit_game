export const getOriginGameData = async (slug:string) => { 

    const getGameData=await fetch(`http://localhost:3000/gameData/${slug}`, {
        method:'GET',
    })
    const result = await getGameData.json()
    
    if (result.statusCode === 200) { 
        return result.data
    } else { 
        return result.message
    }
}
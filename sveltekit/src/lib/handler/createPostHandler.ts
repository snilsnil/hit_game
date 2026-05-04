export function onSubmitForm(formdata:FormData) { 

    //텍스트
    const postTitle = formdata.get('postTitle')?.toString().trim() ?? "";
    const postDescription = formdata.get('postDescription')?.toString().trim() ?? "";

    //텍스트 검증
    if (!postDescription || !postTitle) { 
        return {
            valid: false,
            message: "모든 필드를 입력해주세요"
        };
    }

    return {valid:true}
}

export function modificationOnSubmitForm(formdata: FormData) { 
    
        const postDescription = formdata.get('postDescription')?.toString().trim() ?? "";

    //텍스트 검증
    if (!postDescription) { 
        return {
            valid: false,
            message: "모든 필드를 입력해주세요"
        };
    }

    return {valid:true}
}
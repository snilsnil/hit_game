export function checkValidData(
    originData: Record<string, unknown>, 
    formData: FormData
): FormData {
    // 반환할 새로운 FormData 객체 생성
    const resultFormData = new FormData();

    const arrayFields = ['gameGenre', 'gameDeveloper', 'gamePublisher', 'gamePlatform'];

    for (const key of Array.from(new Set(formData.keys()))) {
        const allValues = formData.getAll(key);
        
        let newValue: unknown;
        if (arrayFields.includes(key)) {
            newValue = allValues; 
        } else {
            newValue = allValues.length > 1 ? allValues : allValues[0];
        }

        // --- 파일 처리 ---
        if (newValue instanceof File) {
            // 파일이 존재할 경우에만 FormData에 추가
            if (newValue.size > 0 && newValue.name !== "") {
                resultFormData.append(key, newValue);
            }
            continue;
        }

        // --- 일반 데이터 변경 사항 체크 ---
        if (key in originData) {
            const oldValue = originData[key];
            
            if (isChanged(oldValue, newValue)) {
                // 변경되었다면 결과 FormData에 삽입
                if (Array.isArray(newValue)) {
                    // 리스트인 경우 모든 요소를 같은 키로 append 해야 배열로 인식됨
                    newValue.forEach(val => {
                        resultFormData.append(key, String(val));
                    });
                } else {
                    // 단일 값인 경우
                    resultFormData.append(key, String(newValue));
                }
            }
        }
    }

    return resultFormData;
}

function isChanged(oldVal: unknown, newVal: unknown): boolean {
    if (Array.isArray(oldVal) && Array.isArray(newVal)) {
        return JSON.stringify([...oldVal].sort()) !== JSON.stringify([...newVal].sort());
    }
    return JSON.stringify(oldVal) !== JSON.stringify(newVal);
}
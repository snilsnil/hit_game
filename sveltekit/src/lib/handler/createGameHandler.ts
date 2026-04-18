
export function onSubmitForm(formData: FormData) {

    
    //텍스트
    const gameTitle = formData.get('gameTitle')?.toString().trim() ?? '';
    const gameSubTitle = formData.get('gameSubTitle')?.toString().trim() ?? '';
    const gameDeveloper = formData.get('gameDeveloper')?.toString().trim() ?? '';
    const gamePublisher = formData.get('gamePublisher')?.toString().trim() ?? '';
    const gameReleaseDate = formData.get('gameReleaseDate')?.toString().trim() ?? '';
    const gameDescription = formData.get('gameDescription')?.toString().trim() ?? '';

     // 플랫폼 체크박스
    const platforms = formData.getAll('gamePlatform');

    // 한국어 자막 체크박스
    const koreanSubtitle = formData.get('gameKoreanSubtitle')?.toString() ?? '';;
    console.log(koreanSubtitle)

    //한국어 음성 체크박스
    const koreanVoice = formData.get('gameKoreanVoice')?.toString() ?? '';

    // 파일
    const gameImage = formData.get('gameImage') as File | null;
    const gameVideo = formData.get('gameVideo') as File | null;


    // 텍스트 검증
    if (!gameTitle || !gameSubTitle || !gameDeveloper || !gamePublisher || !gameReleaseDate || !gameDescription) {
    return {
        valid: false,
        message: '모든 필드를 입력해주세요'
        };
    }

    // 플랫폼 체크박스 검증
    if (!platforms || platforms.length === 0) {
    return { valid: false, message: '플랫폼을 최소 1개 선택해주세요' };
    }

    // 한국어 자막 체크박스 검증
    if (!koreanSubtitle || koreanSubtitle.length === 0) {
    return { valid: false, message: '한국어 자막 여부를 선택해주세요' };
    }

    // 한국어 음성 체크박스 검증
    if (!koreanVoice || koreanVoice.length === 0) {
    return { valid: false, message: '한국어 음성 지원 여부를 선택해주세요' };
    }

  // 이미지 검증
    if (!gameImage || !(gameImage instanceof File) || gameImage.size === 0) {
    return { valid: false, message: '이미지를 업로드해주세요' };
    }

  // 영상 검증
    if (!gameVideo || !(gameVideo instanceof File) || gameVideo.size === 0) {
    return { valid: false, message: '영상 파일을 업로드해주세요' };
    }

    return { valid: true };
}
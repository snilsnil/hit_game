<svelte:head>
    <link rel="stylesheet" href="/css/logInAndSignUp.css" media="(min-width: 1280px)" />
    <!-- <link rel="stylesheet" href="/css/logInAndSignUp_690.css" media="(min-width: 690px) and (max-width: 1279px)" />
    <link rel="stylesheet" href="/css/logInAndSignUp_340.css" media="(min-width: 340px) and (max-width: 659px)" /> -->  
</svelte:head>

<script>
    import { enhance } from '$app/forms';
    import { page } from '$app/state';

    /**
	 * @param {{ preventDefault: () => void; currentTarget: HTMLFormElement; }} event
	 */
    
    function onSubmitForm(event) {

        const form = event.currentTarget;
        const formData = new FormData(form);

        const id = formData.get('id')?.toString().trim() ?? '';
        const password = formData.get('password')?.toString() ?? '';
        const password2 = formData.get('password2')?.toString() ?? '';
        const email = formData.get('email')?.toString() ?? '';

        if (id === '' || password === '' || password2 === '' || email === '') {
            alert('모든 필드를 입력해주세요.');
            event.preventDefault();// 폼 제출 방지
            return ; 
        }

        if (password !== password2) {
            alert('비밀번호가 일치하지 않습니다.');
            event.preventDefault();// 폼 제출 방지
            return ; 
        }

        form?.submit(); // 폼 제출 허용
    }

    // 액션 실패 시 alert로 메시지 출력
    $effect(() => {
        if (page.form?.success === false) {
            alert(page.form.message);
        }
    });

</script>

    <form action="?/signup" method="post" class="loginForm" {onSubmitForm} use:enhance>
        <h2>회원가입</h2>
        <div class="Form">
            <table>
                <tbody>
                    <tr>
                        <td class="alert">
                            아이디
                        </td>
                        <td>
                            <input type="text" class="id" name="id" placeholder="아이디">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="Form">
            <table>
                <tbody>
                    <tr>
                        <td class="alert">
                            비밀번호
                        </td>
                        <td>
                            <input type="password" class="id" name="password" placeholder="비밀번호">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="Form">
            <table>
                <tbody>
                    <tr>
                        <td class="alert">
                            재입력
                        </td>
                        <td>
                            <input type="password" class="id" name="password2" placeholder="비밀번호 확인">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="Form">
            <table>
                <tbody>
                    <tr>
                        <td class="alert">
                            이메일
                        </td>
                        <td>
                            <input type="email" class="id" name="email" placeholder="이메일">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <input type="submit" class="btn" value="회원가입">
    </form>
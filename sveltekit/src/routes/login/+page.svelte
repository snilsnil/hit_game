<script>
	import { enhance } from "$app/forms";
    import { page } from '$app/state';

    $effect(() => {
        if (page.form?.success === false) {
            alert(page.form.message);
        }
    });

    /**
	 * @param {{ preventDefault: () => void; currentTarget: HTMLFormElement; }} event
	 */

    const onSubmitForm = (event) => {
        const formData = new FormData(event.currentTarget);
        const id = formData.get('id');
        const password = formData.get('password');

        if (!id || !password) {
            alert('아이디와 비밀번호를 모두 입력해주세요.');
            event.preventDefault();
            return;
        }
    };



</script>
<svelte:head>
    <link rel="stylesheet" href="/css/logInAndSignUp.css" media="(min-width: 1280px)" />
	<!-- <link rel="stylesheet" href="/css/logInAndSignUp_690.css" media="(min-width: 690px) and (max-width: 1279px)" />
	<link rel="stylesheet" href="/css/logInAndSignUp_340.css" media="(min-width: 340px) and (max-width: 659px)" /> -->
</svelte:head>

<form action="?/login" method="post" class="loginForm" { onSubmitForm } use:enhance>
    <h2>로그인</h2>
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
    <input type="submit" class="btn" value="로그인">
</form>

<input class = "signup" type="button" value="ID/PWD 찾기" onclick={() => {location.href = '/findidpassword';}}>

<form action="/signup" class="loginForm">
    <div class="bottomText2">
        <table>
            <tbody>
                <tr>
                    <td class="signup_button_td1">
                        아직 회원이 아니신가요?
                    </td>
                </tr>
                <tr>
                    <td class="signup_button_td2">
                        <input class="signup" type="submit" value="회원가입">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</form>
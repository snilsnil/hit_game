<script lang="ts">
	import { enhance } from "$app/forms";
    import { onSubmitForm } from '$lib/handler/createGameHandler';
    import type { SubmitFunction } from '@sveltejs/kit';

    const handlerEnhance:SubmitFunction = ({ formData, cancel }) => {
        const result = onSubmitForm(formData);

        if (!result.valid) {
            alert(result.message);
            cancel();   // submit 막기
        }
    };

</script>

<svelte:head>
	<link rel="stylesheet" href="/css/postList.css" media="(min-width: 1280px)" />
</svelte:head>

<form method="post" action="?/gameCreate" use:enhance={handlerEnhance} enctype="multipart/form-data">
    <table class="t">
        <thead>
            <tr>
                <th colspan="2" class="top" style="text-align:left">게임 추가<input style="float:right; color: black;"
                        type="submit" value="글쓰기" class="write"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><input class="tt" type="text" placeholder=" 제목" name="gameTitle" maxlength="50"></td>
            </tr>
            <tr>
                <td><input class="tt" type="text" placeholder="부제목" name="gameSubTitle" maxlength="50"></td>
            </tr>
            <tr>
                <td><input class="tt" type="text" placeholder="개발사" name="gameDeveloper" maxlength="50"></td>
            </tr>
            <tr>
                <td><input class="tt" type="text" placeholder="배급사" name="gamePublisher" maxlength="50"></td>
            </tr>
            <tr>
                <td>
                    플랫폼
                    <div class="platform-group">

                        <!-- PC -->
                        PC<br>
                        <label><input type="checkbox" name="gamePlatform" value="windows"> Windows</label>
                        <label><input type="checkbox" name="gamePlatform" value="linux"> Linux</label>
                        <label><input type="checkbox" name="gamePlatform" value="macos"> macOS</label>

                        <br>

                        <!-- PlayStation -->
                        PlayStation<br>
                        <label><input type="checkbox" name="gamePlatform" value="ps1"> PS1</label>
                        <label><input type="checkbox" name="gamePlatform" value="ps2"> PS2</label>
                        <label><input type="checkbox" name="gamePlatform" value="ps3"> PS3</label>
                        <label><input type="checkbox" name="gamePlatform" value="ps4"> PS4</label>
                        <label><input type="checkbox" name="gamePlatform" value="ps5"> PS5</label>
                        <label><input type="checkbox" name="gamePlatform" value="psp"> PSP</label>
                        <label><input type="checkbox" name="gamePlatform" value="psvita"> PS Vita</label>

                        <br>

                        <!-- Xbox -->
                        Xbox<br>
                        <label><input type="checkbox" name="gamePlatform" value="xbox"> Xbox (Original)</label>
                        <label><input type="checkbox" name="gamePlatform" value="xbox360"> Xbox 360</label>
                        <label><input type="checkbox" name="gamePlatform" value="xboxone"> Xbox One</label>
                        <label><input type="checkbox" name="gamePlatform" value="xbox-series"> Xbox Series X/S</label>

                        <br>

                        <!-- Nintendo -->
                        Nintendo<br>
                        <label><input type="checkbox" name="gamePlatform" value="nes"> NES</label>
                        <label><input type="checkbox" name="gamePlatform" value="snes"> SNES</label>
                        <label><input type="checkbox" name="gamePlatform" value="n64"> Nintendo 64</label>
                        <label><input type="checkbox" name="gamePlatform" value="gamecube"> GameCube</label>
                        <label><input type="checkbox" name="gamePlatform" value="wii"> Wii</label>
                        <label><input type="checkbox" name="gamePlatform" value="wiiu"> Wii U</label>
                        <label><input type="checkbox" name="gamePlatform" value="switch"> Nintendo Switch</label>

                        <br>

                        <!-- Nintendo Handheld -->
                        Handheld<br>
                        <label><input type="checkbox" name="gamePlatform" value="gameboy"> Game Boy</label>
                        <label><input type="checkbox" name="gamePlatform" value="gba"> Game Boy Advance</label>
                        <label><input type="checkbox" name="gamePlatform" value="nds"> Nintendo DS</label>
                        <label><input type="checkbox" name="gamePlatform" value="3ds"> Nintendo 3DS</label>

                    </div>
                </td>
            </tr>
            <tr>
                <td><input class="tt" type="text" placeholder="출시일 ex) 20260101" name="gameReleaseDate" maxlength="50"></td>
            </tr>
            <tr>
                <td>
                    <div class="koreanSubtitles">
                        한국어 자막<br>
                        <label><input type="radio" name="gameKoreanSubtitle" value="true"> O</label>
                        <label><input type="radio" name="gameKoreanSubtitle" value="false"> X</label>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="koreanSubtitle">
                        한국어 음성<br>
                        <label><input type="radio" name="gameKoreanVoice" value="true"> O</label>
                        <label><input type="radio" name="gameKoreanVoice" value="false"> X</label>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    게임 사진
                    <input type=file name="gameImage" accept="image/png">
                </td>
            </tr>
            <tr>
                <td>
                    게임 영상
                    <input type=file name="gameVideo" accept="video/mp4">
                </td>
            </tr>
            <tr>
                <td><textarea class="tt" placeholder="게임 설명" name="gameDescription" maxlength="2048"
                        style="height:350px;"></textarea></td>
            </tr>
            
        </tbody>
    </table>
    <input type='submit' class="btn" value="추가">
</form>
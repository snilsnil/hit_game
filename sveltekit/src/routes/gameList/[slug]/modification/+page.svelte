<script lang="ts">
	import { page } from '$app/state';

	const gameData = page.data.gameData;

	$effect(() => {
		if (page.data?.success === false) {
			alert(page.form.message);
		}
	});

	const confirmCheckedPlatform = (checkPlatform: string) => {
		let result: boolean = false;
		gameData.gamePlatform.map((platformData: string) => {
			if (platformData === checkPlatform) {
				return (result = true);
			}
		});
		return result;
	};

	const confirmCheckedKorean = (checkKorean: string, valueKorean: string) => {
		let result: boolean = false;
		if (checkKorean === valueKorean) {
			return (result = true);
		}
		return result;
	};

	const changeString = (arrayData: []) => {
		const result: string = arrayData.join(', ');
		return result;
	};
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/postList.css" media="(min-width: 1280px)" />
</svelte:head>

<form method="post" action="?/modifyGame" enctype="multipart/form-data">
	<table class="t">
		<thead>
			<tr>
				<th colspan="2" class="top" style="text-align:left">게임 수정</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td
					><input
						class="tt"
						type="text"
						placeholder=" 제목"
						name="gameTitle"
						maxlength="50"
						value={gameData.gameTitle}
					/></td
				>
			</tr>
			<tr>
				<td
					><input
						class="tt"
						type="text"
						placeholder="부제목"
						name="gameSubTitle"
						maxlength="50"
						value={gameData.gameSubTitle}
					/></td
				>
			</tr>
			<tr>
				<td
					><input
						class="tt"
						type="text"
						placeholder="개발사"
						name="gameDeveloper"
						maxlength="50"
						value={changeString(gameData.gameDeveloper)}
					/></td
				>
			</tr>
			<tr>
				<td
					><input
						class="tt"
						type="text"
						placeholder="장르"
						name="gameGenre"
						maxlength="50"
						value={changeString(gameData.gameGenre)}
					/></td
				>
			</tr>
			<tr>
				<td
					><input
						class="tt"
						type="text"
						placeholder="배급사"
						name="gamePublisher"
						maxlength="50"
						value={changeString(gameData.gamePublisher)}
					/></td
				>
			</tr>
			<tr>
				<td>
					플랫폼
					<div class="platform-group">
						<!-- PC -->
						PC<br />
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="windows"
								checked={confirmCheckedPlatform('windows')}
							/> Windows</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="linux"
								checked={confirmCheckedPlatform('linux')}
							/> Linux</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="macos"
								checked={confirmCheckedPlatform('macos')}
							/> macOS</label
						>

						<br />

						<!-- PlayStation -->
						PlayStation<br />
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="ps1"
								checked={confirmCheckedPlatform('ps1')}
							/> PS1</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="ps2"
								checked={confirmCheckedPlatform('ps2')}
							/> PS2</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="ps3"
								checked={confirmCheckedPlatform('ps3')}
							/> PS3</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="ps4"
								checked={confirmCheckedPlatform('ps4')}
							/> PS4</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="ps5"
								checked={confirmCheckedPlatform('ps5')}
							/> PS5</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="psp"
								checked={confirmCheckedPlatform('psp')}
							/> PSP</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="psvita"
								checked={confirmCheckedPlatform('psvista')}
							/> PS Vita</label
						>

						<br />

						<!-- Xbox -->
						Xbox<br />
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="xbox"
								checked={confirmCheckedPlatform('xbox')}
							/> Xbox (Original)</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="xbox360"
								checked={confirmCheckedPlatform('xbox360')}
							/> Xbox 360</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="xboxone"
								checked={confirmCheckedPlatform('xboxone')}
							/> Xbox One</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="xbox-series"
								checked={confirmCheckedPlatform('xbox-series')}
							/> Xbox Series X/S</label
						>

						<br />

						<!-- Nintendo -->
						Nintendo<br />
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="nes"
								checked={confirmCheckedPlatform('nes')}
							/> NES</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="snes"
								checked={confirmCheckedPlatform('snes')}
							/> SNES</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="n64"
								checked={confirmCheckedPlatform('n64')}
							/> Nintendo 64</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="gamecube"
								checked={confirmCheckedPlatform('gamecube')}
							/> GameCube</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="wii"
								checked={confirmCheckedPlatform('wii')}
							/> Wii</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="wiiu"
								checked={confirmCheckedPlatform('wiiu')}
							/> Wii U</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="ns"
								checked={confirmCheckedPlatform('ns')}
							/> Nintendo Switch</label
						>

						<br />

						<!-- Nintendo Handheld -->
						Handheld<br />
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="gameboy"
								checked={confirmCheckedPlatform('gameboy')}
							/> Game Boy</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="gba"
								checked={confirmCheckedPlatform('gba')}
							/> Game Boy Advance</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="nds"
								checked={confirmCheckedPlatform('nds')}
							/> Nintendo DS</label
						>
						<label
							><input
								type="checkbox"
								name="gamePlatform"
								value="3ds"
								checked={confirmCheckedPlatform('3ds')}
							/> Nintendo 3DS</label
						>
					</div>
				</td>
			</tr>
			<tr>
				<td
					><input
						class="tt"
						type="text"
						placeholder="출시일 ex) 20260101"
						name="gameReleaseDate"
						maxlength="50"
						value={gameData.gameReleaseDate}
					/></td
				>
			</tr>
			<tr>
				<td>
					<div class="koreanSubtitles">
						한국어 자막<br />
						<label
							><input
								type="radio"
								name="gameKoreanSubtitle"
								value="true"
								checked={confirmCheckedKorean('true', gameData.gameKoreanSubtitle)}
							/> O</label
						>
						<label
							><input
								type="radio"
								name="gameKoreanSubtitle"
								value="false"
								checked={confirmCheckedKorean('false', gameData.gameKoreanSubtitle)}
							/> X</label
						>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class="koreanSubtitle">
						한국어 음성<br />
						<label
							><input
								type="radio"
								name="gameKoreanVoice"
								value="true"
								checked={confirmCheckedKorean('true', gameData.gameKoreanVoice)}
							/> O</label
						>
						<label
							><input
								type="radio"
								name="gameKoreanVoice"
								value="false"
								checked={confirmCheckedKorean('false', gameData.gameKoreanVoice)}
							/> X</label
						>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					게임 사진
					<input type="file" name="gameImage" accept="image/png" />
				</td>
				<td>
					게임 사진 경로 : <a href={gameData.gameImage} target="_blank">{gameData.gameImage}</a>
				</td>
			</tr>
			<tr>
				<td>
					게임 영상
					<input type="file" name="gameVideo" accept="video/mp4" />
				</td>
				<td>
					게임 영상 경로 : <a href={gameData.gameVideo} target="_blank"> {gameData.gameVideo}</a>
				</td>
			</tr>
			<tr>
				<td>
					<input
						class="tt"
						type="text"
						placeholder="게임 경로"
						name="gamePath"
						maxlength="50"
						value={gameData.gamePath}
					/>
				</td>
			</tr>
			<tr>
				<td
					><textarea
						class="tt"
						placeholder="게임 설명"
						name="gameDescription"
						maxlength="2048"
						style="height:350px;"
						value={gameData.gameDescription}
					></textarea></td
				>
			</tr>
		</tbody>
	</table>
	<input type="submit" class="btn" value="수정" />
</form>

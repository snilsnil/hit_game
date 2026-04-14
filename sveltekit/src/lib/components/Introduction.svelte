<script lang="ts">
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';

	const games = [
		{
			id: 'LOZBOTW',

			image: '/img/LOZBOTW.png',
			video: '/video/LOZBOTW.mp4',
			title: '젤다의 전설 : 브레스 오브 더 와일드',
			story: [
				'대재앙이라고 불리는 재해가 일어나 하이랄 왕국은 멸망했다…….',
				'그로부터 100년 후, 주인공 링크는 지하유적에서 오랜 잠으로부터',
				'깨어나 신비한 목소리에 이끌려 대지로 발을 내딛는다.',
			],
		},
		{
			id: 'supermario',
			image: '/img/supermario.png',
			video: '/video/supermario.mp4',
			title: '슈퍼 마리오브라더스',
			story: [
				'버섯들이 사는 평화로운 왕국은 어느 날 강력한 마법을 다루는',
				'큰 거북 쿠파 일족의 침략을 받게 되었습니다.',
				'얌전한 버섯 일족은 모두 쿠파의 마법으로 바위나 벽돌, 포자로',
				'모습이 변해버리고, 버섯 왕국은 사라지게 되었습니다.',
				'버섯들에게 걸린 마법을 풀고 되살릴 수 있는 것은',
				'버섯 왕국의 피치공주뿐입니다.',
				'당신이 피치공주를 구하여 마법을 풀어주세요.',
			],
		},
		{
			id: 'LOZSS',
			image: '/img/LOZSS.png',
			video: '/video/LOZSS.mp4',
			title: '젤다의 전설 : 스카이워드 소드',
			story: [
				'아주 먼 옛날 사악한 존재가 모든 소원과 욕망을 이루는',
				'트라이포스를 얻기 위해 전쟁을 일으켰고, 그 때문에 여신은',
				'트라이포스를 지키기 위해 살아남은 사람들과 운해 너머로 대지를 띄웠다.',
				'그 이후 어느 날 스카이로프트의 기사학교에 다니는 링크는 소꿉친구 젤다와',
				'의식을 끝마치고 같이 하늘을 날던중, 젤다가 이상한 검은 폭풍에 빨려들어가',
				'상상 속에만 존재하던 대지로 떨어지는데...',
			],
		},
	];

	let selectedGame: typeof games[number] | null = null;
	let deviceWidth = 0;
	let deviceHeight = 0;

    onMount(() => {
        if (window.innerWidth > 1279) {
			deviceWidth = window.innerWidth;
            deviceHeight = window.innerHeight;
            selectedGame = games[Math.floor(Math.random() * games.length)];
        }
    });
</script>

<div id="article">
    <div id="contents">
        <div id="gm_prolog nav">
            <div id="tdvideo">
                {#if selectedGame}
                    <video id="vdio" muted autoplay loop>
                        <source src={selectedGame.video} type="video/mp4" />
                    </video>
                {/if}
            </div>
            <div id = "tdimg" style= "margin-top: {deviceHeight * 0.35}px;">
                <a href={resolve(`/${selectedGame?.id}` as '/')}>
					<img style="width: {deviceWidth * 0.15}px;" src={selectedGame?.image} alt={selectedGame?.title}  />
                </a>
            </div>
            <div id= "tdstory" style="margin- top: {deviceHeight * 0.35 }px;">
                <div id="gm_story">
                    <strong  style=" padding-left:0px; font-size: {deviceHeight  *  0.02}px;"><span>{selectedGame ? selectedGame.title : ''}</span></strong>
                    <br><br>
                    <p style= "font-size: {deviceHeight  *  0.02}px;">
                        {#if selectedGame}
                            {#each selectedGame.story as line (line)}
                                {line}<br>
                            {/each}
                        {/if}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
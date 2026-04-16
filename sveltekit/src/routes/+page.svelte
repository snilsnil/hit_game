<script>
	import { resolve } from '$app/paths';
	import Introduction from '$lib/components/Introduction.svelte';
	

	// 데이터 구조화
    const games = [
        { id: 1, slug: 'LOZBOTW', title: '젤다의 전설', subTitle: '브레스오브더 와일드' },
        { id: 2, slug: 'LOZSS', title: '젤다의 전설', subTitle: '스카이워드 소드' },
        { id: 3, slug: 'supermario', title: '슈퍼 마리오', subTitle: '브라더스' },
        { id: 4, slug: 'valorant', title: '발로란트', subTitle: '' },
        { id: 5, slug: 'diablo4', title: '디아블로 4', subTitle: '' },
        { id: 6, slug: 'LOL', title: '리그 오브 레전드', subTitle: '' },
        { id: 7, slug: 'ACV', title: '어쌔신 크리드', subTitle: '발할라' },
        { id: 8, slug: 'CODMW2', title: '콜 오브 듀티', subTitle: '모던 워페어 2' },
        { id: 9, slug: 'overwatch', title: '오버워치', subTitle: '' },
        { id: 10, slug: 'BF2', title: '배틀필드 2042', subTitle: '' },
        { id: 11, slug: 'fifa23', title: '피파 23', subTitle: '' },
        { id: 12, slug: 'GOW', title: '갓 오브 워', subTitle: '' },
        { id: 13, slug: 'PLA', title: '포켓몬스터', subTitle: '레전드 아르세우스' },
        { id: 14, slug: 'tekken7', title: '철권 7', subTitle: '' }
    ];
</script>

<Introduction />

<div style="color:white" id="gm_menu">
	<div class="device" id="nintento_device">
		<div class="imagepr">
			{#each games as game (game.id)}
				<div class="image" id={"image" + game.id}>
					<a href={resolve("/" + game.slug)}>
						<img src={`/img/${game.slug}.png`} alt="{game.title} {game.subTitle}" />
					</a>
					<div id="imageprst">{game.title}<br />{game.subTitle}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

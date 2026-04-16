<script lang="ts">
	// import { page } from '$app/state';
	// console.log(page.data);

	import { page } from '$app/state';
</script>

<header>
	<nav>
		<h1>
			<div id="maindiv">
				<div id="nav">
					<table id="mainmenu">
						<tbody>
							<tr>
								<td
									style="width:120px; cursor:pointer;"
									onclick={() => {
										location.href = '/';
									}}
								>
									<img style="width:120px; box-shadow:none;" src="/img/logo.png" alt="logo" />
								</td>
							</tr>
						</tbody>
					</table>
					<!-- 여기는 로그인 관련 사항(jwt를 사용할것의므로 잠시 보류) -->
					<table>
						<tbody>
							<tr>
								<td>
									{#if !page.data.id }

										<input id="login" type="button" value="로그인" onclick={() => {location.href = '/login';}} />

									{:else}

										<div  id="user">
											{page.data.id}님 환영합니다.<input id="logout" type="button" value="로그아웃" onclick={() => {location.href = '/logout';}} />
										</div>

									{/if}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</h1>
	</nav>
</header>

<script lang="ts">
	import { resolve } from '$app/paths';
	// import { page } from '$app/state';
	// console.log(page.data);

	import { page } from '$app/state';
</script>

<header>
	<nav>
		<h1>
			<div id="maindiv">
				<div id="nav">
					<ul id="mainmenu">
						<li>
							<a href={resolve('/')} style="width:120px;">
								<img style="width:120px; box-shadow:none;" src="/img/logo.png" alt="logo" />
							</a>
						</li>
						<li>
							{#if !page.data.id }
								<input id="login" type="button" value="로그인" onclick={() => {location.href = '/login';}} />
							{:else}
								<div  id="user">
							{page.data.id}님 환영합니다. &nbsp;&nbsp; <input id="logout" type="button" value="로그아웃" onclick={() => {location.href = '/logout';}} />
								</div>
							{/if}
						</li>
					</ul>


					<!-- <table id="mainmenu">
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
					</table> -->
				</div>
			</div>
		</h1>
	</nav>
</header>

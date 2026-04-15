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
									on:click={() => {
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
									<!-- {#if }

									{else}

									{/if} -->
								
										<input id="login" type="button" value="로그인" on:click={() => {location.href = '/login';}} />
						
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</h1>
	</nav>
</header>

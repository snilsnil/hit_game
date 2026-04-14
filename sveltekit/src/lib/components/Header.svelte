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
				</div>
				<div id="article">
					<div id="contents">
						<script>
                            // 수정한 부분
                            var chatWindowWidth = window.innerWidth;
                            if (chatWindowWidth > 1023) {
                                document.write(gm_prolog());
                            }
						</script>
					</div>
				</div>
			</div>
		</h1>
	</nav>
</header>

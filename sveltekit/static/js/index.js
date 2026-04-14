var imageURLs = ["img/LOZBOTW.png", "img/supermario.png", "img/LOZSS.png"];
var videoURLs = ["video/LOZBOTW.mp4", "video/supermario.mp4", "video/LOZSS.mp4"];
var gmaeURLs = ["LOZBOTW", "supermario", "LOZSS"];

var gmname = new Array();
gmname[0] = "젤다의 전설 : 브레스 오브 더 와일드";
gmname[1] = "슈퍼 마리오브라더스";
gmname[2] = "젤다의 전설 : 스카이워드 소드";

var gmstory = new Array();
gmstory[0] = "대재앙이라고 불리는 재해가 일어나 하이랄 왕국은 멸망했다…….<br>그로부터 100년 후, 주인공 링크는 지하유적에서 오랜 잠으로부터<br> 깨어나 신비한 목소리에 이끌려 대지로 발을 내딛는다.";
gmstory[1] = "버섯들이 사는 평화로운 왕국은 어느 날 강력한 마법을 다루는<br>큰 거북 쿠파 일족의 침략을 받게 되었습니다.<br>얌전한 버섯 일족은 모두 쿠파의 마법으로 바위나 벽돌, 포자로<br>모습이 변해버리고, 버섯 왕국은 사라지게 되었습니다.<br>버섯들에게 걸린 마법을 풀고 되살릴 수 있는 것은<br>버섯 왕국의 피치공주뿐입니다.<br>당신이 피치공주를 구하여 마법을 풀어주세요.";
gmstory[2] = "아주 먼 옛날 사악한 존재가 모든 소원과 욕망을 이루는<br>트라이포스를 얻기 위해 전쟁을 일으켰고, 그 때문에 여신은<br>트라이포스를 지키기 위해 살아남은 사람들과 운해 너머로 대지를 띄웠다.<br>그 이후 어느 날 스카이로프트의 기사학교에 다니는 링크는 소꿉친구 젤다와<br>의식을 끝마치고 같이 하늘을 날던중, 젤다가 이상한 검은 폭풍에 빨려들어가<br> 상상 속에만 존재하던 대지로 떨어지는데...<br>";


var deviceWidth = window.innerWidth;
var deviceHeight = window.innerHeight;

var randomIndex = Math.floor(Math.random() * imageURLs.length);



function getImageTag() {
	var img = '<img id=\"main_image\" src=\"';
	img += imageURLs[randomIndex];
	img += '\" alt=\"Some alt text\" align=\"top\" />';
	return img;
}

function getVideoTag() {
	var video = '<video id=\"vdio\" muted autoplay loop>';
	video += '<source src=\"';
	video += videoURLs[randomIndex];
	video += '\" type=\"video/mp4\">';
	video += '</video>';
	return video;
}

function getGM() {
	var gm = '<div id=\"gm_story\"><strong><span>';
	gm += gmname[randomIndex];
	gm += '</span></strong><br><br>';
	gm += '<p>';
	gm += gmstory[randomIndex];
	gm += '</p>';
	gm += '</div>';
	return gm;
}

function gm_prolog() {
	var gm = '<div id="gm_prolog">';
	gm += '<div id="tdvideo">';
	gm += getVideoTag();
	gm += '</div>';
	gm += '<div id="tdimg"';
	gm += 'style=\" height:400px; vertical-align:top; ';
	if (deviceWidth > 1869) {
		gm += 'margin-left: -';
		gm += deviceWidth * 0.45;
	}
	else if (deviceWidth > 1789) {
		gm += 'margin-left: -';
		gm += deviceWidth * 0.4;
	}
	else if (deviceWidth > 1709) {
		gm += 'margin-left: -';
		gm += deviceWidth * 0.35;
	}
	else if (deviceWidth > 1629) {
		gm += 'margin-left: -';
		gm += deviceWidth * 0.33;
	}
	else if (deviceWidth > 1549) {
		gm += 'margin-left: -';
		gm += deviceWidth * 0.3;
	}
	else if (deviceWidth > 1469) {
		gm += 'margin-left: -';
		gm += deviceWidth * 0.27;
	}
	else if (deviceWidth > 1389) {
		gm += 'margin-left: -';
		gm += deviceWidth * 0.24;
	}
	else if (deviceWidth > 1309) {
		gm += 'margin-left: -';
		gm += deviceWidth * 0.24;
	}
	else if (deviceWidth > 1229) {
		gm += 'margin-left: -';
		gm += deviceWidth * 0.2;
	}
	else if (deviceWidth > 1149) {
		gm += 'margin-left: -';
		gm += deviceWidth * 0.15;
	}
	else if (deviceWidth > 1023) {
		gm += 'margin-left: -';
		gm += deviceWidth * 0.08;
	}
	gm += 'px; margin-top: ';
	gm += deviceHeight * 0.6;
	gm += 'px; \">';
	gm += '<a href=\"/';
	gm += gmaeURLs[randomIndex];
	gm += '\">';
	gm += getImageTag();
	gm += '</a>';
	gm += '</div>';
	gm += '<div id="tdstory"';
	gm += 'style=\" height:400px; vertical-align:top; ';
	gm += 'color:#ffffff;';
	gm += 'margin-top: ';
	gm += deviceHeight * 0.6;
	gm += 'px; \">';
	gm += getGM();
	gm += '</div>';
	gm += '</div>';
	return gm;
}

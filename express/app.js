// app.js
"use strict";

const communityController = require("./controllers/communityController");

/**
 * =====================================================================
 * Define Express app and set it up
 * =====================================================================
 */

// modules
const express = require("express"), // express를 요청
  layouts = require("express-ejs-layouts"), // express-ejs-layout의 요청
  app = express(); // express 애플리케이션의 인스턴스화

// controllers 폴더의 파일을 요청
const pagesController = require("./controllers/pagesController"),
  pagesController2 = require("./controllers/pagesController2"),
  usersController = require("./controllers/usersController"),
  errorController = require("./controllers/errorController"),
  cookieParser = require("cookie-parser"),
  connectFlash = require("connect-flash"),
  expressSession = require("express-session"),
  passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

/**
 * =====================================================================
 * Define Mongoose and MongoDB connection
 * =====================================================================
 */

// 애플리케이션에 Mongoose 설정
const mongoose = require("mongoose"), // mongoose를 요청
  dbName = "Hitgame";

// 데이터베이스 연결 설정
mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, {
  useNewUrlParser: true,
});

// 연결되면 메시지를 보냄
const db = mongoose.connection;
db.once("open", () => {
  console.log(`Connected to ${dbName} MongoDB using Mongoose!`);
});

/**
 * =====================================================================
 * Define app settings and middleware
 * =====================================================================
 */

app.set("port", process.env.PORT || 3000);

// ejs 레이아웃 렌더링
app.set("view engine", "ejs"); // ejs를 사용하기 위한 애플리케이션 세팅
app.use(layouts); // layout 모듈 사용을 위한 애플리케이션 세팅
app.use(express.static("public"));

// body-parser의 추가
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(cookieParser("secret_passcode"));
app.use(expressSession({
  secret: "secret_passcode",
  cookie: {
    maxAge: 86400000
  },
  resave: false,
  saveUninitialized: false
}));
app.use(connectFlash());




/**
 * =====================================================================
 * Define routes
 * =====================================================================
 */

const router = express.Router(); // Express 라우터를 인스턴스화
app.use("/", router); // 라우터를 애플리케이션에 추가

/**
 * Pages
 */


router.get("/", pagesController.showHome); // 홈 메인 화면

router.post("/login", pagesController.showLogin); // 로그인 화면
router.post("/loginProcess", usersController.login); //로그인 기능 라우터
router.post("/logout", usersController.logout); //로그아웃 라우터

router.post("/updateuser", pagesController.showUser); //회원 정보 홈페이지
router.post("/updateusers", pagesController.showUsers);  //회원 정보 수정 홈페이지
router.post("/success_updateuser", usersController.UpdateUsers); //회원정보 수정 완료 홈페이지


router.post("/findidpassword", pagesController.showFindpassword); // ID 또는 비밀번호 찾기 홈페이지
router.post("/findid", usersController.findid); // ID 찾은 홈페이지
router.post("/findpwd", usersController.findpwd); // 비밀번호 수정을 위한 홈페이지
router.post("/sspwd", usersController.updatepwd); // 비밀번호 수정 기능 라우터

router.post("/signup", pagesController.showSignup); //회원가입 홈페이지
router.post("/success_signup", usersController.create); // 회원가입 기능 라우터


/**
 * =====================================================================
 * game community site
 * =====================================================================
 */


router.get("/LOZBOTW", pagesController.showLOZBOTW);
router.post("/LOZBOTW/modified_:textNum", pagesController.showModified);
router.post("/LOZBOTW/view_:textNum", pagesController.showView);

router.get("/LOZSS", pagesController.showLOZSS);
router.post("/LOZSS/modified_:textNum", pagesController.showModified);
router.post("/LOZSS/view_:textNum", pagesController.showView);

router.get("/supermario", pagesController.showSupermario);
router.post("/supermario/modified_:textNum", pagesController.showModified);
router.post("/supermario/view_:textNum", pagesController.showView);

router.get("/ACV", pagesController.showACV);
router.post("/ACV/modified_:textNum", pagesController.showModified);
router.post("/ACV/view_:textNum", pagesController.showView);

router.get("/BF2", pagesController.showBF2);
router.post("/BF2/modified_:textNum", pagesController.showModified);
router.post("/BF2/view_:textNum", pagesController.showView);

router.get("/CODMW2", pagesController.showCODMW2);
router.post("/CODMW2/modified_:textNum", pagesController.showModified);
router.post("/CODMW2/view_:textNum", pagesController.showView);

router.get("/diablo4", pagesController.showDiablo4);
router.post("/diablo4/modified_:textNum", pagesController.showModified);
router.post("/diablo4/view_:textNum", pagesController.showView);

router.get("/fifa23", pagesController2.showFifa23);
router.post("/fifa23/modified_:textNum", pagesController.showModified);
router.post("/fifa23/view_:textNum", pagesController.showView);

router.get("/GOW", pagesController2.showGOW);
router.post("/GOW/modified_:textNum", pagesController.showModified);
router.post("/GOW/view_:textNum", pagesController.showView);

router.get("/LOL", pagesController2.showLOL);
router.post("/LOL/modified_:textNum", pagesController.showModified);
router.post("/LOL/view_:textNum", pagesController.showView);

router.get("/overwatch", pagesController2.showOverwatch);
router.post("/overwatch/modified_:textNum", pagesController.showModified);
router.post("/overwatch/view_:textNum", pagesController.showView);

router.get("/PLA", pagesController2.showPLA);
router.post("/PLA/modified_:textNum", pagesController.showModified);
router.post("/PLA/view_:textNum", pagesController.showView);

router.get("/tekken7", pagesController2.showTekken7);
router.post("/tekken7/modified_:textNum", pagesController.showModified);
router.post("/tekken7/view_:textNum", pagesController.showView);

router.get("/valorant", pagesController2.showValorant);
router.post("/valorant/modified_:textNum", pagesController.showModified);
router.post("/valorant/view_:textNum", pagesController.showView);





router.post("/write", pagesController.showWrite);
router.post("/writeAction", communityController.create);
router.post("/modifiedAction", communityController.modified);
router.post("/deleteAction", communityController.delete);




/**
 * =====================================================================
 * Errors Handling & App Startup
 * =====================================================================
 */
app.use(errorController.resNotFound); // 미들웨어 함수로 에러 처리 추가
app.use(errorController.resInternalError);

app.listen(app.get("port"), () => {
  // 3000번 포트로 리스닝 설정
  console.log(`Server running at http://localhost:${app.get("port")}`);
});

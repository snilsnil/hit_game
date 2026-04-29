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
  path = require("path"),
  dovenv = require("dotenv").config(),// dotenv의 요청
  app = express(); // express 애플리케이션의 인스턴스화

// controllers 폴더의 파일을 요청
const
  errorController = require("./controllers/errorController"),
  userInfoController = require("./controllers/userInfoController"),
  gameController = require("./controllers/gameController"),
  postController = require("./controllers/postController"),
  createAdmin = require("./seeds/admin"),
  cookieParser = require("cookie-parser"),
  connectFlash = require("connect-flash"),
  expressSession = require("express-session"),
  passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;


//middleware 파일 요청
const upload = require("./middleware/upload")

/**
 * =====================================================================
 * Define Mongoose and MongoDB connection
 * =====================================================================
 */

// 애플리케이션에 Mongoose 설정
const mongoose = require("mongoose"); // mongoose를 요청
// 데이터베이스 연결 설정
mongoose.connect(`${process.env.MONGODB_URI}`, {
  useNewUrlParser: true,
})
  .then(async () => {
    await createAdmin()
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// 연결되면 메시지를 보냄
const db = mongoose.connection;
db.once("open", () => {
  console.log(`Connected to  MongoDB using Mongoose!`);
});
;



/**
 * =====================================================================
 * Define app settings and middleware
 * =====================================================================
 */

app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

// body-parser의 추가
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

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


router.post("/login", userInfoController.login); // 로그인 기능 라우터
router.post("/signup", userInfoController.signup); // 회원가입 기능 라우터
router.post("/checkAccessToken", userInfoController.checkAccessToken); // accessToken 검증 라우터
router.post("/checkRefreshToken", userInfoController.checkRefreshToken); // refreshToken 검증 라우터 



/**
 * admin 게임 리스트
 */
router.get("/gameList", gameController.getGameList)

router.post('/gameCreate',
  upload.gameListUpload.fields([
    { name: 'gameImage', maxCount: 1 },
    { name: 'gameVideo', maxCount: 1 }
  ]),
  gameController.createGame
);

router.get("/gameList/:slug", gameController.getGame)



/**
 * user 게임 리스트
 */

router.get('/simpleGameList', gameController.getSimpleGameList)
router.get('/gameData/:slug', gameController.getGameData) // 게임데이터를 가져오는 경로
router.get('/postList/:slug', postController.getPostList)
router.post('/:slug/write', postController.writePost)




// public/favicon.ico가 없을 때 404 에러를 방지함
app.get('/favicon.ico', (req, res) => res.status(204).end());
/**
 * =====================================================================
 * game community site
 * =====================================================================
 */


// router.get("/LOZBOTW", pagesController.showLOZBOTW);
// router.post("/LOZBOTW/modified_:textNum", pagesController.showModified);
// router.post("/LOZBOTW/view_:textNum", pagesController.showView);

// router.get("/LOZSS", pagesController.showLOZSS);
// router.post("/LOZSS/modified_:textNum", pagesController.showModified);
// router.post("/LOZSS/view_:textNum", pagesController.showView);

// router.get("/supermario", pagesController.showSupermario);
// router.post("/supermario/modified_:textNum", pagesController.showModified);
// router.post("/supermario/view_:textNum", pagesController.showView);

// router.get("/ACV", pagesController.showACV);
// router.post("/ACV/modified_:textNum", pagesController.showModified);
// router.post("/ACV/view_:textNum", pagesController.showView);

// router.get("/BF2", pagesController.showBF2);
// router.post("/BF2/modified_:textNum", pagesController.showModified);
// router.post("/BF2/view_:textNum", pagesController.showView);

// router.get("/CODMW2", pagesController.showCODMW2);
// router.post("/CODMW2/modified_:textNum", pagesController.showModified);
// router.post("/CODMW2/view_:textNum", pagesController.showView);

// router.get("/diablo4", pagesController.showDiablo4);
// router.post("/diablo4/modified_:textNum", pagesController.showModified);
// router.post("/diablo4/view_:textNum", pagesController.showView);

// router.get("/fifa23", pagesController2.showFifa23);
// router.post("/fifa23/modified_:textNum", pagesController.showModified);
// router.post("/fifa23/view_:textNum", pagesController.showView);

// router.get("/GOW", pagesController2.showGOW);
// router.post("/GOW/modified_:textNum", pagesController.showModified);
// router.post("/GOW/view_:textNum", pagesController.showView);

// router.get("/LOL", pagesController2.showLOL);
// router.post("/LOL/modified_:textNum", pagesController.showModified);
// router.post("/LOL/view_:textNum", pagesController.showView);

// router.get("/overwatch", pagesController2.showOverwatch);
// router.post("/overwatch/modified_:textNum", pagesController.showModified);
// router.post("/overwatch/view_:textNum", pagesController.showView);

// router.get("/PLA", pagesController2.showPLA);
// router.post("/PLA/modified_:textNum", pagesController.showModified);
// router.post("/PLA/view_:textNum", pagesController.showView);

// router.get("/tekken7", pagesController2.showTekken7);
// router.post("/tekken7/modified_:textNum", pagesController.showModified);
// router.post("/tekken7/view_:textNum", pagesController.showView);

// router.get("/valorant", pagesController2.showValorant);
// router.post("/valorant/modified_:textNum", pagesController.showModified);
// router.post("/valorant/view_:textNum", pagesController.showView);





// router.post("/write", pagesController.showWrite);
// router.post("/writeAction", communityController.create);
// router.post("/modifiedAction", communityController.modified);
// router.post("/deleteAction", communityController.delete);


app.listen(app.get("port"), () => {
  // 3000번 포트로 리스닝 설정
  console.log(`Server running at http://localhost:${app.get("port")}`);
});

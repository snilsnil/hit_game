// homeController.js
"use strict";

const LOZBOTW = require('../models/LOZBOTW'),
  LOZSS = require('../models/LOZSS'),
  supermario = require("../models/supermario"),
  ACV = require("../models/ACV"),
  BF2 = require("../models/BF2"),
  CODMW2 = require("../models/CODMW2"),
  diablo4 = require("../models/diablo4"),
  fifa23 = require("../models/fifa23"),
  GOW = require("../models/GOW"),
  LOL = require("../models/LOL"),
  overwatch = require("../models/overwatch"),
  PLA = require("../models/PLA"),
  tekken7 = require("../models/tekken7"),
  valorant = require("../models/valorant");

/**
 * Listing 15 (p. 178)
 * 홈 컨트롤러로의 라우팅
 */
const User = require('../models/User');

module.exports = {


  showHome: (req, res, next) => {

    const isLoggedIn = req.session.isLoggedIn;
    let username = '';

    if (isLoggedIn) {
      username = req.session.user.id;
      User.findOne({ id: req.session.user.id })
        .then(user => {
          res.render("index", {
            isLoggedIn,
            username,
            page: "home",
            title: "Home",
          });
        })
        .catch(err => console.log(err));
    } else {
      username = null;
      res.render("index", {
        isLoggedIn,
        username,
        page: "home",
        title: "Home",
      });
    }
  },


  showLOZBOTW: (req, res, next) => {

    const isLoggedIn = req.session.isLoggedIn;
    let username = '';

    if (isLoggedIn) {
      username = req.session.user.id;
      LOZBOTW.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            res.render("_pages/game/LOZBOTW/list", {
              isLoggedIn,
              username,
              page: "LOZBOTW",
              title: "LOZBOTW",
            });
          } else {
            res.render("_pages/game/LOZBOTW/list", {
              isLoggedIn,
              username,
              page: "LOZBOTW",
              title: "LOZBOTW",
            });
          }
        })
        .catch(err => console.log(err));
    } else {
      LOZBOTW.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            return res.render("_pages/game/LOZBOTW/list", {
              isLoggedIn,
              username,
              page: "LOZBOTW",
              title: "LOZBOTW",
            });
          } else {
            return res.render("_pages/game/LOZBOTW/list", {
              isLoggedIn,
              username,
              page: "LOZBOTW",
              title: "LOZBOTW",
            });
          }
        })
        .catch(err => console.log(err));
    }
  },

  showLOZSS: (req, res, next) => {

    const isLoggedIn = req.session.isLoggedIn;
    let username = '';

    if (isLoggedIn) {
      username = req.session.user.id;
      LOZSS.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            res.render("_pages/game/LOZSS/list", {
              isLoggedIn,
              username,
              page: "LOZSS",
              title: "LOZSS",
            });
          } else {
            res.render("_pages/game/LOZSS/list", {
              isLoggedIn,
              username,
              page: "LOZSS",
              title: "LOZSS",
            });
          }
        })
        .catch(err => console.log(err));
    } else {
      LOZSS.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            return res.render("_pages/game/LOZSS/list", {
              isLoggedIn,
              username,
              page: "LOZSS",
              title: "LOZSS",
            });
          } else {
            return res.render("_pages/game/LOZSS/list", {
              isLoggedIn,
              username,
              page: "LOZSS",
              title: "LOZSS",
            });
          }
        })
        .catch(err => console.log(err));
    }
  },

  showACV: (req, res, next) => {

    const isLoggedIn = req.session.isLoggedIn;
    let username = '';

    if (isLoggedIn) {
      username = req.session.user.id;
      ACV.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            res.render("_pages/game/ACV/list", {
              isLoggedIn,
              username,
              page: "ACV",
              title: "ACV",
            });
          } else {
            res.render("_pages/game/ACV/list", {
              isLoggedIn,
              username,
              page: "ACV",
              title: "ACV",
            });
          }
        })
        .catch(err => console.log(err));
    } else {
      ACV.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            return res.render("_pages/game/ACV/list", {
              isLoggedIn,
              username,
              page: "ACV",
              title: "ACV",
            });
          } else {
            return res.render("_pages/game/ACV/list", {
              isLoggedIn,
              username,
              page: "ACV",
              title: "ACV",
            });
          }
        })
        .catch(err => console.log(err));
    }
  },

  showSupermario: (req, res, next) => {

    const isLoggedIn = req.session.isLoggedIn;
    let username = '';

    if (isLoggedIn) {
      username = req.session.user.id;
      supermario.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            res.render("_pages/game/supermario/list", {
              isLoggedIn,
              username,
              page: "supermario",
              title: "supermario",
            });
          } else {
            res.render("_pages/game/supermario/list", {
              isLoggedIn,
              username,
              page: "supermario",
              title: "supermario",
            });
          }
        })
        .catch(err => console.log(err));
    } else {
      supermario.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            return res.render("_pages/game/supermario/list", {
              isLoggedIn,
              username,
              page: "supermario",
              title: "supermario",
            });
          } else {
            return res.render("_pages/game/supermario/list", {
              isLoggedIn,
              username,
              page: "supermario",
              title: "supermario",
            });
          }
        })
        .catch(err => console.log(err));
    }
  },

  showBF2: (req, res, next) => {

    const isLoggedIn = req.session.isLoggedIn;
    let username = '';

    if (isLoggedIn) {
      username = req.session.user.id;
      BF2.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            res.render("_pages/game/BF2/list", {
              isLoggedIn,
              username,
              page: "BF2",
              title: "BF2",
            });
          } else {
            res.render("_pages/game/BF2/list", {
              isLoggedIn,
              username,
              page: "BF2",
              title: "BF2",
            });
          }
        })
        .catch(err => console.log(err));
    } else {
      BF2.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            return res.render("_pages/game/BF2/list", {
              isLoggedIn,
              username,
              page: "BF2",
              title: "BF2",
            });
          } else {
            return res.render("_pages/game/BF2/list", {
              isLoggedIn,
              username,
              page: "BF2",
              title: "BF2",
            });
          }
        })
        .catch(err => console.log(err));
    }
  },

  showCODMW2: (req, res, next) => {

    const isLoggedIn = req.session.isLoggedIn;
    let username = '';

    if (isLoggedIn) {
      username = req.session.user.id;
      CODMW2.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            res.render("_pages/game/CODMW2/list", {
              isLoggedIn,
              username,
              page: "CODMW2",
              title: "CODMW2",
            });
          } else {
            res.render("_pages/game/CODMW2/list", {
              isLoggedIn,
              username,
              page: "CODMW2",
              title: "CODMW2",
            });
          }
        })
        .catch(err => console.log(err));
    } else {
      CODMW2.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            return res.render("_pages/game/CODMW2/list", {
              isLoggedIn,
              username,
              page: "CODMW2",
              title: "CODMW2",
            });
          } else {
            return res.render("_pages/game/CODMW2/list", {
              isLoggedIn,
              username,
              page: "CODMW2",
              title: "CODMW2",
            });
          }
        })
        .catch(err => console.log(err));
    }
  },

  showDiablo4: (req, res, next) => {

    const isLoggedIn = req.session.isLoggedIn;
    let username = '';

    if (isLoggedIn) {
      username = req.session.user.id;
      diablo4.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            res.render("_pages/game/diablo4/list", {
              isLoggedIn,
              username,
              page: "diablo4",
              title: "diablo4",
            });
          } else {
            res.render("_pages/game/diablo4/list", {
              isLoggedIn,
              username,
              page: "diablo4",
              title: "diablo4",
            });
          }
        })
        .catch(err => console.log(err));
    } else {
      diablo4.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            return res.render("_pages/game/diablo4/list", {
              isLoggedIn,
              username,
              page: "diablo4",
              title: "diablo4",
            });
          } else {
            return res.render("_pages/game/diablo4/list", {
              isLoggedIn,
              username,
              page: "diablo4",
              title: "diablo4",
            });
          }
        })
        .catch(err => console.log(err));
    }
  },
  showView: (req, res, next) => {

    const isLoggedIn = req.session.isLoggedIn;
    const id = req.params.textNum;
    let username = '';
    const title = req.body.title;
    const dbToQuery = getDBToQuery(title);

    if (isLoggedIn) {
      username = req.session.user.id;
      dbToQuery.findOne({ textNum: id })
        .then((text) => {
          if (text) {
            if (text.textView == true) {
              const viwer = text.textViewer + 1;
              dbToQuery.updateOne({ textNum: id }, { textViewer: viwer })
                .then((result) => {
                  res.locals.text = text;
                  res.render("_pages/game/" + title + "/view", {
                    isLoggedIn,
                    username,
                    page: title,
                    title: title,
                  });
                })
                .catch(err => console.log(err));
            } else {
              return res.send(`
          <script>
              alert("존재하지 않습니다.");
              window.location.href="/";
          </script>`);
            }
          } else {
            return res.send(`
          <script>
              alert("존재하지 않습니다.");
              window.location.href="/";
          </script>`);
          }
        })
        .catch(err => console.log(err));
    } else {
      dbToQuery.findOne({ textNum: id })
        .then((text) => {
          if (text) {
            if (text.textView == true) {
              const viwer = text.textViewer + 1;
              dbToQuery.updateOne({ textNum: id }, { textViewer: viwer })
                .then((result) => {
                  res.locals.text = text;
                  res.render("_pages/game/" + title + "/view", {
                    isLoggedIn,
                    username,
                    page: title,
                    title: title,
                  });
                })
                .catch(err => console.log(err));
            } else {
              return res.send(`
          <script>
              alert("존재하지 않습니다.");
              window.location.href="/";
          </script>`);
            }
          } else {
            return res.send(`
          <script>
              alert("존재하지 않습니다.");
              window.location.href="/";
          </script>`);
          }
        })
        .catch(err => console.log(err));
    }
  },

  showWrite: (req, res, next) => {
    const title = req.body.title;
    const isLoggedIn = req.session.isLoggedIn;
    let username = '';

    if (isLoggedIn) {
      username = req.session.user.id;
      const previousPath = title;
      res.render("_pages/game/" + title + "/write", {
        isLoggedIn,
        username,
        previousPath,
        page: title,
        title: title,
      });

    } else {
      res.send(`
          <script>
              alert("로그인을 하세요.");
              window.history.back();
          </script>`);
    }
  },

  showModified: (req, res, next) => {
    const title = req.body.title;
    const isLoggedIn = req.session.isLoggedIn;
    const textNumber = req.body.textNumber;
    let username = '';

    if (isLoggedIn) {
      username = req.session.user.id;
      const previousPath = title;
      const dbToQuery = getDBToQuery(title);
      dbToQuery.findOne({ textNum: textNumber })
        .then((result) => {
          res.locals.text = result;
          res.render("_pages/game/" + title + "/modified", {
            isLoggedIn,
            username,
            previousPath,
            page: title,
            title: title,
          });
        })
        .catch(err => console.log(err));

    } else {
      res.send(`
          <script>
              alert("로그인을 하세요.");
              window.history.back();
          </script>`);
    }
  },

  showUser: (req, res, next) => {

    const isLoggedIn = req.session.isLoggedIn;
    const previousPath = req.body.previousPath;

    if (isLoggedIn) {
      let username = req.session.user.id;
      let userpassword = req.session.user.password;
      let useremail = req.session.user.email;
      res.render("_pages/user_info/updateuser", {
        previousPath,
        isLoggedIn,
        username,
        useremail,
        userpassword,

        page: "Login",
        title: "Login",
      });
    } else {
      return res.send(`
      <script>
          alert("로그인을 하십시오");
          window.history.back();
      </script>`);
    }
  },

  showUsers: (req, res, next) => {

    const isLoggedIn = req.session.isLoggedIn;
    const previousPath = req.body.previousPath;

    if (isLoggedIn) {
      let username = req.session.user.id;
      let userpassword = req.session.user.password;
      let useremail = req.session.user.email;
      res.render("_pages/user_info/updateusers", {
        isLoggedIn,
        username,
        useremail,
        userpassword,
        previousPath,
        page: "login",
        title: "Login",
      });
    } else {
      return res.send(`
      <script>
          alert("로그인을 하십시오");
          window.history.back();
      </script>`);
    }
  },


  showLogin: (req, res) => {
    const isLoggedIn = req.session.isLoggedIn;
    if (isLoggedIn == false || isLoggedIn == undefined) {
      const previousPath = req.body.previousPath;
      res.render("_pages/login/login", {
        previousPath,
        isLoggedIn,
        page: "login",
        title: "Login",
      });
    } else {
      const previousUrl = new URL(req.get('referer')).pathname;
      if (previousUrl == "/success_updateuser") {
        const previousPath = req.body.previousPath;
        req.session.destroy(err => {
          if (err) {
            console.log(err);
          }
          return res.render("_pages/login/login", {
            previousPath,
            isLoggedIn,
            page: "login",
            title: "Login",
          });
        });
      } else {

        return res.send(`
      <script>
          alert("이미 로그인이 되었습니다.");
          window.location.href="/";
      </script>`);
      }
    }
  },
  showSignup: (req, res) => {
    const title = req.body.previousPath;
    console.log(title);
    res.render("_pages/login/signup/signup", {
      page: "signup",
      title: "Signup",
    });
  },
  showFindpassword: (req, res) => {
    const previousPath = req.body.previousPath;
    if (req.session.isLoggedIn == true) {
      return res.send(`
      <script>
          alert("이미 로그인이 되었습니다.");
          window.location.href="/";
      </script>`);
    } else {
      res.render("_pages/login/findidpwd/findidpassword", {
        previousPath,
        page: "signup",
        title: "Signup",
      })
    };
  },
};


function getDBToQuery(title) {
  if (title === "LOZBOTW") {
    return LOZBOTW;
  } else if (title === "LOZSS") {
    return LOZSS;
  } else if (title === "supermario") {
    return supermario;
  } else if (title === "ACV") {
    return ACV;
  } else if (title === "BF2") {
    return BF2;
  } else if (title === "fifa23") {
    return fifa23;
  } else if (title === "CODMW2") {
    return CODMW2;
  } else if (title === "diablo4") {
    return diablo4;
  } else if (title === "GOW") {
    return GOW;
  } else if (title === "LOL") {
    return LOL;
  } else if (title === "overwatch") {
    return overwatch;
  } else if (title === "PLA") {
    return PLA;
  } else if (title === "tekken7") {
    return tekken7;
  } else if (title === "valorant") {
    return valorant;
  }
  // 필요한 경우, 다른 DB를 추가로 처리하는 조건문을 작성합니다.
}



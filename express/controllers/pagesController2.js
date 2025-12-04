// homeController.js
"use strict";

const fifa23 = require("../models/fifa23"),
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

  showFifa23: (req, res, next) => {

    const isLoggedIn = req.session.isLoggedIn;
    let username = '';

    if (isLoggedIn) {
      username = req.session.user.id;
      fifa23.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            res.render("_pages/game/fifa23/list", {
              isLoggedIn,
              username,
              page: "fifa23",
              title: "fifa23",
            });
          } else {
            res.render("_pages/game/fifa23/list", {
              isLoggedIn,
              username,
              page: "fifa23",
              title: "fifa23",
            });
          }
        })
        .catch(err => console.log(err));
    } else {
      fifa23.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            return res.render("_pages/game/fifa23/list", {
              isLoggedIn,
              username,
              page: "fifa23",
              title: "fifa23",
            });
          } else {
            return res.render("_pages/game/fifa23/list", {
              isLoggedIn,
              username,
              page: "fifa23",
              title: "fifa23",
            });
          }
        })
        .catch(err => console.log(err));
    }
  },

  showGOW: (req, res, next) => {

    const isLoggedIn = req.session.isLoggedIn;
    let username = '';

    if (isLoggedIn) {
      username = req.session.user.id;
      GOW.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            res.render("_pages/game/GOW/list", {
              isLoggedIn,
              username,
              page: "GOW",
              title: "GOW",
            });
          } else {
            res.render("_pages/game/GOW/list", {
              isLoggedIn,
              username,
              page: "GOW",
              title: "GOW",
            });
          }
        })
        .catch(err => console.log(err));
    } else {
      GOW.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            return res.render("_pages/game/GOW/list", {
              isLoggedIn,
              username,
              page: "GOW",
              title: "GOW",
            });
          } else {
            return res.render("_pages/game/GOW/list", {
              isLoggedIn,
              username,
              page: "GOW",
              title: "GOW",
            });
          }
        })
        .catch(err => console.log(err));
    }
  },

  showLOL: (req, res, next) => {

    const isLoggedIn = req.session.isLoggedIn;
    let username = '';

    if (isLoggedIn) {
      username = req.session.user.id;
      LOL.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            res.render("_pages/game/LOL/list", {
              isLoggedIn,
              username,
              page: "LOL",
              title: "LOL",
            });
          } else {
            res.render("_pages/game/LOL/list", {
              isLoggedIn,
              username,
              page: "LOL",
              title: "LOL",
            });
          }
        })
        .catch(err => console.log(err));
    } else {
      LOL.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            return res.render("_pages/game/LOL/list", {
              isLoggedIn,
              username,
              page: "LOL",
              title: "LOL",
            });
          } else {
            return res.render("_pages/game/LOL/LOL", {
              isLoggedIn,
              username,
              page: "LOL",
              title: "LOL",
            });
          }
        })
        .catch(err => console.log(err));
    }
  },

  showOverwatch: (req, res, next) => {

    const isLoggedIn = req.session.isLoggedIn;
    let username = '';

    if (isLoggedIn) {
      username = req.session.user.id;
      overwatch.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            res.render("_pages/game/overwatch/list", {
              isLoggedIn,
              username,
              page: "overwatch",
              title: "overwatch",
            });
          } else {
            res.render("_pages/game/overwatch/list", {
              isLoggedIn,
              username,
              page: "overwatch",
              title: "overwatch",
            });
          }
        })
        .catch(err => console.log(err));
    } else {
      overwatch.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            return res.render("_pages/game/overwatch/list", {
              isLoggedIn,
              username,
              page: "overwatch",
              title: "overwatch",
            });
          } else {
            return res.render("_pages/game/overwatch/list", {
              isLoggedIn,
              username,
              page: "overwatch",
              title: "overwatch",
            });
          }
        })
        .catch(err => console.log(err));
    }
  },

  showPLA: (req, res, next) => {

    const isLoggedIn = req.session.isLoggedIn;
    let username = '';

    if (isLoggedIn) {
      username = req.session.user.id;
      PLA.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            res.render("_pages/game/PLA/list", {
              isLoggedIn,
              username,
              page: "PLA",
              title: "PLA",
            });
          } else {
            res.render("_pages/game/PLA/list", {
              isLoggedIn,
              username,
              page: "PLA",
              title: "PLA",
            });
          }
        })
        .catch(err => console.log(err));
    } else {
      PLA.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            return res.render("_pages/game/PLA/list", {
              isLoggedIn,
              username,
              page: "PLA",
              title: "PLA",
            });
          } else {
            return res.render("_pages/game/PLA/list", {
              isLoggedIn,
              username,
              page: "PLA",
              title: "PLA",
            });
          }
        })
        .catch(err => console.log(err));
    }
  },

  showTekken7: (req, res, next) => {

    const isLoggedIn = req.session.isLoggedIn;
    let username = '';

    if (isLoggedIn) {
      username = req.session.user.id;
      tekken7.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            res.render("_pages/game/tekken7/list", {
              isLoggedIn,
              username,
              page: "tekken7",
              title: "tekken7",
            });
          } else {
            res.render("_pages/game/tekken7/list", {
              isLoggedIn,
              username,
              page: "tekken7",
              title: "tekken7",
            });
          }
        })
        .catch(err => console.log(err));
    } else {
      tekken7.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            return res.render("_pages/game/tekken7/list", {
              isLoggedIn,
              username,
              page: "tekken7",
              title: "tekken7",
            });
          } else {
            return res.render("_pages/game/tekken7/list", {
              isLoggedIn,
              username,
              page: "tekken7",
              title: "tekken7",
            });
          }
        })
        .catch(err => console.log(err));
    }
  },

  showValorant: (req, res, next) => {

    const isLoggedIn = req.session.isLoggedIn;
    let username = '';

    if (isLoggedIn) {
      username = req.session.user.id;
      valorant.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            res.render("_pages/game/valorant/list", {
              isLoggedIn,
              username,
              page: "valorant",
              title: "valorant",
            });
          } else {
            res.render("_pages/game/valorant/list", {
              isLoggedIn,
              username,
              page: "valorant",
              title: "valorant",
            });
          }
        })
        .catch(err => console.log(err));
    } else {
      valorant.find()
        .sort({ _id: -1 })
        .then((text) => {
          if (text) {
            res.locals.text = text;
            return res.render("_pages/game/valorant/list", {
              isLoggedIn,
              username,
              page: "valorant",
              title: "valorant",
            });
          } else {
            return res.render("_pages/game/valorant/list", {
              isLoggedIn,
              username,
              page: "valorant",
              title: "valorant",
            });
          }
        })
        .catch(err => console.log(err));
    }
  },

}



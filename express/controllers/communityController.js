// controllers/usersController.js

"use strict";

const LOZBOTW = require("../models/LOZBOTW"),
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
  valorant = require("../models/valorant"),
  getTextParams = (body) => {
    return {
      textTitle: body.textTitle,
      textContent: body.textContent
    }
  }; // 사용자 모델 요청

module.exports = {
  create: (req, res, next) => {
    const TextParams = getTextParams(req.body),
      previousPath = req.body.previousPath,
      id = req.session.user.id;
    const textViewer = 0;
    const textView = true;
    const today = new Date();
    const dbToQuery = getDBToQuery(previousPath);

    dbToQuery.findOne()
      .sort({ _id: -1 })
      .then((user) => {
        if (user) {
          const textNum = user.textNum;
          const textNumber = textNum + 1;
          dbToQuery.create({
            textNum: textNumber,
            id: id,
            textTitle: TextParams.textTitle,
            textContent: TextParams.textContent,
            textViewer: textViewer,
            textView: textView,
            create: today,
            updateOne: 0
          })
            .then((write) => {
              res.redirect("/" + previousPath);
            })
            .catch((error) => {
              console.log(`Error saving user: ${error.message}`);
              next(error);
            });
        } else if (!user) {
          const textNum = 1;
          dbToQuery.create({
            textNum: textNum,
            id: id,
            textTitle: TextParams.textTitle,
            textContent: TextParams.textContent,
            textViewer: textViewer,
            textView: textView,
            create: today,
            updateOne: 0
          })
            .then((write) => {
              res.redirect("/" + previousPath);
            })
            .catch((error) => {
              console.log(`Error saving user: ${error.message}`);
              next(error);
            });
        }
      })
      .catch((err) => console.log(err));
  },

  modified: (req, res, next) => {
    const TextParams = getTextParams(req.body),
      previousPath = req.body.previousPath;
    const textNumber = req.body.textNumber;
    const dbToQuery = getDBToQuery(previousPath);
    const today = new Date();

    dbToQuery.findOne({ textNum: textNumber })
      .then((user) => {
        if (user) {
          dbToQuery.updateOne({ textNum: textNumber }, {
            textTitle: TextParams.textTitle,
            textContent: TextParams.textContent,
            update: today
          })
            .then((modified) => {
              res.redirect("/" + previousPath);
            })
            .catch((error) => {
              console.log(`Error saving user: ${error.message}`);
              next(error);
            });
        } else if (!user) {
          res.send(`
          <script>
              alert("존재하지 않습니다..");
              window.location.href="/`+ previousPath + `";
          </script>`);
        }
      })
      .catch((err) => console.log(err));
  },

  delete: (req, res, next) => {
    const previousPath = req.body.title;
    const textNumber = req.body.textNumber;
    const dbToQuery = getDBToQuery(previousPath);
    dbToQuery.findOne({ textNum: textNumber })
      .then((user) => {
        if (user) {
          const textView = false;
          dbToQuery.updateOne({ textNum: textNumber }, { textView: textView })
            .then((result) => {
              res.redirect("/" + previousPath);
            })
            .catch((error) => {
              console.log(`Error saving user: ${error.message}`);
              next(error);
            });
        } else if (!user) {
          res.send(`
          <script>
              alert("존재하지 않습니다..");
              window.location.href="/`+ previousPath + `";
          </script>`);
        }
      })
      .catch((err) => console.log(err));
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
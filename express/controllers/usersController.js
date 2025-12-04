// controllers/usersController.js
"use strict";

/**
 * Listing 18.9 (p. 268-269)
 * Listing 18.11 (p. 271)
 * userController.js에서 인덱스 액션 생성과 index 액션의 재방문
 */
const User = require("../models/User"),
  bcrypt = require("bcrypt"),
  getUserParams = (body) => {
    return {
      id: body.id,
      email: body.email,
      password: body.password,
    }
  }; // 사용자 모델 요청

module.exports = {

  findid: (req, res, next) => {
    const previousPath = req.body.previousPath;
    let email = req.body.email;
    let userParams = getUserParams(req.body);
    // 폼 파라미터로 사용자 조회
    if (req.session.isLoggedIn == true) {
      return res.send(`
      <script>
          alert("이미 로그인이 되었습니다.");
          window.location.href="/";
      </script>`);
    } else {
      if (email == "") {
        return res.send(`
          <script>
              alert("이메일을 입력하세요");
              window.history.back();
          </script>`);
      } else {
        User.findOne({ email: email })
          .then((user) => {
            if (user) {
              res.locals.user = user;
              res.render("_pages/login/findidpwd/id/findid", {
                previousPath,
                page: "signup",
                title: "Signup",
              });
              next();
            } else {
              return res.send(`
                <script>
                    alert("회원이 존재하지 않습니다.");
                    window.history.back();
                </script>`);
            }
            // 사용자가 존재하지 않더라도 next() 호출
          })
          .catch((error) => {
            console.log(`Error finding user: ${error.message}`);
            next(error);
          });
      }
    }
  },


  findpwd: (req, res, next) => {
    const previousPath = req.body.previousPath;
    let email = req.body.email;
    let id = req.body.id;
    // 폼 파라미터로 사용자 조회

    if (req.session.isLoggedIn == true) {
      return res.send(`
        <script>
            alert("이미 로그인이 되었습니다.");
            window.location.href="/";
        </script>`);
    } else {
      if (email == "" || id == "") {
        return res.send(`
          <script>
              alert("ID와 이메일을 입력하세요.");
              window.history.back();
          </script>`);
      } else {
        User.findOne({ email: email, id: id })
          .then((user) => {
            if (user) {
              console.log(user.email);
              console.log(user.id);
              res.locals.user = user;
              res.render("_pages/login/findidpwd/pwd/findpwd", {
                previousPath,
                page: "signup",
                title: "Signup",
              });
            } else {
              return res.send(`
                <script>
                    alert("회원이 존재하지 않습니다.");
                    window.history.back();
                </script>`);
            }
          })
          .catch((error) => {
            console.log(`Error finding user: ${error.message}`);
            next(error);
          });
      }
    }
  },


  updatepwd: (req, res, next) => {
    let userParams = getUserParams(req.body);
    const previousPath = req.body.previousPath;

    console.log(userParams);

    if (req.session.isLoggedIn == true) {
      return res.send(`
        <script>
            alert("이미 로그인이 되었습니다.");
            window.location.href="/";
        </script>`);
    } else {
      // 중복된 id 값이 존재하는지 확인
      User.findOne({ id: userParams.id })
        .then((existingUser) => {
          if (!existingUser) {
            // 해당 id를 가진 사용자가 존재하지 않는 경우
            console.log(`No user found with ID: ${userParams.id}`);
            // 적절한 오류 처리를 수행하거나 클라이언트에게 알림을 보낼 수 있습니다.
          } else {
            // 존재하는 id 값을 가진 사용자인 경우 비밀번호를 해싱하여 업데이트
            bcrypt.hash(userParams.password, 10)
              .then(hash => {
                userParams.password = hash;

                User.updateOne({ id: userParams.id }, { $set: userParams })
                  .then((result) => {
                    if (result.nModified === 0) {
                      // 업데이트된 문서가 없는 경우
                      console.log(`No user found with ID: ${userParams.id}`);
                      // 적절한 오류 처리를 수행하거나 클라이언트에게 알림을 보낼 수 있습니다.
                    } else {
                      // 업데이트 성공한 경우
                      res.locals.user = userParams;
                      res.render("_pages/login/findidpwd/pwd/sspwd", {
                        previousPath,
                        page: "signup",
                        title: "Signup",
                      });
                    }
                  })
                  .catch((error) => {
                    console.log(`Error updating user by ID: ${error.message}`);
                    next(error);
                  });
              })
              .catch((error) => {
                console.log(`Error in hashing password: ${error.message}`);
                next(error);
              });
          }
        })
        .catch((error) => {
          console.log(`Error finding user by ID: ${error.message}`);
          next(error);
        });
    }
  },


  create: (req, res, next) => {
    let userParams = getUserParams(req.body);
    const previousPath = req.body.previousPath;
    // 폼 파라미터로 사용자 생성
    User.create(userParams)
      .then((user) => {
        res.locals.user = user;
        res.render("_pages/login/signup/success_signup", {
          previousPath,
          page: "signup",
          title: "Signup",
        });
      })
      .catch((error) => {
        if (error.keyValue.id == userParams.id) {
          return res.send(`
            <script>
                alert("이미 존재하는 ID 입니다.");
                window.history.back();
            </script>`);
        } else {
          console.log(`Error saving user: ${error.message}`);
          next(error);
        }
      });
  },

  // 분리된 redirectView 액션에서 뷰 렌더링

  login: (req, res, next) => {
    const id = req.body.id;
    const password = req.body.password;
    const referer = req.body.previousPath;
    if (req.session.isLoggedIn === true) {
      return res.send(`
      <script>
          alert("이미 로그인되었습니다.");
          window.location.href="/";
      </script>`);
    } else if (id === "") {
      return res.send('<script>alert("똑바로 입력하세요."); window.history.back();</script>');
    } else {
      User.findOne({ id: id })
        .then(user => {
          if (!user) {
            return res.send('<script>alert("존재하지 않는 ID입니다."); window.history.back();</script>');
          } else {
            bcrypt.compare(password, user.password, (err, result) => {
              if (err) {
                console.log(err);
                return res.send('<script>alert("비밀번호 확인 중 오류가 발생했습니다."); window.history.back();</script>');
              }
              if (result === false) {
                return res.send('<script>alert("비밀번호가 일치하지 않습니다."); window.history.back();</script>');
              } else {
                req.session.isLoggedIn = true;
                req.session.user = user;
                req.session.save(err => {
                  if (err) {
                    console.log(err);
                    console.log(referer);
                  } if (referer == "Home") {
                    return res.redirect("/");
                  } else {
                    return res.redirect("/" + referer);
                  }

                });
              }
            });
          }
        })
        .catch(err => console.log(err));
    }
  },

  logout: (req, res, next) => {
    const referer = req.body.previousPath;
    req.session.destroy(err => {
      if (err) {
        console.log(err);
      }
      if (referer == "Home") {
        res.redirect("/");
      } else {
        res.redirect("/" + referer);
      }
    });
  },


  UpdateUsers: (req, res, next) => {
    const previousPath = req.body.previousPath;
    const isLoggedIn = req.session.isLoggedIn;

    if (isLoggedIn) {
      let username = req.session.user.id;
      let userpassword = req.session.user.password;
      let userParams = getUserParams(req.body);
      if (userParams.password == userpassword) {
        return res.send(`
      <script>
          alert("지금 사용중인 비밀번호입니다.");
          window.history.back()";
      </script>`);
      } else {
        bcrypt.hash(userParams.password, 10)
          .then(hash => {
            userParams.password = hash;
            User.updateOne({ id: username }, { password: userParams.password })
              .then((user) => {
                return res.render("_pages/user_info/success_updateuser", {
                  isLoggedIn,
                  username,
                  previousPath,
                  page: "login",
                  title: "Login",
                });
              })
              .catch((error) => {
                console.log(`Error updating user by ID: ${error.message}`);
                next(error);
              });
          })
          .catch(error => {
            console.log(`Error in hashing password: ${error.message}`);
            next(error);
          });

      };
    } else {
      return res.send(`
      <script>
          alert("로그인을 하십시오");
          window.location.href="/";
      </script>`);
    }
  },
};

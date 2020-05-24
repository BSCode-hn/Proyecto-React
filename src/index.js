import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import ProfilePage from "views/examples/ProfilePage.js";
import ProfileStudentPage from "views/examples/ProfileStudentPage.js";
import ProfileTeacherPage from "views/examples/ProfileTeacherPage.js";
import ProfileModeratorPage from "views/examples/ProfileModeratorPage.js";
import LoginPage from "views/examples/LoginPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/login-page"
        render={props => <LoginPage {...props} />}
      />
      <Route
        path="/profile-student-page"
        render={props => <ProfileStudentPage {...props} />}
      />
      <Route
        path="/profile-teacher-page"
        render={props => <ProfileTeacherPage {...props} />}
      />
      <Route
        path="/profile-moderator-page"
        render={props => <ProfileModeratorPage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

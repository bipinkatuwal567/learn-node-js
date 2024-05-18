import express from "express";
import passport from "passport";
import "./auth.js";
import session from "express-session";
import "dotenv/config";

const app = express();
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("<a href='/auth/google'>Sign in with google</a>");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/dashboard",
    failureRedirect: "/auth/error",
  })
);

app.get(
  "/dashboard",
  (req, res, next) => {
    req.user ? next() : res.sendStatus(401);
  },
  (req, res) => {
    res.send("Hello from dashboard");
  }
);

app.get("/dashboard/logout", (req, res) => {
  req.logout((err) => {
    if(err) throw new Error;
    else{
      req.session.destroy();
      res.redirect("/");
    }
  })
})

app.get("/auth/error", (req, res) => {
  res.send("Error occured in auth");
});

app.listen(8000, () => {
  console.log("Server has started🚀");
});

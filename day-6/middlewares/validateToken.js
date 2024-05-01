export default function validateToken(req, res, next) {
  const token = req.headers.token;

  if (token && token === "abc") {
    next();
  } else {
    res.status(403).send({ success: false, message: "Invalid API token" });
  }
}

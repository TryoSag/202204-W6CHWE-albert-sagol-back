require("dotenv").config();

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization.includes("Bearer ")) {
      throw new Error();
    }
    const token = authorization.replace("Bearer ", "");

    if (token !== process.env.TOKEN) {
      throw new Error();
    }

    next();
  } catch {
    const customError = new Error("invalid token");
    customError.statusCode = 401;

    next(customError);
  }
};

module.exports = auth;

const auth = (req, res, next) => {
  const { authoritzation } = req.headers;
  try {
    if (!authoritzation.includes("Bearer")) {
      throw new Error();
    }
    const token = authoritzation.replace("Bearer ", "");
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

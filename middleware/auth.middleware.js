const authMiddleware = (req, res, next) => {
  const userId = req.headers.userid;

//   if (!userId) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

  req.user = { id: userId };
  next();
};

export default authMiddleware;
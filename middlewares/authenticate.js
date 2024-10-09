import jwt from 'jsonwebtoken';

export const Authenticate = (req, res, next) => {
  const token = req.cookie.token


  if (!token) {
    return res.status(401).json({ message: 'No token provided', success: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next(); 
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token', success: false });
  }
};

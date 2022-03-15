const jwt = require("jsonwebtoken");
const { registerService, loginService } = require("../services/auth.services");

const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const newUser = await registerService(email, password, username);
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const login = async (req, res) =>{
	try {
		const user = await loginService(req.body.email, req.body.password)
    const accessToken = jwt.sign(
      {
        id: user._id,
        username: user.username
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
    
    const {password, ...rest} = user._doc
    res.status(200).json({...rest, accessToken })
	} catch (error) {
		res.status(500).json(error)
	}
}

module.exports = {
  register,
  login
};

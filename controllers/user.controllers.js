import { User } from "../model/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try {
        const {fullname, email, password, role} = req.body

        if (!fullname || !email || !password || !role) {
            return res.status(403).json({
                message: "All feilds are required",
                success: false
            })
        }

        const user = await User.findOne({email});
        if (user) {
            return res.status(403).json({
                message: "User already registered with this email"
            })
        }

        const hashedPassword = bcrypt.hash(password, 10)

        await User.create({
            fullname,
            email,
            passwod: hashedPassword
        })

        res.render('/register')
    } catch (error) {
        console.log(error);
    }
}


export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.render('login', { message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.render('login', { message: "Invalid credentials" }, role);
        }

        const token = jwt.sign({
             userId: user._id,
              role: user.role },
               process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

        res.cookie('token', token, { httpOnly: true });

        return res.redirect('/dashboard'); 

    } catch (error) {
        console.error("Login error:", error);
        return res.render('login', { message: "Login failed, please try again." });
    }
};

export const logout = (req, res) => {
    try {
        return res.clearCookie('token')
    } catch (error) {
        console.log(error);
    }
}


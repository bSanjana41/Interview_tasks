import { generateToken } from "../Utils/JWT.utils.js"
import { generateOTP } from "../Utils/OTP.utils.js"
import { userModel } from "../Models/UserSchema.js"
import bcrypt from "bcrypt"

const Signup = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = await userModel.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists", success: false })
        }
        const newUser = new userModel({
            name, email, password
        })

        newUser.password = await bcrypt.hash(password, 10)

        await newUser.save()
        res.status(200).json({
            success: true,
            message: `user created sucessfully`,
            newUser
        })
    } catch (error) {
        res.status(500).json({
            status: error,
            message: `user creation failed`,
            message: error.message
        })

    }
}
const LoginStep1 = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "User does not exist", success: false })
        }
        const VerifyPassword = await bcrypt.compare(password, user.password)
        if (!VerifyPassword) { return res.status(403).json({ message: "Password or email is incorrect" }) }
        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 mins expiry

        const otp = generateOTP()
        user.otp = otp;
        user.otpExpiry = otpExpiry;
        await user.save();
        console.log(`OTP for ${email}: ${otp}`);

        res.status(200).json({
            message: "Password verified, OTP sent to email/phone",
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
const LoginStep2 = async (req, res) => {
    try {
        const { email, otp } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        if (user.otp !== otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        if (Date.now() > user.otpExpiry) {
            return res.status(400).json({ message: "OTP expired" });
        }

        // ✅ Clear OTP
        user.otp = null;
        user.otpExpiry = null;
        await user.save();

        // ✅ Issue JWT
        const token = generateToken({ email: user.email, _id: user._id });

        res.status(200).json({
            message: "OTP verified. Login successful.",
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            },
            token
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}


export { Signup, LoginStep1, LoginStep2 }
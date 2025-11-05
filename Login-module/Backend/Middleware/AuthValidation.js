import Joi from "joi"
const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    })
    const { error } = schema.validate(req.body)
    if (error) {
        return res.status(400).json({ message: "Bad request", error })
    }
    next()
}
const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    })
    const { error } = schema.validate(req.body)
    if (error) {
        return res.status(400).json({ message: "Bad request", error })
    }
    next()
}
const otpSchema = Joi.object({
    email: Joi.string().email().required(),
    otp: Joi.string().required()
});

const otpValidation = (req, res, next) => {
    const { error } = otpSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).json({
            message: "Bad request",
            error
        });
    }
    next();
};

export { signupValidation, loginValidation, otpValidation }
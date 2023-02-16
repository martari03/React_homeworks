import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Z ]{5,40}$/).required(),
    username: Joi.string().regex(/^[a-zA-Z_]{5,20}$/).required(),
    email: Joi.string().regex(/^[a-zA-Z@_.]{5,50}$/).required(),
    phone: Joi.string().regex(/^[0-9]{10,15}$/).required(),
    website: Joi.string().regex(/^[a-zA-Z.]{10,35}$/).required(),
    //street: Joi.string().regex(/^[a-zA-Z ]{1,40}$/).required(),
    // suite: Joi.string().regex(/^[a-zA-Z0-9 ]{1,40}$/).required(),
})

export {userValidator};
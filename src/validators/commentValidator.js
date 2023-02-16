import Joi from "joi";

const commentValidator = Joi.object({
    postId: Joi.number().min(1).max(100).required(),
    name: Joi.string().regex(/^[a-zA-z ]{5,50}$/).required(),
    email: Joi.string().regex(/^[a-zA-z@._-]{5,50}$/).required(),
    body: Joi.string().regex(/^[a-zA-z ]{3,150}$/)
});

export {commentValidator};
import {z} from 'zod';

export const usernameValidation = z
    .string()
    .min(2, "Username must be atleast 2 characters")
    .max(20, "Username must be no more than 20 chracters")
    .regex(/^[a-zA-Z0-9_]+$/ , "UserName must not contain special chararcter")


export const signUpSchema = z.object({
    username: usernameValidation,
    emai: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(6,{message:'Password must be at least 6 chararcters'})
})
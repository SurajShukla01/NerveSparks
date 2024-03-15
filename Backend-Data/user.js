const z = require('zod');

const UserSchema = z.object({
    user_email: z.string(),
    user_location: z.string(),
    user_info: z.object({
        fullname: z.string(),
        gender: z.string().refine(gender => gender === "male" || gender === "female", {
            message: "Gender must be either 'male' or 'female'",
        }),
        DOB: z.date(),
        phone_no : z.string().refine(phone_no => phone_no.length == 10,{
            message: "Phone number must be 10 digits long'",
        })
    }),
    password: z.string(),
    vehicle_info: z.array(z.string()),
});

module.exports = { User: UserSchema };

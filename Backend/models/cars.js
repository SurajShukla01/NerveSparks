const z = require('zod');


const CarSchema = z.object({
    type: z.string(),
    name: z.string(),
    model: z.string(),
    car_info: z.object({
        mileage: z.number(),
        fule_type: z.string(),
        color: z.string(),
        transmission_type: z.string(),
        model_img_url: z.string()
    })
});

module.exports = { Car: CarSchema };
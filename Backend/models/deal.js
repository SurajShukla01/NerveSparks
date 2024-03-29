const z = require('zod');


const DealSchema = z.object({
    car_id: z.string(),
    deal_info: z.object({
        price: z.number(),
        discount: z.number(),
        status: z.string()
    })
});

module.exports = { Deal: DealSchema };
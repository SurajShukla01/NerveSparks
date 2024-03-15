const z = require('zod');


const SoldVehicleSchema = z.object({
    vehicle_id: z.string(),
    car_id: z.string(),
    vehicle_info: z.object({
        sale_date: z.string(),
        sale_price: z.number(),
        registration_no: z.string()
    })
});

module.exports = { Sold: SoldVehicleSchema };
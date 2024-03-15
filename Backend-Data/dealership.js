const z = require('zod');

const DealershipSchema = z.object({
    dealership_email: z.string(),
    dealership_name: z.string(),
    dealership_location: z.string(),
    password: z.string(),
    dealership_info: z.object({
        phone_no : z.string().refine(phone_no => phone_no.length == 10,{
            message: "Phone number must be 10 digits long'",
        }),
        Brands: z.array(z.string()),
        Customer_rating: z.number().refine(customer_rating => customer_rating>=0 && customer_rating<=5,{
            message: "Customer rating must be in range 0-5",
        })
    }),
    cars: z.array(z.string()),
    deals: z.array(z.string()), 
    sold_vehicles: z.array(z.string()), 
});

module.exports = { Dealership: DealershipSchema };
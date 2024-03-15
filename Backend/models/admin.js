const zod = require('zod');

const adminSchema = zod.object({
    username: zod.string(),
    password: zod.string()
});

module.exports = { Admin: adminSchema };

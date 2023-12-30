"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('process.env =', process.env.ALLOWED_ORIGINS);
exports.default = () => ({
    nodeEnv: process.env.NODE_ENV || 'dev',
    port: process.env.PORT,
    corsConfig: {
        origin: process.env.ALLOWED_ORIGINS.split(','),
    },
});
//# sourceMappingURL=configuration.js.map
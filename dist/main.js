"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./modules/app.module");
const swagger_config_1 = require("./configs/swagger.config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    (0, swagger_config_1.SwaggerConfiguration)(app);
    const PORT = process.env.PORT;
    await app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
        console.log(`swagger : http://localhost:${PORT}/swagger`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map
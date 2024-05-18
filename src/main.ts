import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { SwaggerConfiguration } from './configs/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerConfiguration(app)
  const PORT = process.env.PORT
  await app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    console.log(`swagger : http://localhost:${PORT}/swagger`);
    
    
  
  });
}
bootstrap();

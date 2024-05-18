import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { SwaggerConfiguration } from './configs/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerConfiguration(app)
  await app.listen(3000,()=>{
    console.log(`http://localhost:3000`);
    
  
  });
}
bootstrap();

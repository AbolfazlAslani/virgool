import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function SwaggerConfiguration(app: INestApplication):void{
    const document = new DocumentBuilder()
    .setTitle("virgool")
    .setDescription("virgool restful api")
    .setVersion("v0.0.1")
    .build()
    
    const swaggerDocument = SwaggerModule.createDocument(app,document)
    SwaggerModule.setup("/swagger",app,swaggerDocument)
    

}
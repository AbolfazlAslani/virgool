import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { TypeOrmConfig } from 'src/configs/typeorm.config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(process.cwd() , '.env')
    }),
    TypeOrmModule.forRoot(TypeOrmConfig())

],
  controllers: [],
  providers: [],
})
export class AppModule {}

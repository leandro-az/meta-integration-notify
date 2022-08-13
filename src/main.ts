import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import 'dotenv/config';

async function bootstrap() {
  const port = process.env.port || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { TodoModule } from './todo/todo.module';

async function bootstrap() {
  const app = await NestFactory.create(TodoModule);

  const config = new DocumentBuilder()
    .setTitle('TODO API')
    .setDescription('TODO API 문서')
    .setVersion('1.0')
    .addTag('todos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

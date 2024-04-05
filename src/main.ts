import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Todo App - APIs')
    .setDescription('This contains all apis of users and tasks of the Todo app')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig, {
    include: [UsersModule, TasksModule],
  });
  SwaggerModule.setup('api/v1', app, document);

  await app.listen(3000);
}
bootstrap();

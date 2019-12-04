import * as fs from 'fs';
import del from 'del';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './src/app.module';

NestFactory.create(AppModule).then(app => {
  const options = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, options);
  fs.writeFileSync('spec.json', JSON.stringify(document), 'UTF-8');
  del(['./frontend/src/app/client'], {force: true});
});

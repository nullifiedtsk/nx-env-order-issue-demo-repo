/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as process from 'process';

async function bootstrap() {
  const val = process.env['AAA_VARIABLE_NAME']?.toString().trim();
  const valIsSet = !!val && !!val.toString().trim();
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  if (valIsSet) {
    Logger.log(
      `🚀 Today is the day of ${val}! Congrats, ${val}!`
    );
  } else {
    Logger.log(
      `😞 Whoa, today is just today. Such disappointed 🐶`
    );
  }
}

bootstrap();

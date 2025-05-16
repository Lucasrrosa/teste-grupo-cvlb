import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        entities: [`${__dirname}/**/*.entity{.ts,.js}`],
        logging: configService.get('nodenv') === 'dev',
        migrations: [`${__dirname}/migrations/*{.ts,.js}`],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

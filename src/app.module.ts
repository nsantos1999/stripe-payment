import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StripeModule } from './stripe/stripe.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    StripeModule.forRootAsync({
      inject: [ConfigService],
      // useF
      useFactory: (configService: ConfigService) => ({
        apiKey: configService.get<string>('STRIPE_API_KEY'),
        options: {
          apiVersion: '2023-10-16',
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { StripeService } from './services/stripe.service';
import { ConfigurableModuleClass } from './builders/configurable-module.builder';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [StripeService],
  exports: [StripeService],
  imports: [ConfigModule],
})
export class StripeModule extends ConfigurableModuleClass {}

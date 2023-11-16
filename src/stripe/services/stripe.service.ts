import { Inject, Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { StripeModuleOptions } from '../@types/stripe-module-options.types';
import { MODULE_OPTIONS_TOKEN } from '../builders/configurable-module.builder';

@Injectable()
export class StripeService {
  public readonly stripe: Stripe;
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: StripeModuleOptions,
  ) {
    console.log(this.options.apiKey);
    this.stripe = new Stripe(this.options.apiKey, this.options.options);
  }
}

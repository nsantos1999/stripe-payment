import { Injectable } from '@nestjs/common';
import { StripeService } from './stripe/services/stripe.service';
import { AddCardDto } from './stripe/dtos/add-card-.dto';
import { AddCustomerDto } from './stripe/dtos/add-customer.dto';

@Injectable()
export class AppService {
  constructor(private readonly stripeService: StripeService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getCustomers() {
    // return this.stripeService.stripe.products.list();
    return this.stripeService.stripe.customers.list();
  }

  checkout() {
    return this.stripeService.stripe.checkout.sessions.create({
      // payment_method_configuration: {}
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          // price: 'asdasd',
          price_data: {
            currency: 'BRL',
            unit_amount: 5.99,
          },
          quantity: 2,
        },
      ],
    });
  }

  addCustomer(addCustomerDto: AddCustomerDto) {
    const { email, name } = addCustomerDto;
    return this.stripeService.stripe.customers.create({
      name,
      email,
    });
  }

  addCard(addCardDto: AddCardDto) {
    const { name, cvc, expireMonth, expireYear, number, customerId } =
      addCardDto;
    return this.stripeService.stripe.tokens.create({
      customer: customerId,

      card: {
        name,
        exp_month: expireMonth,
        exp_year: expireYear,
        number,
        cvc,
      },
    });
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AddCardDto } from './stripe/dtos/add-card-.dto';
import { AddCustomerDto } from './stripe/dtos/add-customer.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('customers')
  getCustomers() {
    return this.appService.getCustomers();
  }

  @Post('add-card')
  addCard(@Body() addCardDto: AddCardDto) {
    return this.appService.addCard(addCardDto);
  }
  @Post('add-customer')
  addCustomer(@Body() addCustomerDto: AddCustomerDto) {
    return this.appService.addCustomer(addCustomerDto);
  }
}

export interface AddCardDto {
  customerId: string;
  name: string;
  number: number;
  expireMonth: number;
  expireYear: number;
  cvc: number;
}

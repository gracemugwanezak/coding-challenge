import { IsArray, IsNotEmpty } from 'class-validator';

export class OrderDto {
  @IsArray()
  @IsNotEmpty({ each: true }) // Ensures each product ID is not empty
  productIds: number[];
}

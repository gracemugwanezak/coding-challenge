import {
  IsString,
  IsNumber,
  IsNotEmpty,
  Min,
  Max,
  MaxLength,
} from 'class-validator';

export class ReviewDto {
  @IsNumber()
  @IsNotEmpty()
  productId: number; // Product being reviewed

  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300) // max length for the review comment
  comment: string;
}

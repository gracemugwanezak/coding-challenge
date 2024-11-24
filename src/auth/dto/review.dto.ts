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
  @Min(1) // Minimum rating value
  @Max(5) // Maximum rating value
  rating: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300) // Example max length for the review comment
  comment: string;
}

import {
  IsString,
  IsNumber,
  IsNotEmpty,
  Min,
  Max,
  MaxLength,
} from 'class-validator';

export class ReviewDto {
  @IsNumber({}, { message: 'Product ID must be a number.' })
  productId: number;

  @IsNumber({}, { message: 'Rating must be a number.' })
  @Min(1, { message: 'Rating must be at least 1.' })
  @Max(5, { message: 'Rating cannot exceed 5.' })
  rating: number;

  @IsString({ message: 'Comment must be a string.' })
  @IsNotEmpty({ message: 'Comment cannot be empty.' })
  @MaxLength(300, { message: 'Comment cannot exceed 300 characters.' })
  comment: string;
}

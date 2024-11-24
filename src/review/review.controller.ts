import { Body, Controller, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewDto } from 'src/auth/dto';
import { GetUser } from 'src/auth/decorator';
@Controller('reviews')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}
  @Post()
  addReview(@Body() reviewDto: ReviewDto, @GetUser('id') userId: number) {
    return this.reviewService.create(reviewDto, userId);
  }
}

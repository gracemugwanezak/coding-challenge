import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewDto } from 'src/auth/dto';
import { GetUser } from 'src/auth/decorator';
import { jwtGuard } from 'src/auth/guard';
@Controller('reviews')
@UseGuards(jwtGuard)
export class ReviewController {
  constructor(private reviewService: ReviewService) {}
  @Post()
  addReview(@Body() reviewDto: ReviewDto, @GetUser('id') userId: number) {
    return this.reviewService.create(reviewDto, userId);
  }
}

import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
} from '@nestjs/common'
import { CreateReviewDto } from './dto/create-review.dto'
import { REVIEW_NOT_FOUND } from './review.constants'
import { ReviewService } from './review.service'

@Controller('review')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) {}
    @Post('create')
    async create(@Body() dto: CreateReviewDto) {
        return this.reviewService.create(dto)
    }

    @Delete(':id')
    async delete(@Param() id: string) {
        const deletedDocument = await this.reviewService.delete(id)
        if (!deletedDocument) {
            throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND)
        }
    }

    @Get('byProduct/:productId')
    async getByProduct(@Param() productId: string) {
        return this.reviewService.findByProductId(productId)
    }
}

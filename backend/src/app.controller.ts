import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { RequestDto } from './request.dto';
import { ResponseDto } from './response.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('rest/api')
export class AppController {

  @Post('add')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: ResponseDto
  })
  add(@Body() request: RequestDto): ResponseDto {
    return {result: request.arg1 + request.arg2};
  }
}

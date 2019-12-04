import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { RequestDto } from './request.dto';
import { ResponseDto } from './response.dto';
import { ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('rest/api')
@ApiTags('calculate')
export class AppController {

  @Post('add')
  @HttpCode(200)
  @ApiOperation({operationId: "add"})
  @ApiResponse({
    status: 200,
    type: ResponseDto
  })
  add(@Body() request: RequestDto): ResponseDto {
    return {result: request.arg1 + request.arg2};
  }
}

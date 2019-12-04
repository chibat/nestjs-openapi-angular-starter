import { ApiProperty } from "@nestjs/swagger";

export class ResponseDto {

  @ApiProperty()
  result: number;
}
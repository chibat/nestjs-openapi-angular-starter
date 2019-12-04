import { ApiProperty } from "@nestjs/swagger";

export class RequestDto {

  @ApiProperty()
  readonly arg1: number;

  @ApiProperty()
  readonly arg2: number;
}
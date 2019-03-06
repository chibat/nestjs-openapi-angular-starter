import { ApiModelProperty } from "@nestjs/swagger";

export class RequestDto {

  @ApiModelProperty()
  readonly arg1: number;

  @ApiModelProperty()
  readonly arg2: number;
}
import { ApiModelProperty } from "@nestjs/swagger";

export class ResponseDto {

  @ApiModelProperty()
  result: number;
}
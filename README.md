
# NestJS -> OpneAPI => Angular Starter

[![Build Status](https://travis-ci.org/chibat/nestjs-openapi-angular-starter.svg?branch=master)](https://travis-ci.org/chibat/nestjs-openapi-angular-starter)

## Feature

* Type safe communication

## Architecture

<img src="https://docs.google.com/drawings/d/e/2PACX-1vTNkQFzfRmMoJqEkbVtJXWgwMNgJXJQRiQEjmNajjpYUQboE3syxos7EbMsrpBL8j9WFmyjJCto2sD5/pub?w=632&h=367">

## Prerequisites

* JDK11? (for OpenAPI Generator)
* [node + npm](https://nodejs.org/) (Current Version)

## Run the backend dev server

```
$ cd backend
$ npm install
$ npm run start:dev
```

Open following URL by Web browser.  
http://localhost:8080/

## Run the frontend dev server

```
$ cd frontend
$ npm install
$ npm start
```

Open following URL by Web browser.  
http://localhost:4200/

## Development flow

### 1. Create a Web backend code

#### app.controller.ts

```typescript
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
```

#### request.dto.ts

```typescript
import { ApiProperty } from "@nestjs/swagger";

export class RequestDto {

  @ApiProperty()
  readonly arg1: number;

  @ApiProperty()
  readonly arg2: number;
}
```

#### response.dto.ts

```typescript
import { ApiProperty } from "@nestjs/swagger";

export class ResponseDto {

  @ApiProperty()
  result: number;
}
```

### 2. Generate the client code

```
$ cd backend
$ npm run generate-client
```

### 3. Create a Web frontend code using the Generated files

#### app.component.ts

`CalcuateService` is the Generate class.

```typescript
import { Component } from '@angular/core';
import { CalculateService } from './client/api/calculate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arg1: number;
  arg2: number;
  result: number;

  constructor(private calculateService: CalculateService) {
  }

  add() {
    if (this.arg1 || this.arg2) {
      this.calculateService
        .add({arg1: this.arg1, arg2: this.arg2})
        .subscribe(data => this.result = data.result);
    }
  }
}
```



## blog

[Japanese](https://qiita.com/chibato/items/35785ee84033fb1d91fb)

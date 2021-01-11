import { Body, Controller,Delete,Get, Header, HttpCode, HttpStatus, Param, Post, Put, Req, Res } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto'
import {Response} from "express"
let time = 0;

@Controller('cats')
export class CatsController {
    @Get('all')
    @Header('Set-Cookie', `a=${time}`)
    findAll(): string{
        time++
        return 'all cats'
    }
    @Get(':id')
    findOne(@Param() param): string{
        console.info(param)
        return `find the ${param.id} cat`
    }
    @Post('create')
    // @HttpCode(204)
    create(@Body() cat: CreateCatDto): string{
        console.info(cat);
        return `create a name is ${cat.name} name is ${cat.age} year old cat`;
    }
    @Post('createOne')
    createOne(@Req() req: any, @Res() res: Response) {
        // console.log("req", req)
        // return `create a animal`
        res.status(HttpStatus.OK).send()
    }
    @Delete()
    delete(): string{
        return "delete the cat"
    }
    @Put()
    update(): string{
        return "update a cat"
    }
}

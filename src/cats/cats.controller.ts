import { Body, Controller,Delete,Get, Header, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto'
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
    @Post()
    // @HttpCode(204)
    create(@Body() cat: CreateCatDto): string{
        console.info(cat);
        return `create a name is ${cat.name} name is ${cat.age} year old cat`;
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

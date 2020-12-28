import { Controller, Get, Res, HttpStatus, Post, Req } from '@nestjs/common';
import {Request, Response} from "express"
@Controller('dogs')
export class DogsController {
    @Get()
    findAll(@Res() res: Response,@Req() req: Request) {
        console.info("res", req)
        res.status(HttpStatus.CREATED).send();
    }
    @Post()
    create(@Res() res: Response) {
        res.status(HttpStatus.OK).json([]);
    }
}

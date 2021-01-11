controller 是管理路由的形式。
@controller(path) path是通用的path
@nestjs/common里封装里许许多多的装饰器
    请求方法：@Get @Post @Put @Delete
    请求包体，和请求参数序列化 @Body @Query 
    请求头：@Header
    状态码：@HttpCode
    *同时 nestjs 支持的类库独有的形式.*如, express @Res(response) @Req(request)


module controller service
module 组织controller 
controller 里组织service

装饰器可以实现
method 
path
header
httpcode
请求体Body
请求参数
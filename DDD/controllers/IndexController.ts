import { interfaces, controller, httpGet, TYPE } from 'inversify-koa-utils';
import { Index } from '../interface';
import { inject } from 'inversify';
import TAGS from '../constant/tags';
import { IRouterContext } from 'koa-router';
import { provideThrowable } from '../ioc';
import { UserService } from '../services/UserService';

// 需要满足一定条件才执行
@provideThrowable(TYPE.Controller, 'IndexController')
@controller('/')
export default class IndexController implements interfaces.Controller {
    private indexService: Index;

    // @inject(TAGS.UserService) userService: Index
    // 注入前需要定义可以注入的常量
    // 这一处就已经体现出面向切面编程的思想了
    constructor(@inject(TAGS.IndexService) indexService: Index) {
        this.indexService = indexService;
    }
    // 根路由
    @httpGet('/')
    private async index(ctx: IRouterContext, next: () => Promise<unknown>): Promise<void>{
        const data = this.indexService.getUser(0);
        const user_service = UserService.register('123', '2982093545@qq.com');
        console.log(user_service);
        ctx.body = {
            data
        }
    }
}
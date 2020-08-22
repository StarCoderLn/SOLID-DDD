import { Index } from '../interface/index';
import { Model } from '../models/user';
import { provide } from 'inversify-binding-decorators';
import TAGS from '../constant/tags';

// 表示可以被注入
// 一上来就执行
@provide(TAGS.IndexService)
// 实现接口
export class IndexService implements Index {
    private userStorage: Model.User[] = [{
        name: '2982093545@qq.com',
        email: 'linnan'
    }, {
        name: '2982093235@qq.com',
        email: 'star'
    }]
    public getUser(id: number): Model.User {
        let result: Model.User;
        result = this.userStorage[id];
        return result;
    }

}
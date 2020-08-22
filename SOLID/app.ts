import 'reflect-metadata';
import './ioc/loader';
import { InversifyKoaServer } from 'inversify-koa-utils';
import { Container } from 'inversify';
import { buildProviderModule } from 'inversify-binding-decorators';

// 创建容器
const container = new Container();
container.load(buildProviderModule()); // 容器就拥有了对所有的类注入的能力

let server = new InversifyKoaServer(container);

let app = server.build();
app.listen(3000, () => {
    // 需要在 tsconfig.json 中配置 "lib": ["DOM"]，不然不支持 console 方法
    console.log('服务器启动成功');
})
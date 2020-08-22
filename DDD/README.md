需要用到的库：InversifyJS、inversify-koa-utils、inversify-binding-decorators、koa-router 和 @types/koa-router

启动命令：ts-node app.ts，需要先安装 typescript 和 ts-node

InversifyJS 和 Awilix 的不同之处：

- InversifyJS 是完全遵循 SOLID 原则实现的，但是 Awilix 并没有。

- InversifyJS 在注入过程中灵活性更高。

开发流程如下

1. 先定义接口

2. 实现接口 services，标记为可被注入 @injectable()

3. 起名字，采用 inversify-binding-decorators 这个库的话可以省去这一步的工作

容器.绑定<interface类>（名字）.to（具体哪个类）

container.bind<Warrior>(TYPES.Warrior).to(Ninja);

4. 执行注入到需要的类里

这是一个使用基于 SOLID 实现的 inversify 框架完成的 IoC 的 Node.js 小架构

├── README.md 说明文档
├── app.ts 启动文件
├── constant 敞亮定义
├── controllers 路由文件
├── interface 接口
├── ioc 控制中心
├── models 数据模型
├── node_modules 仓库 @types/xxx
├── package.json 包管理
├── services 服务层实现接口层
├── tsconfig.json 配置文件，最好自己一个个往里填
└── yarn.lock 🔐 包锁文件

这一版新加入了 DDD

领域驱动设计（DDD）

核心点在于以下几点：

- 软件复杂度的分析

- 怎么去界定服务的上下文，怎么知道谁通知谁，谁跟谁之间协作

- 软件分层，这个分层是基于 SOLID 之上的

新增的库有：@node-ts/bus-messages、@node-ts/ddd 和 @node-ts/ddd-types
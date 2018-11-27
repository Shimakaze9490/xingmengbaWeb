// 引入koa对象
const Koa = require("koa");
// 实例化koa
const app = new Koa();
// 引入views模块
const views = require("koa-views"); 
// 引入json模块
const json = require("koa-json");
// 引入onerror模块
const onerror = require("koa-onerror");
// 引入bodyparser模块
const bodyparser = require("koa-bodyparser");
// 引入logger模块
const logger = require("koa-logger");

// 模板引擎
const nunjucks = require("nunjucks");
const nunjucksViews = require("koa-nunjucks-promise");
// 引入index页面
const index = require("./routes/index");
// 引入users页面
const users = require("./routes/users");

// error handler。 事件句柄
onerror(app);

// middlewares 中间件
app.use(bodyparser({
    enableTypes : ["json", "form", "text"]
}));
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

// pug 修改成html
// app.use(views(__dirname + "/views", {
//   extension: "pug"
// }))

// 注意这里，容易出问题
app.use(nunjucksViews("views", {
    ext: "html",
    noCache: process.env.NODE_ENV === "development",
    filters: {
        json: function(str) {
            return JSON.stringify(str, null, 2);
        }
    },
    tags: {
        variableStart: "[[",
        variableEnd: "]]"
    }
}));

// logger
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    // eslint-disable-next-line
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on("error", (err, ctx) => {
    // eslint-disable-next-line
  console.error("server error", err, ctx);
});


// 导出模块
module.exports = app;


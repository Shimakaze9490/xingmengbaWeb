// 路由模块
const router = require("koa-router")();  
router.get("/", async (ctx, next) => {
    // 渲染页面
    await ctx.render("index", {
        title: "Hello 星梦吧!"
    });
});

router.get("/string", async (ctx, next) => {
    ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
    ctx.body = {
        title: "koa2 json"
    };
});

module.exports = router;

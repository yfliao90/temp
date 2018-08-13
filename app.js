const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');

const app = new Koa();


// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/') {
//         ctx.response.redirect('index.html');
//     } else {
//         await next();
//     }
// });

// parse request body:
app.use(bodyParser());

app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');
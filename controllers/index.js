var fs = require('fs');

var fn_index = async (ctx, next) => {
    fs.readFile('index.html', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
    ctx.response.body = data;
    // ctx.response.body = `<h1>Index</h1>
    //     <form action="/signin" method="post">
    //         <p>Name: <input name="name" value="koa"></p>
    //         <p>Password: <input name="password" type="password"></p>
    //         <p><input type="submit" value="Submit"></p>
    //     </form>`;
    });
};

module.exports = {
    'GET /': fn_index
};
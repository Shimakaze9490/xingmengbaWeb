// var Bomb = require("./public/vendor/Bmob-1.6.5.min.js");
let Bmob = require("./hydrogen-js-sdk/src/lib/app.js");
// console.dir(Bmob);
Bmob.initialize("ed0a120e852b60ce9148d6c815a84754", 
    "ea660c6cac91b04073de2cca9b01289c");

// 用户注册
let params = {
    username: "bmob2018",
    password: "bmob111",
    email: "949034746@qq.com",
    phone: "18190898600"
};

Bmob.User.register(params).then(res => {
    // eslint-disable-next-line
    console.log(res);
}).catch(err => {
    // eslint-disable-next-line
    console.log(err);
});


// console.log("hello");
// 引入fs模块
const fs = require("fs");

// fs.readFile("文件路径"，"回调函数")
// fs.readFile("./1.txt", (err, data) => {
//     // console.log(err);
//     // 如果err存在就抛出err错误
//     if (err) throw err;
//     // 而二进制转换成字符串
//     console.log(data.toString());
// })
// fs.readFile("./2.txt", (err, data) => {
//     // console.log(err);
//     // 如果err存在就抛出err错误
//     if (err) throw err;
//     // 而二进制转换成字符串
//     console.log(data.toString());
// })
// fs.readFile("./3.txt", (err, data) => {
//     // console.log(err);
//     // 如果err存在就抛出err错误
//     if (err) throw err;
//     // 而二进制转换成字符串
//     console.log(data.toString());
// })
// fs.readFile("./4.txt", (err, data) => {
//     // console.log(err);
//     // 如果err存在就抛出err错误
//     if (err) throw err;
//     // 而二进制转换成字符串
//     console.log(data.toString());
// })

// 回调地狱，就是多个回调函数多次嵌套
fs.readFile("./1.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
    fs.readFile("./2.txt", (err, data) => {
        if (err) throw err;
        console.log(data.toString());
        fs.readFile("./3.txt", (err, data) => {
            if (err) throw err;
            console.log(data.toString());
            fs.readFile("./4.txt", (err, data) => {
                if (err) throw err;
                console.log(data.toString());
            })
        })
    })
})
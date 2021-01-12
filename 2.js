// 引入fs，模块
const fs = require("fs");
// fs.readFile("文件路径", () => {})
// 封装promise方法的函数，核心就是在函数中直接返回一个promise对象
function readFile(file) {
    return new Promise((resolve, reject) => {
        // 读取文件
        fs.readFile(file, (error, data) => {
            // 判断error错误信息是否存在
            // 存在就变成拒绝状态
            if (error) {
                reject(error);
            } else {
                // 不存在就变成成功状态,返回文件内容
                resolve(data.toString());
            }
        });
    });
}
// 调用promise
// readFile("./1/4.txt").then((res) => {
//     console.log(res);
// }, (err) => {
//     console.log(err);
// })
let p1 = readFile("./1/1.txt");
let p2 = readFile("./1/2.txt");
let p3 = readFile("./1/3.txt");
let p4 = readFile("./1/4.txt");
Promise.all([p1, p2, p3, p4]).then(res => { console.log("四个调用成功");
    console.log(...res); }).catch(err => console.log("四个调用失败"));
//只要有一个异步操作完成之后，就执行某个操作 eace
// 只有全部的异步操作完成之后，才进行某个操作，只要有一个失败就不进行 all
// 引入fs，模块
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
let p1 = readFile("./1/1.txt");
let p2 = readFile("./1/2.txt");
let p3 = readFile("./1/3.txt");
let p4 = readFile("./1/4.txt");
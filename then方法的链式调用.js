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

// 上一个then返回的值就直接等于下一个then的参数
// 当有多个then调用时catch放在最后面，它可以捕获任何一个then
readFile('./1/1.txt').then(data => { console.log(data); return readFile("./1/2.txt") }).then(data1 => { console.log(data1); return readFile("./1/3.txt") }).then(data3 => { console.log(data3); return readFile("./1/4.txt") }).then(data4 => { console.log(data4) }).catch(err => console.log(err));
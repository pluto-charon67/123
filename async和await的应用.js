// async和await结合读取文本文件的内容
//引入fs模块
const fs = require("fs");
// 封装一个promise方式读取文件
// 核心就是返回一个promise对象
function readFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            // 根据是否存在er错误信息，决定promise对象应该返回什么状态
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        })
    })
}
async function main() {
    try {
        // 异步处理的结果会储存起来，等待调用
        let p1 = await readFile("./1/1.txt");
        let p2 = await readFile("./1/2.txt");
        let p3 = await readFile("./1/3333.txt");
        let p4 = await readFile("./1/4.txt");
        console.log(p1, p2, p3, p4);
    } catch (err) {
        console.log("错误信息为:");
        console.log(err);
    }
}
main();

// async和await相结合的优点是可以让异步执行的函数，写成同步执行的方式
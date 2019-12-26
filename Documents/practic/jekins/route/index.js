let router = require("koa-router")();
let fs = require("fs");
let path = require("path");
// 读取controller文件夹下所有js文件
let files = fs.readdirSync(path.join(__dirname, "../controllers"));

let js_files = files.filter(item => {
  return item.endsWith(".js");
});

for (let url of js_files) {
  let maping = require(path.join(__dirname, "../controllers/" + url));
  for (let item in maping) {
    if (item.startsWith("GET /")) {
      let path = item.slice(4);
      router.get(path, maping[item]);
    }
  }
}

module.exports = router.routes();

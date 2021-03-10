const { readdirSync, writeFileSync } = require("fs");

let data = readdirSync("./fonts");
let file = "";
let obj = [];
for (let i = 0; i < data.length; i++) {
    obj.push({
        name: data[i],
        att: `bashir-gui-font-${i + 1}`
    })
    file += `@font-face{font-family: bashir-gui-font-${i + 1};src: url("./fonts/${data[i]}");}`
}
writeFileSync("./bashir-gui-font.css", file);
writeFileSync("./../../app/pages/fonts/font.ts", `export let x = ${JSON.stringify(obj)}`);
import * as fs from "fs/promises";

await fs.writeFile("hello.txt", "Hey its me hello.txt");

try {
  const content = await fs.readFile("hello.txt", "utf-8");
  console.log(content);
} catch (err) {
  console.log(err);
}
console.log("existed");
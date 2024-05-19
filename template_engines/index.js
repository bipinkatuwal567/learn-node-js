import express from "express"
import {fileURLToPath} from "url";
import { dirname } from "path";

const app = express();
app.use(express.static("public"))

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/view/homepage.html");
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/view/about.html")
})

app.listen(8000, () => {
    console.log("Server has started🚀")
})
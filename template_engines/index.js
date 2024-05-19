import express from "express"
import {fileURLToPath} from "url";
import { dirname } from "path";

const app = express();
app.use(express.static("public"))
app.set('view engine', 'ejs')

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", (req, res) => {
   res.render("homepage", {
    title: "Home"
   }) 
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About us"
    })
})

app.get("/services", (req, res) => {
    res.render("services", {
        title: "Services",
        serviceList: ["Web Design", "SEO", "App Development"]
    })
})

app.use((req, res) => {
    res.send("<p>Page not found</p>")
})

app.listen(8000, () => {
    console.log("Server has started🚀")
})
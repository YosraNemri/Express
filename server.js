const express = require("express");
const app = express();
var today = new Date();
var x =
    today.getDay() > 0 &&
    today.getDay() < 6 &&
    today.getHours() >= 12 &&
    today.getHours() <= 17;

/*app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Navbar/navbar.html");
});*/
const logger = (req, res, next) => {
    console.table({ method: req.method });
    console.table({ url: req.url });
    next();
};
app.use(logger);
app.get("/Navbar/navbar.css", (req, res) => {
    res.sendFile(__dirname + "/Navbar/navbar.css");
});
app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/style.css");
});

app.get("/home", (req, res) => {
    if (x) {
        res.sendFile(__dirname + "/Pages/home.html");
    } else {
        res.sendFile(__dirname + "/Pages/file.html");
    }
});

app.get("/image/pc3.jpg", (req, res) => {
    res.sendFile(__dirname + "/image/pc3.jpg");
});
app.get("/image/pc1.png", (req, res) => {
    res.sendFile(__dirname + "/image/pc1.png");
});
app.get("/image/pc2.jpg", (req, res) => {
    res.sendFile(__dirname + "/image/pc2.jpg");
});
app.get("/image/pc4.jpg", (req, res) => {
    res.sendFile(__dirname + "/image/pc4.jpg");
});
app.get("/Contact", (req, res) => {
    if (x) {
        res.sendFile(__dirname + "/Pages/contact.html");
    } else {
        res.sendFile(__dirname + "/Pages/file.html");
    }
});
app.get("/Services", (req, res) => {
    if (x) {
        res.sendFile(__dirname + "/Pages/service.html");
    } else {
        res.sendFile(__dirname + "/Pages/file.html");
    }
});

const port = 5000;
app.listen(port, () => {
    console.log(`server running o port ${port}`);
});

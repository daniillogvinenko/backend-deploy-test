const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(
    cors({
        origin: ["http://localhost:5173", "http://testingdeploy.ru"],
    })
);

app.get("/api/users", (req, res) => {
    res.json([
        {
            id: 1,
            userName: "Ivan111",
            email: "ivan123@mail.ru",
        },
    ]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

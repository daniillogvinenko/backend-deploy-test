const express = require("express");
const app = express();
const port = 3000;

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

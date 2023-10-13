const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { addUser, getUsers} = require("./controllers/user");

const app = express();
const PORT = process.env.PORT || 3001
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/getCEOs", getUsers);
app.post("/addCEO", addUser);

app.get('/', (req, res) => {
    res.send({ message: `Server is running on ${PORT} ENV ${JSON.stringify(process.env)}` });
});
app.listen(PORT, () => {
    console.log(`Application starting on port ${PORT}`);
});

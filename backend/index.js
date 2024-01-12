const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
const axios = require('axios');
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put('https://api.chatengine.io/users/', 
            {username: username, secret: username, first_name:username},
            {
                headers: {"PRIVATE-KEY": "3dde5ffb-39c5-424b-9806-715f5af5d38e"}
            }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(3001);
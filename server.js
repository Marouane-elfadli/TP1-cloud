const express = require("express");
const os = require("os");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/config", (req, res) => {
    const data = {
        cpu: os.cpus()[0].model,
        ram_total: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB",
        ram_free: (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB",
        platform: os.platform(),
        arch: os.arch(),
    };

    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

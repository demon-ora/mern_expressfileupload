const express = require("express");
const cors = require("cors");
const fileupload = require("express-fileupload");

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(fileupload());

app.post("/", (req, res) => {
  const filename = Date.now() + "_" + req.files.image.name;
  const file = req.files.image;
  let uploadPath = __dirname + "/uploads/" + filename;
  file.mv(uploadPath, (err) => {
    if (err) {
      return res.send(err);
    }
  });
  res.send(200);
});

app.listen(4000);

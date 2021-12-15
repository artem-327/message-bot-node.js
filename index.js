import express from 'express';
import {
  createMsg,
  deleteMsg,
  updateMsg,
  findMsg,
  getAllMsg,
  findDateToBirthday
} from './model.js';
const app = express();

app.get("/", function (req, res) {
  res.write("Hi!");
  res.end();
});

app.get("messages", function (req, res) {
  res.json(getAllMsg());
});

app.get("getMessageById/:id", function (req, res) {
  const id = req.params.id;
  const msg = findMsg(id);
  if (!msg) {
    res
      .status(404)
      .json({ message: `Message with id=${id} does not exist.` });
  } else {
    res.json(msg);
  }
});

app.get("getDateToBirthday/:id", function (req, res) {
  const id = req.params.id;
  const dateLeft = findDateToBirthday(id);
  if (!dateLeft) {
    res
      .status(404)
      .json({ message: `Message with id=${id} does not exist.` });
  } else {
    res.json({ message: `There are ${dateLeft} days left until your next birthday.` });
  }
});

app.post("createMsg", function (req, res) {
  res.json(createMsg());
});

app.patch("updateMsg/:id", function (req, res) {
  const id = req.params.id;
  const payload = req.body;
  const msg = updateMsg(id, payload);
  if (!msg) {
    res
      .status(404)
      .json({ message: `Message with id=${id} does not exist.` });
  } else {
    res.json(msg);
  }
});

app.delete("deleteMsg/:id", function (req, res) {
  const id = req.params.id;
  const msg = deleteMsg(id);
  if (!msg) {
    res
      .status(404)
      .json({ message: `Message with id=${id} does not exist.` });
  } else {
    res.json(msg);
  }
});

app.listen(8080, function () {
  console.log("server running on 8080");
});

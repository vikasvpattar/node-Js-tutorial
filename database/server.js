const express = require("express");
const user = require("./connection");

const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const sendData = new user(req.body);
    const saveData = await sendData.save();
    res.send(saveData);
  } catch (error) {
    res.status(404).send(error);
  }
});

// get data from db
app.get("/user", async (req, res) => {
  try {
    const getData = await user.find({});
    res.send(getData);
  } catch (error) {
    res.status(404).send(error);
  }
});

// get data using id

app.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const getDataById = await user.findById({ _id: id });
    res.send(getDataById);
  } catch (error) {
    res.status(404).send(error);
  }
});

// updating the data
app.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = await user.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(updateData);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Deleting the data

app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteData = await user.findByIdAndDelete({ _id: id });
    res.send(deleteData);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log("server stared at port 3000");
});

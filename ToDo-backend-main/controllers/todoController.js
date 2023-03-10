const todoModel = require("../models/todoModel");

module.exports.getToDo = async (req, res) => {
  const todo = await todoModel.find();
  res.send({ data: todo });
};

module.exports.createToDo = async (req, res) => {
    const { text } = req.body;
    todoModel.create({ text }).then((data) => {
      console.log("added successfully");
      res.send(data);
    });
    
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;

  todoModel
    .findByIdAndUpdate(_id, { text })
    .then(() => {
      res.send("updated successfully");
    })
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;

  todoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully"))
    .catch((err) => console.log(err));
};

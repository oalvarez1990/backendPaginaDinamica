const ToDo = require("../models/ToDo");

// Create ToDo
exports.createToDo = async (req, res) => {
  try {
    const newToDo = await ToDo.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        newToDo,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

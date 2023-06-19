const { body } = require("express-validator");
const blog = require("../models/Blog");

// Create blog
// exports.createBlog = async (req, res) => {
//   try {
//     const newBlog = await blog.create(req.body);
//     res.status(200).json({
//       status: "success",
//       data: {
//         blog: newBlog,
//       },
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       message: error,
//     });
//   }
// };
// Create blog
exports.createBlog = async (req, res) => {
  try {
    const { title, body, photo } = req.body;

    // Validar los campos requeridos
    if (!title || !body) {
      return res.status(400).json({
        status: "fail",
        message: "El título y el contenido del blog son obligatorios.",
      });
    }

    // Validar la longitud máxima del título y el contenido del blog
    if (title.length > 100 || body.length > 2000) {
      return res.status(400).json({
        status: "fail",
        message:
          "El título no puede tener más de 100 caracteres y el contenido no puede tener más de 2000 caracteres.",
      });
    }

    // Crear el nuevo blog
    const newBlog = await blog.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        blog: newBlog,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blog.find();
    res.status(200).json({
      status: "success",
      results: blogs.length,
      data: {
        blogs,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
// Get blog by id
exports.getBlogById = async (req, res) => {
  try {
    const blogById = await blog.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        blogById,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
// Update blog
exports.updateBlog = async (req, res) => {
  try {
    const updatedBlog = await blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        updatedBlog,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
// Delete blog
exports.deleteBlog = async (req, res) => {
  try {
    // if no exist blog
    const blogById = await blog.findById(req.params.id);
    if (!blogById) {
      return res.status(400).json({
        status: "fail",
        message: "No blog found with that ID",
      });
    }
    await blog.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

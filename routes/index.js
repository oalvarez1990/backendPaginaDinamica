const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

// Here is our route
/**
 * @swagger
 * components:
 *   schemas:
 *     Blog:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         description:
 *           type: string
 *           description: The book explanation
 *         published:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *
 */
/**
 * @swagger
 * tags:
 *   name: Blogs
 *   description: The books managing API
 * /Blogs:
 *   get:
 *     summary: Lists all the books
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: The list of the blogs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blogs'
 *   post:
 *     summary: Create a new book
 *     tags: [Blogs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Blogs'
 *     responses:
 *       200:
 *         description: The created blogs.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blogs'
 *       500:
 *         description: Some server error
 * /book/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The blog id
 *     responses:
 *       200:
 *         description: The blog response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/blogs'
 *       404:
 *         description: The book was not found
 *   put:
 *    summary: Update the book by the id
 *    tags: [Blogs]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Books'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Books'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */
router.post("/createBlog", blogController.createBlog);
router.get("/blogs", blogController.getAllBlogs);
router.get("/blog/:id", blogController.getBlogById);
router.patch("/blog/:id", blogController.updateBlog);

module.exports = router;

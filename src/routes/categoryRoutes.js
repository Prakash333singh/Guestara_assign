const express = require("express");
const upload = require("../middleware/multer");

// --------------------------------------- CONTROLLER FUNCTIONS ---------------------------------
const {
  createCategoryController,
  getAllCategoryController,
  getCategoryById,
  deleteCategoryById,
  getAllSubcategoriesOfCategoryById,
  editCategoryById,
} = require("../controllers/categoryControllers");

const router = express.Router();

// CREATE CATEGORY || POST
router.post("/create", upload.single("image_url"), createCategoryController);

// GET ALL CATEGORIES || GET
router.get("/getAll", getAllCategoryController);

// GET CATEGORY BY ID || GET
router.get("/getCategoryById/:id", getCategoryById);

// GET SUBCATEGORIES UNDER CATEGORY BY CATEGORY ID || GET
router.get(
  "/getAllSubcategoriesOfCategoryById/:id",
  getAllSubcategoriesOfCategoryById
);

// DELETE CATEGORY BY ID || DELETE
router.delete("/delete/:id", deleteCategoryById);

// UPDATE CATEGORY BY ID || PUT
router.put("/edit/:id", upload.single("image_url"), editCategoryById);

module.exports = router;

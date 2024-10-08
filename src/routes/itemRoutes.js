const express = require("express");
const upload = require("../middleware/multer");

// --------------------------------------------------- IMPORTING CONTROLLERS -------------------------------------------
const {
  createItemController,
  getAllItemController,
  getItemById,
  deleteItemById,
  getAllItemsOfCategoryById,
  getAllItemsOfSubcategoryById,
  searchByName,
  edit,
} = require("../controllers/itemsController");
// ---------------------------------------------------------------------------------------------------------------------

const router = express.Router();
router.post("/create", upload.single("image_url"), createItemController);

// GET ALL ITEMS || GET
router.get("/getAll", getAllItemController);

// GET ITEM BY ID || GET
router.get("/getItemById/:id", getItemById);

// GET ITEMS OF CATEGORY BY ID || GET
router.get("/getAllItemsOfCategoryById/:id", getAllItemsOfCategoryById);

// GET ITEMS OF SUBCATEGORY BY ID || GET
router.get("/getAllItemsOfSubcategoryById/:id", getAllItemsOfSubcategoryById);

// GET ITEMS BY NAME || GET
router.get("/getItemByName", searchByName);

//  UPDATE ITEMS BY ID || PUT
router.put("/edit/:id", upload.single("image_url"), edit);

//  DELETE ITEM BY ID || DELETE ---------------------------------------------
router.delete("/delete/:id", deleteItemById);

module.exports = router;

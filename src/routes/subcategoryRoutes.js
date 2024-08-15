const express = require("express");
const upload = require("../middleware/multer");

// ------------------------- CONTROLLER FUNCTION FOR SUBCATEGORY -----------------------------------------------
const {
  createSubcategoryController,
  getAllSubcategoryController,
  getSubcategoryById,
  deleteSubcategoryById,
  editSubcategoryById,
} = require("../controllers/subcategoryController");
// -------------------------------------------------------------------------------------------------------------

const router = express.Router();

// -------------------------------------- ROUTES ------------------------------------

// ----------- CREATE SUBCATEGORY || POST -------------
router.post("/create", upload.single("image_url"), createSubcategoryController);
// -------------------------------------------------

// ----------- GET ALL SUBCATEGORIES || GET ----------------
router.get("/getAll", getAllSubcategoryController);
// ------------------------------------------------

// --------- GET SUBCATEGORY BY ID || GET -------------
router.get("/getSubcategoryById/:id", getSubcategoryById);
// ----------------------------------------------

// --------- EDIT SUBCATEGORY BY ID || PUT ----------------
router.put("/edit/:id", upload.single("image_url"), editSubcategoryById);

// ---------- DELETE SUBCATEGORY BY ID || DELETE ---------
router.delete("/delete/:id", deleteSubcategoryById);

// ------------------------------------------------------------------------------------

module.exports = router;

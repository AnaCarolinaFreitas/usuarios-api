const express = require ("express");
const router = express.Router();

const reportController = require("../controllers/reportController");

router.get("/reports/pdf", reportController.exportUserPdf);

module.exports = router;
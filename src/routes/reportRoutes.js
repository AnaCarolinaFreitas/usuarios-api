const express = require ("express");
const router = express.Router();
const apiKeyMiddleware = require("../config/apiKey")
router.use(apiKeyMiddleware);

const reportController = require("../controllers/reportController");

router.get("/reports/pdf", reportController.exportUserPdf);

module.exports = router;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer")
const mongoose = require("mongoose");
const galleryRoutes = express.Router();
const PORT = 4000;



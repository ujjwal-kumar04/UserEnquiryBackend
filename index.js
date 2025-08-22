let express = require("express");
const mongoose = require("mongoose");
const enquiryRoutes = require("./App/routes/enquiryRoutes");
require('dotenv').config();
let cors = require("cors");

let app = express();
app.use(express.json());
app.use(cors());

app.use("/api", enquiryRoutes);

mongoose.connect(process.env.URI).then(()=>
{
  console.log("Database connected successfully");
 });
 let PORT=process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});


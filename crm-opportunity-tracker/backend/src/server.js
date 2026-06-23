require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const opportunityRoutes = require("./routes/opportunityRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message:
      "CEOFactory CRM API Running",
  });
});

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/opportunities",
  opportunityRoutes
);

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});











// id==6a3900adc75e450f2626bc32 
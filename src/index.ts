const express = require("express");
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";
import authRoutes from "./routes/authRoutes";
import type { Request, Response } from "express";

export const app = express();
const port = 3000;

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

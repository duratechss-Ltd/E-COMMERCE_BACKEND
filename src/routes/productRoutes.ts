import { Router } from "express";

const router = Router();
router.get("/", (req, res) => {
  res.json("Get products");
});
router.get("/:id", (req, res) => {
  res.json("Get a single product");
});
router.post("/", (req, res) => {
  res.json("Create a  product");
});
router.put("/:id", (req, res) => {
  res.json("update a products");
});
router.delete("/:id", (req, res) => {
  res.json("Delete a  product");
});
router.patch("/:id", (req, res) => {
  res.json("Partially update a product");
});

export default router;

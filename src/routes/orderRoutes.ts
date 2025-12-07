import { Router } from "express";

const router = Router();
router.get("/", (req, res) => {
  res.json("Get Orders");
  ``;
});
router.get("/:id", (req, res) => {
  res.json("Get a single Order");
});
router.post("/", (req, res) => {
  res.json("Create an  Order");
});
router.put("/:id", (req, res) => {
  res.json("update an Order");
});
router.delete("/:id", (req, res) => {
  res.json("Delete an Order");
});
router.patch("/:id", (req, res) => {
  res.json("Partially update an Order");
});

export default router;

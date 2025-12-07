import { Router } from "express";

const router = Router();
router.post("/signup", (req, res) => {
  res.json("User created successfully");
});
router.post("/login", (req, res) => {
  res.json("User logged in successfully");
});
router.post("/logout", (req, res) => {
  res.json("User logged out successfully");
});

export default router;

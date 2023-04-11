import { Router } from "express";

const router: Router = Router();

router.get("/posts", (req, res) => {
  res.send("Get all posts");
});

router.get("/posts/:id", (req, res) => {
  res.send("Get a post");
});

router.post("/posts", (req, res) => {
  res.send("Create a post");
});

router.put("/posts/:id", (req, res) => {
  res.send("Update a post");
});

router.delete("/posts/:id", (req, res) => {
  res.send("Delete a post");
});

export default router;

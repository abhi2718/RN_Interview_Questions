import fetch from "node-fetch";
import express from "express";
const port = process.env.PORT || 8000,
  app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the RN server!",
  });
});

app.get("/api/posts", async (req, res) => {
  const query = req.query;
  const limit = query?.limit ? query.limit : 10;
  const page = query?.page ? query.page : 1;
  const url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}&_limit=${limit}`;
  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json({
    data,
    success: true,
  });
});

app.listen(port, () => {
  console.log(`RN server listening on ${port}`);
});

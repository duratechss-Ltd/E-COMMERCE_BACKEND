const express = require("express");

export const app = express();
const port = 3000;
app.get("/", (req: Request, res: Response) => {
  console.log("hello world");
});
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

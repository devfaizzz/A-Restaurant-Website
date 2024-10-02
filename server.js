import app from "./app.js";
import connectToDb from "./db.js";

const Port = 5500

app.listen(Port, async () => {
    await connectToDb();
    console.log(`Server is listening on port:${Port}`);
  });
  
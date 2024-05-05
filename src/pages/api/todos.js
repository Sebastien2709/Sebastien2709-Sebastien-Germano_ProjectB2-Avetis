import { createRoute } from "@/src/api/createRoute";
import { TodoModel } from "@/src/db/models/TodoModel";

const handle = createRoute(async (req, res) => {
  // Create => POST
  if (req.method === "POST") {
    // CREATE

    const newTodo = new TodoModel(req.body);

    await newTodo.save();
    res.send(newTodo);

    return;
  }

  // Read => GET (collection)
  if (req.method === "GET") {
    // READ
    const todos = await TodoModel.find();

    res.send(todos);

    return;
  }

  res.status(404).send({ error: "Not found" });
});

export default handle;

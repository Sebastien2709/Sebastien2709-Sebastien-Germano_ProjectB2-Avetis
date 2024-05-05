import { createRoute } from "@/src/api/createRoute";
import { TodoModel } from "@/src/db/models/TodoModel";

const handle = createRoute(async (req, res) => {
  const { todoId } = req.query;
  const todo = await TodoModel.findById(todoId);

  if (!todo) {
    res.status(404).send({ error: "Not found" });

    return;
  }

  // Read => GET (item)
  if (req.method === "GET") {
    res.send(todo);

    return;
  }

  // Update => PATCH
  if (req.method === "PATCH") {
    const { TypeDeLieu, NomDuLieu, Adresse, CodePostal, Pays } = req.body;

    todo.TypeDeLieu = TypeDeLieu || todo.TypeDeLieu;
    todo.NomDuLieu = NomDuLieu || todo.NomDuLieu;
    todo.Adresse = Adresse || todo.Adresse;
    todo.CodePostal = CodePostal || todo.CodePostal;
    todo.Pays = Pays || todo.Pays;

    await todo.save();

    res.send(todo);

    return;
  }

  // Delete => DELETE
  if (req.method === "DELETE") {
    await TodoModel.deleteOne({ _id: todoId });

    res.send(todo);

    return;
  }

  res.status(404).send({ error: "Not found" });
});

export default handle;

import { localSchema } from "@/src/db/schemas/localschema";
import mongoose from "mongoose";

export const TodoModel =
  mongoose.models.Todo || mongoose.model("Todo", localSchema);

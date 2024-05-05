import { Button } from "@/src/components/Button";
import { Form } from "@/src/components/Form";
import { FormField } from "@/src/components/FormField";
import { Title } from "@/src/components/Title";
import axios from "axios";
import { Formik } from "formik";
import { useRouter } from "next/router";
import * as yup from "yup";

export const getServerSideProps = async ({ params: { todoId } }) => {
  const { data: todo } = await axios(
    `http://localhost:3000/api/todos/${todoId}`
  );

  return {
    props: {
      todo,
    },
  };
};
const validationSchema = yup.object({
  TypeDeLieu: yup.string().min(1).required().label("Type de lieu"),
  NomDuLieu: yup.string().min(1).required().label("Nom de lieu"),
  Adresse: yup.string().min(1).required().label("adresse"),
  Ville: yup.string().min(1).required().label("Nom de la ville"),
  CodePostal: yup.string().min(1).required().label("Code postal"),
  Pays: yup.string().min(1).required().label("Pays"),
});
const TodoEditPage = ({ todo }) => {
  const router = useRouter();
  const initialValues = todo;
  const handleSubmit = async (data) => {
    await axios.patch(`/api/todos/${todo._id}`, data);

    router.push(`/todos/${todo._id}/details`);
  };

  if (!todo) {
    return "404 - Not found";
  }

  return (
    <>
      <Title>Changer les informations de {todo._id}</Title>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form>
          <FormField name="TypeDeLieu" placeholder="Entrer le type de lieu" />
          <FormField name="NomDuLieu" placeholder="Entrer le nom du lieu" />
          <FormField name="Adresse" placeholder="Entrer l'adresse" />
          <FormField name="Ville" placeholder="Entrer le nom de la ville" />
          <FormField name="CodePostal" placeholder="Entrer le code postal" />
          <FormField name="Pays" placeholder="Entrer le pays" />
          <Button type="submit">SUBMIT</Button>
        </Form>
      </Formik>
    </>
  );
};

export default TodoEditPage;

import { Button } from "@/src/components/Button";
import { Form } from "@/src/components/Form";
import { FormField } from "@/src/components/FormField";
import { Title } from "@/src/components/Title";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";

const initialValues = {
  TypeDeLieu: "",

  typedeCuisine: "",
  nombreEtoiles: "",
  prixMoyenRestaurant: "",

  courantArtistique: "",
  typeArt: "",
  sculpture: "",
  peinture: "",
  gratuitOuPayantMusee: "",
  prixArt: "",

  typeDeBar: "",
  prixMoyenBar: "",

  typeDeParc: "",
  parcfloral: "",
  parcforestier: "",
  publicOuPrive: "",
  public: "",
  prive: "",
  gratuitOuPayantParc: "",
  prixParc: "",

  gratuit: "",
  payant: "",

  NomDuLieu: "",
  Adresse: "",
  Ville: "",
  CodePostal: "",
  Pays: "",
};

const validationSchema = yup.object({
  TypeDeLieu: yup.string().min(1).required().label("Type de lieu"),
  NomDuLieu: yup.string().min(1).required().label("Nom de lieu"),
  Adresse: yup.string().min(1).required().label("adresse"),
  Ville: yup.string().min(1).required().label("Nom de la ville"),
  CodePostal: yup.string().min(1).required().label("Code postal"),
  Pays: yup.string().min(1).required().label("Pays"),
});

const TodoCreatePage = () => {
  const handleSubmit = async (values, { resetForm }) => {
    await axios.post("/api/todos", values);
    resetForm();
  };

  return (
    <>
      <Title>Ajouter votre entreprise !</Title>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form>
            <FormField name="TypeDeLieu" as="select">
              <option value="" disabled selected hidden>
                Selectionner le type de lieu
              </option>
              <option value="restaurant">Restaurant</option>
              <option value="musee">Musée</option>
              <option value="bar">Bar</option>
              <option value="parc">Parc</option>
            </FormField>

            {props.values.TypeDeLieu === "restaurant" && (
              <>
                <FormField name="typeDeCuisine" placeholder="Type de cuisine" />
                <FormField
                  name="nombreEtoiles"
                  as="Select"
                  placeholder="Nombre d'Etoiles"
                >
                  <option value="" disabled selected hidden>
                    Nombre d'Etoiles
                  </option>
                  <option value="1">1 étoile</option>
                  <option value="2">2 étoiles</option>
                  <option value="3">3 étoiles</option>
                </FormField>
                <FormField name="prixMoyenRestaurant" as="select">
                  <option value="" disabled selected hidden>
                    Prix moyen
                  </option>
                  <option value="1">1 €</option>
                  <option value="2">2 €</option>
                  <option value="3">3 €</option>
                  <option value="4">4 €</option>
                  <option value="5">5 €</option>
                </FormField>
              </>
            )}

            {props.values.TypeDeLieu === "musee" && (
              <>
                <FormField
                  name="courantArtistique"
                  placeholder="Courant Artistique"
                />
                <FormField name="typeArt" as="select" placeholder="Type d'art">
                  <option value="" disabled selected hidden>
                    Type D'art
                  </option>
                  <option value="sculpture">Sculpture</option>
                  <option value="peinture">Peinture</option>
                </FormField>
                <FormField name="gratuitOuPayantMusee" as="select">
                  <option value="" disabled selected hidden>
                    Gratuit ou Payant ?
                  </option>
                  <option value="gratuit">Gratuit</option>
                  <option value="payant">Payant</option>
                </FormField>
                {props.values.gratuitOuPayantMusee == "payant" && (
                  <FormField name="prixArt" as="select" placeholder="Prix">
                    <option value="" disabled selected hidden>
                      Prix
                    </option>
                    <option value="1">1 €</option>
                    <option value="2">2 €</option>
                    <option value="3">3 €</option>
                    <option value="4">4 €</option>
                    <option value="5">5 €</option>
                  </FormField>
                )}
              </>
            )}

            {props.values.TypeDeLieu === "bar" && (
              <>
                <FormField name="typeDeBar" as="select">
                  <option value="" disabled selected hidden>
                    Type de Bar
                  </option>
                  <option value="BarVin">Bar à Vin</option>
                  <option value="Barcocktail">Bar à cocktail</option>
                  <option value="Pub">Pub</option>
                </FormField>
                <FormField name="prixMoyenBar" as="select">
                  <option value="" disabled selected hidden>
                    Prix moyen
                  </option>
                  <option value="1">1 €</option>
                  <option value="2">2 €</option>
                  <option value="3">3 €</option>
                  <option value="4">4 €</option>
                  <option value="5">5 €</option>
                </FormField>
              </>
            )}
            {props.values.TypeDeLieu === "parc" && (
              <>
                <FormField name="typeDeParc" as="select">
                  <option value="" disabled selected hidden>
                    Type de Parc
                  </option>
                  <option value="parcfloral">Parc floral</option>
                  <option value="parcforestier">Parc forestier</option>
                </FormField>
                <FormField name="publicOuPrive" as="select">
                  <option value="" disabled selected hidden>
                    Public ou Privé ?
                  </option>
                  <option value="public">Public</option>
                  <option value="prive">Privé</option>
                </FormField>
                <FormField name="gratuitOuPayantParc" as="select">
                  <option value="" disabled selected hidden>
                    Gratuit ou payant ?
                  </option>
                  <option value="gratuit">Gratuit</option>
                  <option value="payant">Payant</option>
                </FormField>
                {props.values.gratuitOuPayantParc == "payant" && (
                  <FormField name="prixParc" as="select" placeholder="Prix">
                    <option value="">Prix</option>
                    <option value="1">1 €</option>
                    <option value="2">2 €</option>
                    <option value="3">3 €</option>
                    <option value="4">4 €</option>
                    <option value="5">5 €</option>
                  </FormField>
                )}
              </>
            )}

            <FormField name="NomDuLieu" placeholder="Entrer le nom du lieu" />
            <FormField name="Adresse" placeholder="Entrer l'adresse" />
            <FormField name="Ville" placeholder="Entrer le nom de la ville" />
            <FormField name="CodePostal" placeholder="Entrer le code postal" />
            <FormField name="Pays" placeholder="Entrer le pays" />
            <Button type="submit">SUBMIT</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default TodoCreatePage;

import clsx from "clsx";
import { Form as FormikForm } from "formik";

export const Form = ({ className, ...otherProps }) => (
  <FormikForm
    noValidate
    className={clsx(
      "flex flex-col gap-4",
      "p-6", // Ajout de padding
      "bg-white", // Arrière-plan blanc
      "rounded-lg", // Coins arrondis
      "shadow-md", // Ombre douce
      className
    )}
    {...otherProps}
  />
);

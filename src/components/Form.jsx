import clsx from "clsx";
import { Form as FormikForm } from "formik";

export const Form = ({ className, ...otherProps }) => (
  <FormikForm
    noValidate
    className={clsx(
      "flex flex-col gap-4",
      "p-6", 
      "bg-white", 
      "rounded-lg", 
      "shadow-md", 
      className
    )}
    {...otherProps}
  />
);

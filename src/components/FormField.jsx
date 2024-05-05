import clsx from "clsx";
import { ErrorMessage, Field } from "formik";

export const FormField = ({ className, name, ...otherProps }) => (
  <div className="flex flex-col">
    {" "}
    {}
    <Field
      name={name}
      className={clsx(
        "border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",
        className
      )}
      {...otherProps}
    />
    <ErrorMessage
      name={name}
      component="div"
      className="text-sm text-red-500 mt-1"
    />
  </div>
);

import clsx from "clsx";

export const Button = ({ className, ...otherProps }) => (
  <button
    className={clsx(
      "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md",
      className
    )}
    {...otherProps}
  />
);

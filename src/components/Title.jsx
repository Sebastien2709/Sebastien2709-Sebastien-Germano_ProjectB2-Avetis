import clsx from "clsx";

export const Title = ({ className, ...otherProps }) => (
  <h1
    className={clsx(
      "text-3xl md:text-4xl font-extrabold text-gray-900 mb-6",
      className
    )}
    {...otherProps}
  />
);

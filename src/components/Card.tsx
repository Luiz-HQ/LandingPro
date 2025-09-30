type CardRootProps = React.HTMLAttributes<HTMLDivElement>;
type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
type CardBodyProps = React.HTMLAttributes<HTMLDivElement>;
type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

const CardRoot = ({ className, children, ...props }: CardRootProps) => {
  const baseClasses =
    "rounded-md border border-gray-200 p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col";
  return (
    <div className={`${baseClasses} ${className || ""}`} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ className, children, ...props }: CardHeaderProps) => {
  return (
    <div className={`mb-4 ${className || ""}`} {...props}>
      {children}
    </div>
  );
};

const CardBody = ({ className, children, ...props }: CardBodyProps) => {
  return (
    <div className={`flex-grow ${className || ""}`} {...props}>
      {children}
    </div>
  );
};

const CardFooter = ({ className, children, ...props }: CardFooterProps) => {
  return (
    <div className={`mt-auto pt-4 ${className || ""}`} {...props}>
      {children}
    </div>
  );
};

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
};

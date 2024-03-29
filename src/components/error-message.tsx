interface ErrorMessageProps {
  message?: string;
  className?: string;
}

export const ErrorMessage = ({ message, className }: ErrorMessageProps) => {
  return (
    <div
      className={`bg-red-100 border border-red-400 rounded-md px-4 py-3 text-red-700 ${className}`}
    >
      <span className="font-bold">Error: </span>
      <span>{message}</span>
    </div>
  );
};

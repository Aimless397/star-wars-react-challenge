export const LoadingCell = () => {
  return (
    <div className="loadingContainer">
      <div className="spinner-border spinner-border-sm" />
      <span data-testid="loadingSpan" className="loadingSpan">
        Loading
      </span>
    </div>
  );
};

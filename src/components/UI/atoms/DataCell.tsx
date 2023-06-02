interface Props {
  text: string;
  value?: string;
}

export const DataCell = ({ text, value }: Props) => {
  return (
    <div className="dataCellContainer">
      <span data-testid="dataCellCategoryText" className="dataCellCategoryText">
        {text}
      </span>
      {value && <span className="dataCellValueText">{value}</span>}
    </div>
  );
};

interface Props {
  text: string;
}

export const SectionHeader = ({ text }: Props) => {
  return (
    <div className="sectionContainer">
      <span data-testid="sectionHeader" className="sectionHeader">
        {text}
      </span>
    </div>
  );
};

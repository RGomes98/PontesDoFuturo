export const Statement = ({ statement, children }: { statement: string; children: React.ReactNode }) => {
  return (
    <ul>
      <li>
        <p>{statement}</p>
        {children}
      </li>
    </ul>
  );
};

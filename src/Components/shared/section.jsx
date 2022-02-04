const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className="Section">{title}</h2>
      {children}
    </section>
  );
};

export default Section;

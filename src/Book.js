const Book = (props) => {
  const { img, Title, author, index } = props;

  // console.log(props);

  return (
    <article className="book">
      <img src={img} alt={Title} />

      <h2>{Title}</h2>

      <span className="numbers">{`#${index + 1}`}</span>

      <h4>{author}</h4>
    </article>
  );
};

export default Book;

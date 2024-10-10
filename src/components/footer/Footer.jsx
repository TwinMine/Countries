import "./footer.css"

const Footer = () => {
  return (
    <div>
      <p>
        Data dynamically fetched from{" "}
        <a href="https://pokeapi.co" rel="noreferrer" target="_blank">
          PokeAPI
        </a>
        , accessed on {new Date().toDateString()}.
      </p>
    </div>
  );
};

export default Footer;

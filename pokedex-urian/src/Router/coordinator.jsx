export const goToPokemonListPage = (navigate) => {
    navigate("/");
  };
  
  export const goToPokedexPage = (navigate) => {
    navigate("/pokedex");
  };
  
  export const goToDetailsPage = (navigate, id) => {
    navigate(`/details/${id}`);
  };
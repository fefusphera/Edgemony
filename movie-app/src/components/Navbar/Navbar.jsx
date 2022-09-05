const Navbar = ({ searchMovie, value, name }) => {
  return (
    <div className="searchMovieform">
      <input
        type="search"
        placeholder="Search"
        onSubmit={searchMovie}
        name="query"
        // value={query}
      />
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  //   const notifyError = () =>
  //     toast.error("Something went wrong!", {
  //       duration: 4000,
  //       position: "top-right",
  //     });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("No results found.");
      return;
    }
    onSearch(query);
    setQuery("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Toaster />
        <input
          type="text"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;

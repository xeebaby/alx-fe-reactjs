import { useRecipeStore } from "./recipeStore";

function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterRecipes(); // optional immediate filtering
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }}
    />
  );
}

export default SearchBar;

import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

interface SearchBarProps {
  setSearch: (value: string) => void;
}

const SearchBar = ({ setSearch }: SearchBarProps) => {
  const [input, setInput] = useState("");
  const debouncedValue = useDebounce(input, 500);

  // Update parent search state when debounce value changes
  if (debouncedValue !== input) {
    setSearch(debouncedValue);
  }

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      style={{ width: "80%", marginBottom: "10px" }}
    />
  );
};

export default SearchBar;

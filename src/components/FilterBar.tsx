interface FilterBarProps {
  setFilter: (value: "All" | "Pending" | "Done") => void;
  setSort: (value: "date" | "name") => void;
}

const FilterBar = ({ setFilter, setSort }: FilterBarProps) => {
  return (
    <div style={{ marginBottom: "15px", display: "flex", gap: "10px" }}>
      {/* Status Filter */}
      <select onChange={(e) => setFilter(e.target.value as "All" | "Pending" | "Done")}>
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Done">Done</option>
      </select>

      {/* Sort Options */}
      <select onChange={(e) => setSort(e.target.value as "date" | "name")}>
        <option value="date">Sort by Due Date</option>
        <option value="name">Sort by Name</option>
      </select>
    </div>
  );
};

export default FilterBar;

export const FilterTodos = ({ setFilter }) => {
//   let handleFilter = (e) => setFilter(e.target.value);
  return (
    <>
      <section style={{ alignSelf: "start" }}>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </section>
    </>
  );
};

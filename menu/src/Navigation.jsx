export function Navigation(props) {
  return (
    <div className="navigation">
      <input
        type="radio"
        name="page-option"
        id="page-0"
        defaultChecked
        onClick={() => props.setSelectedPage(0)}
      />
      <label htmlFor="page-0">Snacks</label>

      <input
        type="radio"
        name="page-option"
        id="page-1"
        onClick={() => props.setSelectedPage(1)}
      />
      <label htmlFor="page-1"> Dessert</label>

      <input
        type="radio"
        name="page-option"
        id="page-2"
        onClick={() => props.setSelectedPage(2)}
      />
      <label htmlFor="page-2">Drinks</label>
    </div>
  );
}

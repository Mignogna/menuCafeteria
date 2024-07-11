export function MenuItem(props) {
  return (
    <div className="menu-item-container">
      <div>
        <h2>{props.nome}</h2>
        <p>{props.descricao}</p>
        <p>{props.preco}</p>
      </div>
      <img src={props.imagem} alt="" />
    </div>
  );
}

import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "Tehran", "Tonekabon", "Ramsar", "Vancouver"];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1> list</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item active"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

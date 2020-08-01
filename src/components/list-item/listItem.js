import React from "react";

const ListItems = (props) => {
  let doneTask = "toDo__text";
  let editHide = "hide";

  return (
    <ul className="to-do">
      {props.data.map((item, id) => (
        <li key={item.id} className="toDo__list">
          <h3 className="title">Задача {id + 1}</h3>
          <p
            className={item.completed ? (doneTask += " status") : "toDo__text"}
          >
            {item.title}
          </p>
          {/* <input className={this.state.edit} defaultValue={item.text}></input> */}
          <button onClick={() => props.del(item.id)} className="btn btn-delete">
            X
          </button>

          <button onClick={() => props.done(item.id)} className="btn btn-done">
            Done
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;

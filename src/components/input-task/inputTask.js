import React, { useState } from "react";

const InputTask = (props) => {
  return (
    <div className="input-form">
      <input
        className="task-input"
        placeholder="Ваша задача"
        required
        type="text"
        onChange={props.handleChange}
        defaultValue=""
        // onFocus={this.clear}
      ></input>
      <input
        className="btn submit-btn"
        type="submit"
        value="Добавить"
        onClick={() => props.onAdd(props.text)}
      ></input>
    </div>
  );
};

export default InputTask;

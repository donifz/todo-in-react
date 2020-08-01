import React from "react";
import "./App.css";
import Header from "../header/header";
import InputTask from "../input-task/inputTask";
import ListItem from "../list-item/listItem";
import * as axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { text: "my name is Loan", id: 1, done: false },
        { text: "Today i shoul be Raon", id: 2, done: true },
      ],
      inputText: "",
      axe: [],
    };
    this.maxId = 6;
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.status = this.status.bind(this);
  }
  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }

  addItem(body) {
    if (!body) return;
    const newTask = {
      title: body,
      id: this.maxId++,
      completed: false,
    };

    console.log(this.state.axe);

    this.setState(({ data }) => {
      let newArray = [...data, newTask];

      return {
        data: newArray,
      };
    });

    const post = axios
      .post("https://jsonplaceholder.typicode.com/todos?_limit=5", newTask)
      .then((response) => {});
  }

  deleteTask(id) {
    const { data } = this.state;
    const founId = data.findIndex((item) => {
      return item.id == id;
    });
    const deletedData = [...data.slice(0, founId), ...data.slice(founId + 1)];
    console.log(founId);
    this.setState(({ data }) => {
      return {
        data: deletedData,
      };
    });
  }

  status(id) {
    const { data } = this.state;
    const founId = data.find((item) => {
      return item.id == id;
    });
    const indexId = data.findIndex((item) => {
      return item.id == id;
    });

    // founId.done = !founId.done;
    let neWobj = { ...founId, completed: !founId["completed"] };
    let newArray = [
      ...data.slice(0, indexId),
      neWobj,
      ...data.slice(indexId + 1),
    ];

    this.setState(({ data }) => {
      return {
        data: newArray,
      };
    });
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <InputTask
            onAdd={this.addItem}
            handleChange={this.handleChange}
            text={this.state.inputText}
          />
          <ListItem
            data={this.state.data}
            del={this.deleteTask}
            done={this.status}
          />
        </div>
      </div>
    );
  }
  componentDidMount() {
    const get = axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => {
        this.setState({ data: response.data });
        this.setState({ axe: response });
      });
  }
}

export default App;

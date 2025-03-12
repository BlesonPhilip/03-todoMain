import Modal from "./components/Modal/modal";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [singleTodo, setSingleTodo] = useState({
    title: "",
    description: "",
    time: "",
    priority: "Low",
  });

  // Handle changes in the input fields
  const onTitleChange = (title) => setSingleTodo({ ...singleTodo, title });
  const onDescriptionChange = (description) =>
    setSingleTodo({ ...singleTodo, description });
  const onTimeChange = (time) => setSingleTodo({ ...singleTodo, time });
  const onPriorityChange = (priority) =>
    setSingleTodo({ ...singleTodo, priority });

  // Function to handle adding or updating a todo
  const onAddTodo = () => {
    if (editIndex !== null) {
      // Editing an existing todo
      const updatedTodos = [...todo];
      updatedTodos[editIndex] = singleTodo;
      setTodo(updatedTodos);
      setEditIndex(null); // Reset edit index after update
    } else {
      // Adding a new todo
      setTodo([...todo, singleTodo]);
    }

    setShowModal(false);
    setSingleTodo({ title: "", description: "", time: "", priority: "Low" });
  };

  // Function to delete a todo
  const Del = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  // Function to open modal for editing a todo
  const Edit = (index) => {
    setSingleTodo(todo[index]); // Load selected todo into modal
    setEditIndex(index); // Track index for editing
    setShowModal(true); // Show modal
  };

  return (
    <div className="todo-container">
      <div className="banner">
        <img src="/c.jpg" alt="banner" />
        <div className="todo-maker-container">
          <div className="todo-maker" onClick={() => setShowModal(true)}>
            <p>Create Your Todo</p>
          </div>
        </div>
      </div>

      <div className="todo-list">
        {todo.map((item, index) => (
          <div className="todo-list-item" key={index}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <div className="time-priority">
              <p>{item.time}</p>
              <p>{item.priority}</p>
            </div>
            <div className="b">
              <button className="editB" onClick={() => Edit(index)}>
                Edit
              </button>
              <button className="delB" onClick={() => Del(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <Modal
          show={showModal}
          setShow={setShowModal}
          onTitleChange={onTitleChange}
          onDescriptionChange={onDescriptionChange}
          onTimeChange={onTimeChange}
          onPriorityChange={onPriorityChange}
          onAdd={onAddTodo}
          data={singleTodo}
        />
      )}
    </div>
  );
};

export default App;

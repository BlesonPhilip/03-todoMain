import './modal.css';

const Modal = ({
  show,
  setShow,
  onTitleChange,
  onDescriptionChange,
  onPriorityChange,
  onTimeChange,
  onAdd,
  data,
}) => {
  const onInputChange = e => {
    onTitleChange(e.target.value);
  };

  const onDescChange = e => {
    onDescriptionChange(e.target.value);
  };
  const onTimChange = e => {
    onTimeChange(e.target.value);
  };
  const onPrioChange = e => {
    onPriorityChange(e.target.value);
  };

  return (
    <div style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-background" onClick={() => setShow(false)}></div>
      <div className="modal-container">
        <div className="modal">
          <label>Title</label>
          <input
            value={data.title}
            className="title"
            type="text"
            onChange={onInputChange}
          />
          <label>Description</label>
          <textarea
            value={data.description}
            className="description"
            onChange={onDescChange}
            rows={6}
          ></textarea>

          <input
            type="time"
            className="time"
            onChange={onTimChange}
            value={data.time}
          />
          <select
            value={data.priority}
            className="priority"
            onChange={onPrioChange}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <button onClick={onAdd} className="btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

const initialItems = [
  { id: 1, description: "Study", time: 12, done: false },
  { id: 2, description: "Exercise", time: 14, done: false },
  { id: 3, description: "Meditate", time: 14, done: true },
];

export default App;
function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <Lists />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>⌛Tick-Tick⌛</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>
        <i>With discipline, you can achieve anything. </i>🥷
      </h3>
    </div>
  );
}

function Lists() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((task) => (
          <Task task={task} />
        ))}
      </ul>
    </div>
  );
}

function Task({ task }) {
  return (
    <li>
      <span style={task.done ? { textDecoration: "line-through" } : {}}>
        {task.description} by{task.time}
      </span>
      <span>✖️</span>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have completed X tasks</em>
    </footer>
  );
}

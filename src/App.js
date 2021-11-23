import './App.css';
import Modal from './Modal/Modal';
import Backdrop from './Backdrop/Backdrop';
import List from './List/List';

function App() {
  return (
    <div className="App">
      <h1>React Animations</h1>
      <Modal />
      <Backdrop />
      <button className="Button">Open Modal</button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;

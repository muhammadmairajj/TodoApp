import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTodo from './components/AddTodo';
import Header from './components/Header';

function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route exact path="/" element={ <AddTodo /> } />
      </Routes>
    </Router>
  );
}

export default App;

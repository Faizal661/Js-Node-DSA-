import "./App.css";
import Layout from "./pages/Layout";
import Parent from "./pages/childToParentDataPass/Parent";
import Todo from "./pages/Todo";
import Timer from "./pages/useEffect";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="useEffect.example" element={<Timer />} />
          <Route path="To-do" element={<Todo />} />
          <Route path="childToParent" element={<Parent/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

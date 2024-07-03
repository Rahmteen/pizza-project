import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<>Hello World!</>} />
    </Routes>
  );
};

export default App;

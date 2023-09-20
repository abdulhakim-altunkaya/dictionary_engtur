import AddSentences from "./components/AddSentences";
import SearchWord from "./components/SearchWord";
import { BrowserRouter as Router, Route, Routes } from  "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={ <AddSentences /> } />
          <Route path="/add" element={ <AddSentences /> } />
          <Route path="/search" element={ <SearchWord /> } />
        </Routes>

      </Router>
    </div>
  );
}

export default App;

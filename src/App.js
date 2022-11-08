// Routes Config
import { BrowserRouter as Container, Routes, Route } from "react-router-dom";

//Components
import { Navbar } from "./components/Navbar";
import { Fotter } from './components/Fotter'

// Pages 
import { About } from "./pages/About";
import { Books } from "./pages/Books";
import { Home } from "./pages/Home";
import { NotFound} from "./pages/NotFound";

// styles
import './sass/styles.sass'


function App() {
  return (
     <div className="content">
      <Container>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/books" element={<Books/>} />
        </Routes>
        <Fotter/>
      </Container>
      </div>

  );
}

export default App;

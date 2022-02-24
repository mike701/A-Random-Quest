import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './screens/Home/Home';
function App() {

  
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

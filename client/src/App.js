import './App.css';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './screens/Home/Home';
import Quests from './screens/Quests/Quests';
import QuestCreate from './screens/Quests/QuestCreate';
import QuestDetails from './screens/Quests/QuestDetails';
import QuestsContainer from './screens/Quests/QuestsContainer';
function App() {

  
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path='/Quests/*' element={<QuestsContainer></QuestsContainer>} />
          {/* <Route path="/Quests/:id/comments" element={<QuestCreate></QuestCreate>} /> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

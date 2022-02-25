import './App.css';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './screens/Home/Home';
// import Quests from './screens/Quests/Quests';
// import QuestCreate from './screens/Quests/QuestCreate';
// import QuestDetails from './screens/Quests/QuestDetails';
import QuestsContainer from './screens/Quests/QuestsContainer';
import { useState } from 'react';
import Login from './components/Forms/Login';
function App() {
const [currentUser,setCurrentUser]=useState();
  
  return (
    <div className="App">
      <Layout currentUser={currentUser} setCurrentUser={setCurrentUser}>
        <Routes>
          <Route path="/" element={<Home currentUser={currentUser} setCurrentUser={setCurrentUser}></Home>} />
          <Route path='/Quests/*' element={<QuestsContainer currentUser={currentUser} setCurrentUser={setCurrentUser}></QuestsContainer>} />
          {/* <Route path="/Quests/:id/comments" element={<QuestCreate></QuestCreate>} /> */}
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser}></Login>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

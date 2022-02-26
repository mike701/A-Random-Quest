import './App.css';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './screens/Home/Home';
// import Quests from './screens/Quests/Quests';
// import QuestCreate from './screens/Quests/QuestCreate';
// import QuestDetails from './screens/Quests/QuestDetails';
import QuestsContainer from './screens/Quests/QuestsContainer';
import { useEffect, useState } from 'react';
import Login from './components/Forms/Login';
import { loginUser, verifyUser } from './Services/users';
import Info from './screens/Users/Info';
import Signup from './screens/Users/Signup';

const loginData = {
  username: "",
  password:""
}

function App() {

const [currentUser,setCurrentUser]=useState();
const [input, setInput] = useState(loginData)
const [logging,setLogging]=useState(false);
  useEffect(() => {
    if (input !== loginData) {
      const logIn = async () => {
        const logged = await loginUser(input);
        setCurrentUser(logged);
        console.log(logged);
      }
      logIn()
    }
  },[logging])

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser();
      if (user!==false) setCurrentUser(user)
    }
    getUser()
  }, [])

  return (
    <div className="App">
          <Layout currentUser={currentUser} setCurrentUser={setCurrentUser}>
        <Routes>
          <Route path="/" element={<Home currentUser={currentUser} ></Home>} />
          <Route path='/Quests/*' element={<QuestsContainer currentUser={currentUser} setCurrentUser={setCurrentUser}></QuestsContainer>} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} currentUser={currentUser} setInput={setInput} input={input} setLogging={setLogging}></Login>} />
          <Route path="/userInfo" element={<Info currentUser={currentUser} />} />
          <Route path="/signup" element={<Signup currentUser={currentUser}></Signup>}/>
        </Routes>
      </Layout>
      <footer style={{position:"absolute",bottom:"0", height:"10vh",width:"100vw", backgroundColor:"black", color:"white"}}>Footer</footer>
    </div>
  );
}

export default App;

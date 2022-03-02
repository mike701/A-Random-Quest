import './App.css';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './screens/Home/Home';
import QuestsContainer from './screens/Quests/QuestsContainer';
import { useEffect, useState } from 'react';
import Login from './components/Forms/Login';
import { loginUser, verifyUser } from './Services/users';
import Info from './screens/Users/Info';
import Signup from './screens/Users/Signup';
import Environment from './screens/Environment';
import { Suspense } from 'react'
import Footer from './components/Footer';

const loginData = {
  username: "",
  password:""
}

function App() {
  const [currentUser,setCurrentUser]=useState();
  const [input, setInput] = useState(loginData)
  const [logging, setLogging] = useState(false);
  // const [threeEnv, setThreeEnv]=useState(false);

  useEffect(() => {
    if (input !== loginData) {
      const logIn = async () => {
        const logged = await loginUser(input);
        setCurrentUser(logged);
      }
      logIn()
    }
  },[logging,input])

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser();
      if (user!==false) setCurrentUser(user)
    }
    getUser()
  }, [])

  return (
    <div className="App">
         <Layout currentUser={currentUser} setCurrentUser={setCurrentUser} style={{overflowY:"scroll"}}>
        <Routes>
          <Route path="/" element={<Home currentUser={currentUser} ></Home>} />
          <Route path='/Quests/*' element={<QuestsContainer currentUser={currentUser} setCurrentUser={setCurrentUser}></QuestsContainer>} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} currentUser={currentUser} setInput={setInput} input={input} setLogging={setLogging}></Login>} />
          <Route path="/userInfo" element={<Info currentUser={currentUser} />} />
          <Route path="/signup" element={<Signup currentUser={currentUser}></Signup>} />
          <Route path="/three" element={<>
          <div style={{position: "absolute",top: "50%",left: "35%",width: "10px",height: "10px",borderRadius: "50%",transform: "translate3d(-50%, -50%, 0)",border: "2px solid black",zIndex:"2"}}/>
          <Suspense fallback={<h1>Hello</h1>} style={{ position: "absolute", top: "0vh" }}>
          <Environment></Environment>
          </Suspense>
          </>
          } />
          {/* <Route path="/environment" element={<h1>Hello</h1>}/> */}
        </Routes>
      </Layout>
      <div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

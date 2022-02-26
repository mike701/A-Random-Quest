import React from 'react'
import FormCreateUser from './FormCreateUser';

export default function FormCreateComment() {
//not needed
const modelQuest = {
  user_id: props?.currentUser?.id,
  title: "",
  content: "",
  category:""
}
let nav=useNavigate();
const [posting, setPosting]=useState(modelQuest);

const handleChange = (e) => {
  e.preventDefault();
  const {name, value}=e.target
    setPosting((prevPost) => ({
    ...prevPost,
    [name]: value
  }))
}

const handleSubmit = async (e) => {
  e.preventDefault();
  if (window.localStorage.getItem("authToken") != null) {
    
    props.setAdded((prevAdd)=>!prevAdd);
    nav("/Quests");
  } else {
    alert("You need to sign in!");
    nav("/login");
  }
}


return (
  <form onSubmit={(e) => { handleSubmit(e) }}>
    <input name="title" value={posting.title} onChange={(e) => { handleChange(e) }}></input>
    <input name="content" value={posting.content} onChange={(e) => { handleChange(e) }}></input>
    <input name="category" value={posting.category} onChange={(e) => { handleChange(e) }}></input>
    <button>Submit</button>
  </form>
)
}

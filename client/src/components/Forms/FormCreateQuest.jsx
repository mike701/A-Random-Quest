import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../../Services/posts'
/***
 *   create_table "posts", force: :cascade do |t|
  t.bigint "user_id", null: false
  t.string "title"
  t.text "content"
  t.string "category"
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
  t.index ["user_id"], name: "index_posts_on_user_id"
end
 */

export default function FormCreateQuest(props) {
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
      await createPost(posting);
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

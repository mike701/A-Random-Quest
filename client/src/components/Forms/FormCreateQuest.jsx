import React from 'react'
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

export default function FormCreateQuest() {
  const modelQuest = {
    user_id: 1,
    title: "",
    content: "",
    category:""
  }

  return (
    <form>
      <input name="content" value={content}></input>
    </form>
  )
}

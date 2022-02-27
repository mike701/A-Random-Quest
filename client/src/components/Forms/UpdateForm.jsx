import React from 'react'

export function UpdateForm(props) {
  const { post } = props;
  console.log(Object.keys(post))
  return (
    <form>
      <input></input>
      <button>Update</button>
    </form>
  )
}

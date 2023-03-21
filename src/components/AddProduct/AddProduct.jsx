import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePosts } from '../../contexts/postsContext'

const AddProduct = () => {
    const navigate = useNavigate()
    const {createdPost, posts} = usePosts()
    const [desc, setDesc] = useState('')
    const [title, setTitle] = useState('')
    const [media, setMedia] = useState('')

    function handleSave() {
        let newProduct = {
            "title": title,
            "media": media,
            "descriptions": desc
        }
        createdPost(newProduct, navigate)
      }
  return (
    <div>
       <h2>Add Product</h2>
       <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
       <input type="text" placeholder='Description' value={desc} onChange={e => setDesc(e.target.value)} />
       <input type="text" placeholder='Media' value={media} onChange={e => setMedia(e.target.value)} />
       <button onClick={handleSave} >Save Product</button>
    </div>
  )
}

export default AddProduct
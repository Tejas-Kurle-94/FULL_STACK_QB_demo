import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import CreatePost from './pages/CreatePost/CreatePost'
import { Routes, Route } from 'react-router-dom'
import SinglePost from './pages/singlePost/SinglePost'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/getsinglepost/:postID" element={<SinglePost />} />
        <Route path="/updatepost/:postID" element={<CreatePost />} />
      </Routes>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup'
import Signin from './components/Signin'
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import Graphic from './components/Graphic';
import Seo from './components/Seo';
import Webdesign from './components/Webdesign';
import BlogCraft from './components/BlogCraft';
import User from './pages/User';
import BlogGen from './pages/BlogGen';
import GraphicD from './pages/GraphicD';
import IdeaPage from './pages/IdeaPage';
import TopicPage from './pages/TopicPage';
import BlogPage from './pages/BlogPage';


function App() {
  return (
    <div className="Appli">
    {/* <Navbar/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/SignIn' element={<Signin/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Home/Graphic' element={<Graphic/>}/>
        <Route path='/Home/Seo' element={<Seo/>}/>
        <Route path='/Home/Webdesign' element={<Webdesign/>}/>
        <Route path='/Home/BlogCraft' element={<BlogCraft/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path='/User/BlogGenerator' element={<BlogGen/>}/>
        <Route path='/User/GraphicDesign' element={<GraphicD/>}/>
        <Route path= '/Home/BlogCraft/Idea' element={<IdeaPage/>}/>
        <Route path='/Home/BlogCraft/Topic' element={<TopicPage/>}/>
        <Route path='/Home/BlogCraft/Blog' element={<BlogPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

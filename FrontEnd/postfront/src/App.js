import './static/css/bootstrap.min.css';

import NavBar from './components/navbar';
import AddPost from './components/addPost';
import Histories from './components/histories';
import Posts from './components/posts';

function App() {
  return (
    <div>
      <NavBar/>
      <AddPost/>
      <Histories/>
      <Posts/>
    </div>
  );
}

export default App;

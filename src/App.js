import logo from './logo.svg';
import './App.css';
import {Header} from './components/header'
import {Route,Switch, BrowserRouter,Router} from 'react-router-dom'
import {Home} from './pages/home'
import {Post} from './pages/post'
function App() {
  return (
    <div className="App-header">
      

      <BrowserRouter>
      <Header>
        <Switch>
          <Route exact path={'/post/:id'} component = {Post}/>
          <Route path={'/'} component = {Home}/>
        </Switch>
        </Header>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

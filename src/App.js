import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import Favourites from './pages/Favourites';
import NewMeetupsPage from './pages/NewMeetUp';
import './App.css';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/'>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupsPage />
        </Route>
        <Route path='/favourites'>
          <Favourites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

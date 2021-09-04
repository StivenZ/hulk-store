import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AdminPage from './Pages/AdminPage';
import VendorPage from './Pages/VendorPage';
import SearchPanel from './components/Admin/SearchPanel';
import ControlPanel from './components/Admin/ControlPanel';
import HomePage from './Pages/HomePage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/store'>
          <VendorPage />
        </Route>
        <Route exact path='/admin'>
          <AdminPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

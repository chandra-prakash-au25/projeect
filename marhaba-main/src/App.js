import './App.css';
import './style.css';
import Routing from './components/Routing';
import Sidebar from './pages/Sidebar/Sidebar';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className='d-flex'>
      <Provider store={store}>
        <Sidebar />
        <Routing />
      </Provider>
    </div>
  );
}

export default App;

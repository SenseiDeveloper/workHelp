import {Library} from './components/library/library';
import {Provider} from 'react-redux';
import store from "./redux/store";
import './App.css';

function App() {
  return (
      <Provider store={store}>
        <Library />
      </Provider>
  );
}

export default App;

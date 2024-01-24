import { store } from './Redux.js';
import Router from './Router.js';
import './main.css';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
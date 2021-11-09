
import AppRouter from './app-router/AppRouter';
import { Provider } from 'react-redux';
import store from './redux/store/store'

const lawStore = store();

function App() {
  return (
    <div className="App">
      <Provider store={lawStore}>
        <AppRouter />
      </Provider>
     
    </div>
  );
}

export default App;

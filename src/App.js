import './App.scss';
import Provider from './provider';
import AppRouter from './router/Router';

function App() {
  return (
    <Provider>
      <div className="App">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;

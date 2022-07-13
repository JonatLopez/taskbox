import './App.scss';
import Provider from './provider';
import { Header } from './stories/Header/Header';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header></Header>
      </div>
    </Provider>
  );
}

export default App;

import SideBar from './components/SideBar';
import Main from './components/Main';
import Header from './components/Header'

import './scss/App.scss';

const App = () => (
  <div className="App">
    <div className="App__header">
      <Header />
    </div>
    <div className="App__content">
      <SideBar />
      <Main />
  </div>
  </div>
  
)

export default App;

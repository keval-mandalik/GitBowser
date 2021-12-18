
import './App.css';
import Header from './components/Header';
import Alert from './components/Alert';
import RepoDetails from './components/RepoDetails';
import RepoList from './components/RepoList';
import RepoState from './context/repos/RepoStates';

function App() {
  return (
    <>
    <RepoState>
     <Header/>
     <Alert msg={"Click to ⊕ to add Repository"} type={"secondary"}/>
     <div className="mainRepo">
     <RepoList/>
     <RepoDetails/>
     </div>
     </RepoState>
    </>
  );
}

export default App;

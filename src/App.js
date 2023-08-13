
import './App.css';
import Homepage from './Homepage';
import {Login} from './authentication/Login';
import { DataContext } from './context/Dataprovider';
import { useContext } from 'react';
function App() {
  const {account} = useContext(DataContext)
  console.log(account);
  return (
    <div className='App'>
      {
        account.length>0 ? <Homepage/>:<Login/>
      }
     
    </div>
  );
}

export default App;

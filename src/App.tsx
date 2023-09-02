import {DataContextProvider} from './Contexts/DataContext';
import RoutesMain from "./Routes/RoutesMain";

function App() {

  return (
    <div className="App">
      <DataContextProvider>
        <RoutesMain/>
      </DataContextProvider>
    </div>
  )
}

export default App

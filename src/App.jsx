import { createContext, useState } from "react";
import CounterApp from "./components/CounterApp";
import LearnLiftingStateUp from "./components/LearnLiftingStateUp";
import LearnUseEffect from "./components/LearnUseEffect";
import LearnUseMemo from "./components/LearnUseMemo";
import LearnUseState from "./components/LearnUseState";
import ChildA from "./components/UseContext/ChildA";

const stockContext = createContext();
const userContext = createContext();

function App() {
  const getStock = (data) => {
    console.log(data);
  };
  const [user, setUser] = useState({ name: "ram", isloggedin: "yes" });

  let stock = "apple";
  let price = 1000;
  return (
    <>
      <h1>App component</h1>
      {/* <LearnLiftingStateUp getStock={getStock}  /> */}
      {/* <LearnUseState /> */}
      {/* <CounterApp /> */}
      {/* <LearnUseEffect /> */}
      {/* <LearnUseMemo /> */}
      <stockContext.Provider value={{ stock, price }}>
        <userContext.Provider value={{user,setUser}}>
          <ChildA />
        </userContext.Provider>
      </stockContext.Provider>
    </>
  );
}

export default App;
export { stockContext };
export {userContext}

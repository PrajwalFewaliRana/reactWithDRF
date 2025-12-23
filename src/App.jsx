import CounterApp from "./components/CounterApp"
import LearnLiftingStateUp from "./components/LearnLiftingStateUp"
import LearnUseEffect from "./components/LearnUseEffect"
import LearnUseState from "./components/LearnUseState"



function App() {
  const getStock =(data)=>{
    console.log(data)
  }


  return (
    <>
      <h1>App component</h1>
      {/* <LearnLiftingStateUp getStock={getStock}  /> */}
      {/* <LearnUseState /> */}
      {/* <CounterApp /> */}
      <LearnUseEffect />
    </>
  )
}

export default App


import './App.css'
import Counter from './Counter'
import Friend from './Friends'
import Team from './Team'
import Users from './User'
import Friends from './friend'
function App() {

  function handleClick (){
    alert('button click')
  }
  const handleClick2 = () =>{
    alert('button click 2')
  }

  const addToFive = (num) =>{
    alert(num + 5)
  }

  return (
    <>
      <h3>React core concepts 2</h3>
      <Friend></Friend>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
    <button onClick={handleClick}>Click me</button>
    <button onClick={handleClick2}>Click2</button>
    <button onClick={()=> {alert('third clicked')}}>third</button>
    <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App

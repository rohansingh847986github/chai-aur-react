import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    username: "Rohan",
    age:25
  }

  let newArr = [1,2,3]

  return (
    <>
     <h1 className=' bg-green-400 text-black p-4 rounded-4xl mb-4'>Tailind Test</h1>  
     {/* <Card username = 'cahi aur code' btn='Singh'/>
     <Card username='Rohan' /> */}
    </>
  )
}

export default App

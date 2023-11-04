import { useState } from "react"
import Nav from "./Components/Nav"
import Main from "./Section/Main"
import list from './assets/data'
import Show from "./Components/Show"

function App() {
  const [count, setCount] = useState(0)
  const [display, setDisplay] = useState([])
  const [show, setShow] = useState(false)
  const [warning, setWarning] = useState(false)

  const handleClick = (user_item) => {
    let isPersent = false
    display.map((item) => {
      if (item.id === user_item) {
        setWarning(true)
        setTimeout(() => {
          setWarning(false)
        }, 2000)
      }
    })

    const sample = display.filter((item) => {
      return item.id === user_item
    })
    setCount(count + 1)
    const id = list.find((item) => {
      return item.id === user_item
    })
    const newarr = [...display, id]
    setDisplay(newarr)
  }


  return (
    <>
      <div className="container mx-auto">
        <Nav count={count} setShow={setShow} warning={warning} show={show} />
        <hr className="mt-2" />
        {show ? <Show display={display} /> : <Main handleClick={handleClick} />}
      </div>
    </>
  )
}


export default App


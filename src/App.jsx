import { useState } from "react"
import Nav from "./Components/Nav"
import Main from "./Section/Main"
import Show from "./Components/Show"

function App() {
  const [count, setCount] = useState(0)
  const [display, setDisplay] = useState([])
  const [show, setShow] = useState(false)
  const [warning, setWarning] = useState(false)

  const handleClick = (user_item) => {
    let isPersent = false
    display.forEach((item) => {
      if (item.id === user_item.id)
        isPersent = true
    })
    if (isPersent) {
      setWarning(true)
      setTimeout(() => {
        setWarning(false)
      }, 2000)
      return;
    }
    setDisplay([...display, user_item])
    setCount(count + 1)
  }

  const handleChange = (operation, specific_Item) => {
    if (operation === 'add') {
      specific_Item.amount++;
    } else {
      specific_Item.amount = specific_Item.amount < 0 ?
        specific_Item.amount = 1 : specific_Item.amount -= 1;

    }
  }

  return (
    <>
      <div className="container mx-auto">
        <Nav count={count} setShow={setShow} warning={warning} show={show} />
        <hr className="mt-2" />
        {show ? <Show display={display} handleChange={handleChange} /> :
          <Main handleClick={handleClick} />}
      </div>
    </>
  )
}


export default App


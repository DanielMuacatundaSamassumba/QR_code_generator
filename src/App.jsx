import { useState } from 'react'
 
import './App.css'
function App() {
  const [text, setText] = useState("")
   const [img, setImg]= useState("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Nakolobatina_dev")
  const hendleqrvalue=(e)=>{
setText(e.target.value)

  setImg(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`)

}
  return (
    <>
      <div className='container'>
      <img src={img} alt="" />
      <input type="text" placeholder='Crie o seu própio Qrcode' onChange={hendleqrvalue}/>
       <a href={img} download={"Qrcode.png"}>Baixar</a>
      </div>
     
    </>
  )
}

export default App

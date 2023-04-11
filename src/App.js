import Input from "./components/Input"
import Button from "./components/Button"
import List from "./components/List"
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';


const style = {
  bg:`bg-green-500 text-white p-3 flex items-center justify-center flex-col`
}
function App() {
  const notify = () => toast.error('Boş alan bırakmayınız.');
  const notify2 = () => toast.success('Başarılı.',{
    icon: '🤡'
  });


  let [deger, setDeger] = useState("")

  let degerGirdisi = (e)=>{
    setDeger(e.target.value) 
  }

  let [yeniDizi, setYeniDizi] = useState([])

  let yeniDiziFunc = () =>{
    if(deger==""){
      notify()
      return
    } 
    let newArray = [...yeniDizi,deger]
      setYeniDizi(newArray)

      setDeger("")
      notify2()
  }


  return (
    <div className={style.bg}>
      <Input value={deger} onChange={degerGirdisi}/>
      <Button onClick={yeniDiziFunc}/> 
      {
        yeniDizi.map((element,index)=>(
          <List data={element} key={index}/>
        ))
      } 
      <Toaster
      position="top-right"
      reverseOrder={false}
      />
    </div>
  );
}

export default App;

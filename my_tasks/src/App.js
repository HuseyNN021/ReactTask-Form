import { useState } from 'react';
import './App.css';

function App() {
  let [name,setName]=useState('')
  let [surname,setSurname]=useState('')
  let [phone,setPhone]=useState('')
  let [email,setEmail]=useState('')
  let [serh,setSerh]=useState('')
  let [isClick,setClick]=useState(false)
  function clickSubmit(event){
    event.preventDefault();
    setClick(true)
  }
  return (
    <>
      <form onSubmit={clickSubmit}>
        <input value={name} onChange={e=>setName(e.target.value)} type='text'/>
        <input value={surname} onChange={e=>setSurname(e.target.value)} type='text'/>
        <input value={phone} onChange={e=>setPhone(e.target.value)} type='text'/>
        <input value={email} onChange={e=>setEmail(e.target.value)} type='text'/>
        <textarea value={serh} onChange={e=>setSerh(e.target.value)}/>
        <button>Sumbit</button>
      </form>
      {
        isClick? (<div>
          <h1>My name is {name}</h1>
          <h1>My surname is{surname}</h1>
          <h1>My phone {phone}</h1>
          <h1>My Email {email}</h1>
          <h1>Comment :{serh}</h1>
        </div>):null
      }
    </>
  );
}

export default App;

import './App.css';
import React, {useState, useRef, useEffect} from "react";
import axios from "axios";
import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg"


import  { Container, 
    H1, 
    Image, 
    ContainerItens, 
    InputLabel, 
    Input, 
    Button,
    User} from "./styles";



function App() {

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

    async function addNewUser(){

      const { data: newUser } = await axios.post("http://localhost:3001/users", {
        name:inputName.current.value, 
        age:inputAge.current.value,
      });

      setUsers([...users, newUser]);
      }

    
    useEffect(()=>{
      async function fetUsers(){
        const {data: newUsers} = await axios.get("http://localhost:3001/users");

        setUsers(newUsers);
      }

      fetUsers()

    }, [])

    async function deleteUser(userId){
      await axios.delete(`http://localhost:3001/users/${userId}`)
      
      const newUser = users.filter((user) => user.id !== userId);

      setUsers(newUser)
    }


  return <Container>
    <Image alt="logo-pessoas" src={People}/>
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"/>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"/>

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow}/>
        </Button>

        <ul>
          {users.map( user =>(
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="lata-de-lixo" src={Trash} />
              </button>
            </User>
          ))}
        </ul>

    </ContainerItens>
  </Container>

}

export default App

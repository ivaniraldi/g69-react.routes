import NavBar from "../components/NavBar"
import { useEffect, useState } from "react"
import UserCard from "../components/UserCard";


export default function Home() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    const getUsuarios = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const result = await response.json()
        setUsers(result)
    }

    useEffect(()=>{getUsuarios()}, [])

    let usuariosFiltrados = []
    
    if(search === ""){
        usuariosFiltrados = users
    }else{
        usuariosFiltrados = users.filter((u) => 
            u.name.toLowerCase().includes(search.toLowerCase())
        )
    }


  return (
    <div>
        <NavBar></NavBar>
        <div>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" value={search} aria-label="Search" onChange={(e)=>setSearch(e.target.value)}/>
            </form>
        </div>
        <div className="container contenedorUsuarios">
            {usuariosFiltrados.map((u, i) => {
                return (
                    <UserCard key={i} usuario={u}/>
                )
            })}
        </div>
    </div>
  )
}

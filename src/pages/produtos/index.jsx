import {useState, useEffect} from 'react'
import axios from 'axios'

const Produtos = () => {
    const [pizzas, setPizzas] = useState([])
    // Consumir rota com lista de produtos
    axios.get("http://viacep.com.br/wss010110000/json")
    .then(response=>{
        console.log (response.data)
    })
    .catch(error=>{console.log(error)})


    // Iteração da lista de pizzas - pizza a pizza (um a um)
    const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)
 
    return (
        <div>
            <h3>Listagem de Produtos</h3>
            <ul>
                {listaPizzas}
            </ul>
        </div>
 
    )
 
}
 
export default Produtos
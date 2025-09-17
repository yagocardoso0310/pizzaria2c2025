const Produtos = () => {

    // Objeto da lista de pizzas
    const pizzas = [
        'Pizza Muçarela',
        'Pizza Calabresa',
        'Pizza Portuguesa'
    ]
    // Iteração da lista de pizzas - pizza a pizza (um a um)
    const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)
 
    return (
        <div>
            <h3>Listagem de Produtos</h3>
            <ul>
                <li>Pizza de Calabresa</li>
                <li>Pizza de Muçarela</li>
                <li>Pizza de Queijo</li>
                <li>Pizza de Queijo</li>
                <li>Pizza de Queijo</li>
                <li>Pizza de Queijo</li>
                <li>Pizza de Queijo</li>☻
 
            </ul>
        </div>
 
    )
 
}
 
export default Produtos
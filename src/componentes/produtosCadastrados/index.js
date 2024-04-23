import './produtoscadsatrados.css'

const ProdutosCadastrados = (props) => {
    return (
        <div className='ProdutosCadastrados'>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.img} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.valor}</h5>
            </div>
        </div>
    )
}

export default ProdutosCadastrados
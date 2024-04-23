import ProdutosCadastrados from '../produtosCadastrados'
import './departamento.css'

const Departamento = (props) => {
    return (
        props.produtos.length > 0 && 
        <section className='departamento' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
          <div className='produtos'>
            {props.produtos.map(produto => 
            <ProdutosCadastrados
                corDeFundo={props.corPrimaria}
                key={produto.nome}
                nome={produto.Nome}
                valor={produto.VlProduto}
                img={produto.Imagem}
            />)}
            </div>
        </section>
    )

}

export default Departamento
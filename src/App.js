
import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/index.js';
import Departamento from './componentes/departamentos/index.js';
import Rodape from './componentes/rodape/index.js';

//queremos agora pegar o produto cadastrado para incluir em um array, uma lista


function App() {

const departamentos = [
  {
    nome: 'Frios',
    corPrimaria: '#57C278',
    corSecundaria:'#D9F7E9'
  },
  {
    nome: 'Sacolão',
    corPrimaria: '#82CFFA',
    corSecundaria:'#E8F8FF'

  },
  {
    nome: 'Padaria',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2'

  },
  {
    nome: 'Bebidas',
    corPrimaria: '#E06B69',
    corSecundaria:'#FDE7E8'
  },
  {
    nome: 'Limpeza/Higiene',
    corPrimaria: '#DB6EBF',
    corSecundaria:'#FAE9F5'
  },
  {
    nome: 'Açougue/congelados',
    corPrimaria: '#FFBA05',
    corSecundaria:'#FFF5D9'
  },
  {
    nome: 'Alimentício',
    corPrimaria:'#FF8A29',
    corSecundaria:'#FFEEDF'
  },
]

  
const [Produtos, setProdutos] = useState([])

const NovoProdutoAdicionado = (produto) => {
setProdutos([...Produtos,produto])
}

  return (
    <div className="App">
      <Banner/>
      <Formulario departamentos ={departamentos.map(departamento => departamento.nome)}
      ProdutoCadastrado={produto => NovoProdutoAdicionado(produto)} />

       {departamentos.map(departamento => 
       <Departamento key={departamento.nome} 
        nome={departamento.nome} 
        corSecundaria={departamento.corSecundaria} 
        corPrimaria={departamento.corPrimaria}
        produtos={Produtos.filter(produto => produto.Departamentos === departamento.nome)}
        />)}
        <Rodape />
    </div>
  );
}

export default App;

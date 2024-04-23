import './formulario.css'
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [Nome, setNome] = useState('')
    const [VlProduto, setvlProduto] = useState('')
    const [Imagem, setImagem] = useState('')
    const [Departamentos, setDepartamentos] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.ProdutoCadastrado({
            Nome,
            VlProduto,
            Imagem,
            Departamentos
        })
        setNome('')
        setvlProduto('')
        setImagem('')
        setDepartamentos('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card com os produtos vendidos.</h2>
                <CampoTexto
                    obrigatorio
                    label="Nome do produto"
                    placeholder="Insira o Nome do Produto"
                    valor={Nome}
                    Alterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio
                    label="Valor"
                    placeholder="Insira o Valor unitário em Real exemplo: R$00,00"
                    valor={VlProduto}
                    Alterado={valor => setvlProduto(valor)}
                />
                <CampoTexto
                    obrigatorio
                    label="Imagem"
                    placeholder="Informe o endereço da imagem do produto"
                    valor={Imagem}
                    Alterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio
                    label="Departamento"
                    itens={props.departamentos}
                    valor={Departamentos}
                    Alterado={valor => setDepartamentos(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario
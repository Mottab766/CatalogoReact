import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.Alterado(evento.target.value)} 
            required={props.obrigatorio} 
            value={props.valor}>
                <option value=''></option>
                    {props.itens.map (item => <option key={item}>{item}</option>)}
                    {/* Para cada item, retornamos uma opção pelo map. */}
            </select>
        </div>

    )
}

export default ListaSuspensa
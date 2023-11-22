import Pessoa from "./Pessoas";

function Entrada(props) {
    return (
        <p>

            <label for={props.name}>{props.label}: </label>
            <input type={props.tipo} name={props.name} id={props.name} placeholder={props.ph}></input>
        </p>
    )

    Pessoa.proptype = {
        nome: proptypes.string.isrequired, //texto e obrigatorio
        idade: proptype.number //numero
    }
}

export default Entrada;
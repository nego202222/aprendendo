import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function Calculadora() {
    //variaveis
    const [numero1, setNumero1] = useState()
    const [numero2, setNumero2] = useState()
    const [resultado, setResultado] = useState()
    function calcular() {
        setResultado(parseFloat(numero1) + parseFloat(numero2));
    }

    return (
        <div>
            <p>
                <label htmlFor="n1">numero 1:</label>
                <input onChange={(e) => setNumero1(e.target.value)} name="n1" id="n1" type="number" />

            </p>

            <p>
                <label oncl htmlFor="n2">numero 2:</label>
                <input  onChange={(e) => setNumero2(e.target.value)} name="n2" id="n2" type="number" />

            </p>
            <p>
            <div>
 
            <div>
  <Button
    color="primary"
    outline
    size=""
    onClick={calcular}
  >
    calcular
  </Button>

</div>
</div>
            </p>
            <p>resultado: {resultado}</p>
        </div>

    )

}
export default Calculadora
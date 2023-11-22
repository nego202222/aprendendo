import {useState} from 'react'

function QualMeuNome(){

    const [nome, mudarnome]= useState();

return(
<div>
    <label htmlfor="name">nome: </label>
    <input onKeyUp={(e) => mudarnome (e.target.value)} type="text" id="nome" name="nome"></input>
    <br/>
    <p>seu nome e:  {nome}</p>
</div>

)

}


export default QualMeuNome
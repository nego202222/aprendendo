import proptypes from 'prop-types'
import style from './Pessoa.Components.css'

function Pessoa({ nome, img, idade, profissao }) {
  return (
    <div className="fundo">

      <h1>perfil do {nome}</h1>
      <img src="https://picsum.photos/id/237/200/300"></img>
      <p> {nome} {idade} {img}  </p>
      <p>
        <img></img>
      </p>
    </div>
  )

}
export default Pessoa;










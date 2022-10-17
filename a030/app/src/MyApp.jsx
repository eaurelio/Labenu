import './assets/style.css'

function hello() {
  window.alert('Olá, mundo!')
}

export default function MyApp () {
  let nome = 'Edson'
  return (
    <button className='orange' onClick={hello}>
      né {nome}?
    </button>
  )
}
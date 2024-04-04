```// variaveis
const mensagem = 'oi, tudo bem?'
// tipos de dados
 // number
 // string
// funcao
alert(mensagem)


(HTML) <tr>
      <td>
        <strong>
          Diogo Fernandes
        </strong>
        <br>
        <small>
          diego@gmail.com
        </small>
      </td>
      <td>Há 3 dias</td>
      <td>Há 3 Minutos</td>
    </tr>

    // objeto javaScript


    const participante = {
nome: 'MAyk Brito'
email: 'mayk@gmail.com'
dataIncricao: new Date(2024, 2, 22 , 19 , 20)
dataCheckIn: new Date(2024, 2, 25, 22, 00)
}

let participantes = [
{
nome: 'MAyk Brito'
email: 'mayk@gmail.com'
dataIncricao: new Date(2024, 2, 22 , 19 , 20)
dataCheckIn: new Date(2024, 2, 25, 22, 00)
}
]


alert(dadosDoFormulario.get('email'))








const criarNovoParticipante = (participante) => {

  const dataIncricao = dayjs(Date.now())
  .to (participante.dataincricao)

  let dataCheckIn =dayjs(Date.now())
  .to (participante.dataCheckIn)
 
 if(participante.dataCheckIn == null) {
    dataCheckIn = `
     <button
      data-email="${participante.email}"
      onclick="fazerCheckIN(event)"
     >
      confirmar checck-in
     </button>

     `;
    }
    
 
 
 return `  
    <tr>
      <td>
        <strong>
          ${participante.nome}
        </strong>
        <br>
        <small>
          ${participante.email}
        </small>
      </td>
        <td>${dataIncricao}</td>
        <td>${dataCheckIn}</td>
    </tr>
    `;
}

const atualizarLista = (participantes) => {
  let output = ""
  for(let participante of participantes) {
   output = output + criarNovoParticipante(participante)
 }


 document
 .querySelector('tbody')
 .innerHTML = output
}

atualizarLista(participantes)



const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormDate(event.target)

  const participante ={
    nome: dadosDoFormulario.get('nome')
    email: dadosDoFormulario.get('email')
    dataIncricao: new Date(),
    dataCheckIn: null

  }
  participante = [participante, ...participantes]
  atualizarLista(participantes)
}

alert(dadosDoFormulario.get('Email'))

const fazerCheckIn = (event) => {
 
  const participante = participantes.find((p)=> {
 return p.email == event.target.dataset.email
  })

atualizarLista(participantes)
}

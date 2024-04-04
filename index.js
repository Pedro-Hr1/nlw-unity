let participantes = [
    {
        nome: 'Mayk Brito',
        email: 'mayk@gmail.com',
        dataIncricao: new Date(2024, 2, 22, 19, 20),
        dataCheckIn: new Date(2024, 2, 25, 22, 0)
    },
    {
        nome: 'Joana Silva',
        email: 'joana@hotmail.com',
        dataIncricao: new Date(2024, 1, 10, 15, 30),
        dataCheckIn: new Date(2024, 1, 15, 18, 45)
    },
    {
        nome: 'Pedro Santos',
        email: 'pedro@yahoo.com',
        dataIncricao: new Date(2024, 0, 5, 12, 0),
        dataCheckIn: new Date(2024, 0, 10, 14, 20)
    },
    {
        nome: 'Ana Oliveira',
        email: 'ana@gmail.com',
        dataIncricao: new Date(2024, 3, 1, 8, 45),
        dataCheckIn: new Date(2024, 3, 5, 11, 10)
    },
    {
        nome: 'Rafaela Costa',
        email: 'rafaela@outlook.com',
        dataIncricao: new Date(2024, 2, 18, 17, 0),
        dataCheckIn: new Date(2024, 2, 22, 20, 30)
    },
    {
        nome: 'Lucas Pereira',
        email: 'lucas@gmail.com',
        dataIncricao: new Date(2024, 1, 28, 10, 15),
        dataCheckIn: new Date(2024, 2, 2, 13, 40)
    },
    {
        nome: 'Carla Fernandes',
        email: 'carla@yahoo.com',
        dataIncricao: new Date(2024, 0, 15, 14, 30),
        dataCheckIn: new Date(2024, 0, 20, 17, 50)
    },
    {
        nome: 'Gustavo Almeida',
        email: 'gustavo@hotmail.com',
        dataIncricao: new Date(2024, 1, 20, 9, 0),
        dataCheckIn: new Date(2024, 1, 25, 12, 15)
    },
    {
        nome: 'Mariana Lima',
        email: 'mariana@gmail.com',
        dataIncricao: new Date(2024, 3, 5, 20, 45),
        dataCheckIn: new Date(2024, 3, 10, 23, 30)
    },
    {
        nome: 'Daniel Souza',
        email: 'daniel@outlook.com',
        dataIncricao: new Date(2024, 2, 10, 11, 30),
        dataCheckIn: new Date(2024, 2, 15, 14, 40)
    },
 {
    nome: "Paula Costa",
    email: "paula@gmail.com",
    dataInscricao: new Date(2023, 6, 9, 19, 23),
    dataCheckIn: null
  },
  {
    nome: "Gabriel Almeida",
    email: "gabriel@gmail.com",
    dataInscricao: new Date(2023, 5, 10, 19, 23),
    dataCheckIn: null
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now())
  .to(participante.dataCheckIn)
  
  if(participante.dataCheckIn == null) {
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `
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
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }

  // substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null  
  }

  // verificar se o particpante já existe
  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
  )

  if(participanteExiste) {
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  // limpar o formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  // confirmar se realmente quer o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?' 

  if(confirm(mensagemConfirmacao) == false) {
    return
  }

  // encontrar o participante dentro da lista
  const participante = participantes.find(
    (p) => p.email == event.target.dataset.email  
  )
  
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()

  // atualizar a lista de participantes
  atualizarLista(participantes)
}
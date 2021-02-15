const empresa = {
  nome: 'Rocketseat',
  cor : 'Roxo',
  foco: 'Programação',
  endereco: {
    rua: 'Rua Guilherme Gembala',
    numero: 260,
  }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)


const programador = {
  nome: 'Igor',
  idade: 21,
  tecnologias: [
  { name: 'C++', especialidade: 'Desktop' },
  { name: 'Python', especialidade: 'Data Science' },
  { name: 'JavaScript', especialidade: 'Web/Mobile' }
  ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].name} com especialidade em ${programador.tecnologias[0].especialidade}`)
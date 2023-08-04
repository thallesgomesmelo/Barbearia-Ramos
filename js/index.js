// Pegando elementos do serviços e referenciando a uma variavel.
const valorTotal = document.getElementById('total')
const inputServicos = document.querySelectorAll(
  '.section_servico .servicos input'
)

// Objeto com os tipos de serviços com seu valor.
const servicosValor = {
  corte: 25,
  sombrancelha: 5,
  barba: 15,
  acabamento: 7,
  luzes: 35,
  relaxamento: 25,
  pigmentacao: 20,
  platinado: 60,
  selagem: 50
}

// Loop usado para adicionar na ação de calculo ao clicar no campo checkbox.
for (const input of inputServicos) {
  const servico = input.id.replace('input-', '')

  input.addEventListener('click', () => {
    // Pegando valores e convertendo para número.
    const total = parseInt(valorTotal.innerText)
    const servicoSelecionado = parseInt(servicosValor[servico])
    const sum = `${total + servicoSelecionado},00`
    const sub = `${total - servicoSelecionado},00`

    // Operação termaria usada para verificar se campo esta selecionado, se estiver soma se  não subtrai.
    valorTotal.innerText = input.checked ? sum : sub
  })
}

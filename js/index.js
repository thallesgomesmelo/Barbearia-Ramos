const valorTotal = document.getElementById("total");
const inputServicos = document.querySelectorAll(".section_servico .servicos input");
const servicos = {};

for (const input of inputServicos) {
  const [key, value] = input.id.replace("input-", "").split("-");

  input.addEventListener("click", () => {
    if (input.checked) {
      valorTotal.innerText = parseInt(valorTotal.innerText) + parseInt(value);
    }
  });
}

import { inputGrade, inputActivity, scoreRow } from "./main.js"
import approvedEmoji from "./ApprovalEmoji.js"
import calcAverage from "./CalcAverage.js"
import isApproved from "./IsApproved.js"

export default function insertScore() { // **** Insere os dados na tabela & executa a att. da média.
  const gradeFormat = inputGrade.value.replace(/,/g, '.'),
    formattedGrade = parseFloat(gradeFormat).toFixed(2) //** Formatado pra substituir vírgula, e limitar casas decimais.
  if (!isNaN(formattedGrade) && formattedGrade >= 0 && formattedGrade <= 10) {
    const insertRow = `
    <tr class="t_insert">
      <td id="activity">${inputActivity.value}</td>
      <td id="grade">${formattedGrade}</td>
      <td id="approved">
        <div class="approved_img">
          ${approvedEmoji()}
        </div>
      </td>
    </tr>`
    scoreRow.insertAdjacentHTML('beforebegin', insertRow)
    // ***** Calcula a média à cada inserção & Checa se está aprovado.
    calcAverage()
    isApproved()
    document.querySelector('form').reset()
  }
}
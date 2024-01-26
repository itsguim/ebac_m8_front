// Seletores:
const inputGrade = document.querySelector('#inp-nota'),
  inputActivity = document.querySelector('#inp-atv'),
  addBtn = document.querySelector('.add_btn'),
  scoreRow = document.querySelector('.t_score'),
  scoreFinal = document.querySelector('#score_final'),
  approvedField = document.querySelector('.is_approved')
// *******

function approvedEmoji() {
  const gradeValue = parseFloat(inputGrade.value)
  const img = document.createElement('img')
  if (gradeValue >= 7) {
    img.setAttribute('src', 'src/public/aprovado.png')
  } else if (gradeValue < 7) {
    img.setAttribute('src', 'src/public/reprovado.png')
  }
  return img.outerHTML
}

function insertScore() { // **** Insere os dados na tabela & executa a att. da média.
  const gradeFormat = inputGrade.value.replace(/,/g, '.'),
    formattedGrade = parseFloat(gradeFormat).toFixed(2) //** Formatado pra substituir vírgula, e limitar casas decimais.
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
}

function calcAverage() {
  const tInsert = document.querySelector('.t_insert')
  if (document.querySelector('table').contains(tInsert)) {
    const grades = Array.from(document.querySelectorAll('#grade')),
      //**** Mapeia uma array com as notas listadas. Nota parseada string => number
      storedGrades = grades.map(grade => {
        return parseFloat(grade.innerHTML)
      })
    //**** Soma as notas da array e a retorna
    const sumGrades = storedGrades.reduce((acc, grade) => {
      return acc + grade
    }, 0)
    //**** Insere o dado no campo determinado '#score_final'
    const finalValue = sumGrades / storedGrades.length // Cálculo
    scoreFinal.innerHTML = finalValue.toFixed(2)
  }
}

function isApproved() {
  const approvalResult = scoreFinal.innerHTML
  const result = parseFloat(approvalResult)
  if (result >= 7) {
    approvedField.style.backgroundColor = '#028002'
    approvedField.innerHTML = 'Aprovado!'
  } else if (result < 7) {
    approvedField.style.backgroundColor = '#800202'
    approvedField.innerHTML = 'Reprovado!'
  }
}

addBtn.addEventListener('click', insertScore)
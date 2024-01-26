// Seletores:
const inputGrade = document.querySelector('#inp-nota'),
  inputActivity = document.querySelector('#inp-atv'),
  addBtn = document.querySelector('.add_btn'),
  scoreRow = document.querySelector('.t_score')
// *******


function isApproved() {
  const gradeValue = inputGrade.value
  if (gradeValue >= 7) {
    const happyImg = document.createElement('img')
    happyImg.setAttribute('src', 'src/public/aprovado.png')
    return happyImg.outerHTML
  } else if (gradeValue < 7) {
    const sadImg = document.createElement('img')
    sadImg.setAttribute('src', 'src/public/reprovado.png')
    return sadImg.outerHTML
  }
}

function insertScore() {
  const insertRow = `
  <tr class="t_insert">
    <td id="activity">${inputActivity.value}</td>
    <td id="grade">${inputGrade.value}</td>
    <td id="approved">
      <div class="approved_img">
        ${isApproved()}
      </div>
    </td>
  </tr>
  `
  scoreRow.insertAdjacentHTML('beforebegin', insertRow)
}

addBtn.addEventListener('click', insertScore)
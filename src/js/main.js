import handleAddClick from "./HandleClick.js"
import calcAverage from "./CalcAverage.js"
import isApproved from "./IsApproved.js"
import approvedEmoji from "./ApprovalEmoji.js"

// Seletores:
const inputGrade = document.querySelector('#inp-nota'),
  inputActivity = document.querySelector('#inp-atv'),
  addBtn = document.querySelector('.add_btn'),
  scoreRow = document.querySelector('.t_score'),
  scoreFinal = document.querySelector('#score_final'),
  approvedField = document.querySelector('.is_approved')
// *******

addBtn.addEventListener('click', handleAddClick)


export { inputGrade, inputActivity, scoreRow, scoreFinal, approvedField }
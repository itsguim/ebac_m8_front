import { scoreFinal, approvedField } from "./main.js"

export default function isApproved() {
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
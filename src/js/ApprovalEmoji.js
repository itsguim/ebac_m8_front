import { inputGrade } from "./main.js"

export default function approvedEmoji() {
  const gradeValue = parseFloat(inputGrade.value)
  const img = document.createElement('img')
  img.setAttribute('src', gradeValue >= 7 ? 'src/public/aprovado.png' : 'src/public/reprovado.png')
  return img.outerHTML
}
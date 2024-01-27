import { scoreFinal } from "./main.js"

export default function calcAverage() {
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
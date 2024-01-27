// Seletores:
const inputGrade = document.querySelector('#inp-nota'),
  inputActivity = document.querySelector('#inp-atv'),
  addBtn = document.querySelector('.add_btn'),
  scoreRow = document.querySelector('.t_score'),
  scoreFinal = document.querySelector('#score_final'),
  approvedField = document.querySelector('.is_approved');

// Função para criar e retornar a tag de imagem com base na nota
function getApprovalImage(gradeValue) {
  const img = document.createElement('img');
  img.setAttribute('src', gradeValue >= 7 ? 'src/public/aprovado.png' : 'src/public/reprovado.png');
  return img.outerHTML;
}

// Função para formatar a nota
function formatGrade(inputGradeValue) {
  const gradeFormat = inputGradeValue.replace(/,/g, '.');
  return parseFloat(gradeFormat).toFixed(2);
}

// Função para inserir a linha na tabela
function insertRow(activity, formattedGrade) {
  const insertRow = `
    <tr class="t_insert">
      <td id="activity">${activity}</td>
      <td id="grade">${formattedGrade}</td>
      <td id="approved">
        <div class="approved_img">
          ${getApprovalImage(parseFloat(formattedGrade))}
        </div>
      </td>
    </tr>`;

  scoreRow.insertAdjacentHTML('beforebegin', insertRow);
}

// Função para lidar com o clique no botão de adicionar
function handleAddBtnClick() {
  const activity = inputActivity.value;
  const formattedGrade = formatGrade(inputGrade.value);

  if (!isNaN(formattedGrade) && formattedGrade >= 0 && formattedGrade <= 10) {
    insertRow(activity, formattedGrade);
    calcAverage();
    isApproved();
    document.querySelector('form').reset();
  }
}

// Função para calcular a média
function calcAverage() {
  const tInsert = document.querySelector('.t_insert');
  if (document.querySelector('table').contains(tInsert)) {
    const grades = Array.from(document.querySelectorAll('#grade'));
    const storedGrades = grades.map(grade => parseFloat(grade.innerHTML));

    const sumGrades = storedGrades.reduce((acc, grade) => acc + grade, 0);
    const finalValue = sumGrades / storedGrades.length;

    scoreFinal.innerHTML = finalValue.toFixed(2);
  }
}

// Função para verificar se está aprovado
function isApproved() {
  const result = parseFloat(scoreFinal.innerHTML);
  const color = result >= 7 ? '#028002' : '#800202';
  const message = result >= 7 ? 'Aprovado!' : 'Reprovado!';

  approvedField.style.backgroundColor = color;
  approvedField.innerHTML = message;
}

addBtn.addEventListener('click', handleAddBtnClick);

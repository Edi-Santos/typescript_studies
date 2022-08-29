// Funções também devem ser tipadas

function studentsAssessment(student: string, note: number): string {
  let status: string = 'Nota inválida';

  if (note > 0 && note <= 5) status = 'Reprovado';
  if (note > 5 && note <= 6.9) status = 'Recuperação';
  if (note >= 7 && note <= 10) status = 'Aprovado';

  if (status !== 'Nota inválida') return `O aluno ${student} está: ${status}`;

  return status;
}

console.log(studentsAssessment('Edimar', 9));

// A sintaxe é:
// function nomeFuncao(): tipo {
//  ...
// }

const students = [
  {
    name: "Jenifer",
    firstNote: 7,
    secondNote: 9,
  },
  {
    name: "João",
    firstNote: 4,
    secondNote: 8,
  },
  {
    name: "Maria",
    firstNote: 8,
    secondNote: 5,
  },
  {
    name: "Paulo",
    firstNote: 8,
    secondNote: 6,
  },
]

function noteAverage(firstNote, secondNote) {
  return ((firstNote + secondNote) / 2)
}

function printAverage(student) {
  return `A média do(a) aluno(a) ${student.name} é: ${noteAverage(
    student.firstNote,
    student.secondNote
  )}`
}

function printMessage(student) {
  if (noteAverage(student.firstNote, student.secondNote) >= 7) {
    return `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`
  } else {
    return `Não foi dessa vez, ${student.name}! Tente novamente!`
  }
}

for (let student of students) {
  alert(`${printAverage(student)}\n${printMessage(student)}`)
}

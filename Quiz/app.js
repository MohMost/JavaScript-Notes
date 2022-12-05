const correctAnswers =['B', 'B', 'B', 'B']
const form = document.querySelector('.quiz-form')
const result= document.querySelector('.result')
const span= document.querySelector('span')
form.addEventListener('submit', (e) => {
  e.preventDefault()

  let score = 0
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

  userAnswers.forEach((answer, index) =>{
    if(answer===correctAnswers[index]) {
      score+=25
    }
  })
  //or we can do the opoposite thing
  /*correctAnswers.forEach((answer, index) =>{
    if(answer===userAnswers[index]) {
      score+=25
    }
  })*/
 scrollTo(0,0)
 span.innerHTML = `${score}%`
 result.classList.remove('d-none')
 let outPut =0
 const timer= setInterval(()=>{
  span.textContent=`${outPut}%`
  if(outPut===score) {
    clearInterval(timer)
  }else {
    outPut++
  }
 })
})


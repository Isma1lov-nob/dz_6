const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')

const counter = document.querySelector('.counter')

plus.addEventListener('click',()=>{
   counter.innerHTML++

})
minus.addEventListener('click',()=>{
  if(counter.innerHTML!=0){
      counter.innerHTML--
  
  }else{
      alert('it is zero')
      counter.innerHTML=''
  }
})
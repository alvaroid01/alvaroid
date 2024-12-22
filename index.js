document.addEventListener('DOMContentLoaded',(evt=>{
  const content = document.querySelectorAll('.content-right div')
  content.forEach((e)=>{
    if(id === section) e.style.display = 'flex'
   else  e.style.display = 'none'
 })
}))

  function goToIndex(params) {
   document.querySelector('.content-left').textContent = 'Fuck off' 
  }
  function renderSection(section){
    document.querySelector('.current-path').textContent = `${section}.html`
    const content = document.querySelectorAll('.content-right div')

    content.forEach((e)=>{
       const id = e.getAttribute('id')
       if(id === section) e.style.display = 'flex'
      else  e.style.display = 'none'
    })
  }
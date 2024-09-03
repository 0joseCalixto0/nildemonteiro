const myobserver = new IntersectionObserver((entries) =>{
    entries.forEach( (entry ) => {
    if(entry.isIntersecting){
        entry.target.classList.add('show')
    } else {
        entry.target.classList.remove('show')
    }

  })
})

const elements = document.querySelectorAll('.hidden')


elements.forEach((element2) =>myobserver.observe(element2))

const myobserver2 = new IntersectionObserver((entries) =>{
    entries.forEach( (entry ) => {
    if(entry.isIntersecting){
        entry.target.classList.add('show2')
    } else {
        entry.target.classList.remove('show2')
    }

  })
})

const elements2 = document.querySelectorAll('.hidden2')


elements2.forEach((element2) =>myobserver2.observe(element2))





// task-1

let icon1 = document.getElementById('icon1')
let icon2 = document.getElementById('icon2')
let icon3 = document.getElementById('icon3')
let icon4 = document.getElementById('icon4')
let icon5 = document.getElementById('icon5')
let phone = document.getElementById('content')
icon1.addEventListener('click',() => {
    content.style.backgroundColor = 'lightblue'    
})
icon2.addEventListener('click',() => {
    content.style.backgroundColor = 'lightyellow'    
})
icon3.addEventListener('click',() => {
    content.style.backgroundColor = 'lightgreen'    
})
icon4.addEventListener('click',() => {
    content.style.backgroundColor = 'lightgray'    
})
icon5.addEventListener('click',() => {
    content.style.backgroundColor = 'lightpink'    
})



// task-3

document.addEventListener("DOMContentLoaded",() => {
    const element = document.getElementById('element')
    const moon = document.getElementById('moon')
     moon.addEventListener('click',() => {
      element.style.backgroundColor = 'black'
      element.style.color = 'white'
    })
})


// task-4


const accordion = document.querySelector('.accordion');
const panel = document.querySelector('.panel');
accordion.addEventListener('click', () => {
  if (panel.style.display == 'none') {
    panel.style.display = 'block';
  } else {
    panel.style.display = 'none';
  }
});



// task-4

document.addEventListener('DOMContentLoaded',() => {
    const stars = document.querySelectorAll('.star')
    stars.forEach(star => {
        star.addEventListener('click',
            function(){
                const rate = 
                parseInt(this.getAttribute('data-value'))
                const stars = this.parentElement.querySelectorAll('.star')
                stars.forEach((s,index) => {
                   if (index < rate){
                    s.style.color = 'gold'
                    }
                    else {
                        s.style.color = 'black'
                    }
                })
            })
    })
})
  







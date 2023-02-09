let btn1 = document.querySelector('.save')
let btn2 = document.querySelector('.write')
let textArea = document.querySelector('textarea')
let notes = document.querySelector('#notes')


let texts = []    




btn1.addEventListener('click', function(){
    
    texts.push(textArea.value)

    let li = document.createElement('li')
    notes.appendChild(li)


    let li_Collection = document.getElementsByTagName('li')
    let note = Array.prototype.slice.call( li_Collection )


    for(let i = 0; i < note.length; i++){
        note[i].addEventListener('click', function(){
            for(let d = 0; d < note.length; d++){
                note[d].classList.remove('active')
            }
            note[i].classList.add('active')
        })
    }



    note.forEach(item =>{
        
        let num = texts.length
        li.textContent = `Запись ${num}`
        li.dataset.key = num 
        
        item.addEventListener('click', function(event){
            if(item.classList.contains('active')){
                btn1.setAttribute('data-mode', 'update')
                btn1.dataset.key = num
            }
                
            if(item.classList.contains('active') == false){
                btn1.setAttribute('data-mode', 'create')
            }
            
            texts.forEach((item, index) =>{

                if(index == event.target.dataset.key){
                    textArea.value = item
                }
            })
            
        })
        
    })
    
    btn2.addEventListener('click', function(){
       
        btn1.setAttribute('data-mode', 'create')
    })
    
    
    textArea.focus()
    textArea.value = ''
})
            




    




             















    



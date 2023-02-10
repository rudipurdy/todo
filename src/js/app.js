const btn1 = document.querySelector('.save')
const btn2 = document.querySelector('.write')
const textArea = document.querySelector('textarea')
const notes = document.querySelector('#notes')
const textElement = document.querySelector('#text')
const input = document.querySelector('input')
const popup = document.querySelector('.popup')

let tasks = []    

function showPopup() {
    if(textElement.style.display){
        textElement.style.display = 'none'
    }
    popup.classList.add('active')
    input.focus()   
}
    

function pushTask(){
    
    const task = document.createElement('li')
    task.textContent = input.value
    tasks.push({task, text:''})
    notes.appendChild(task)
    popup.classList.remove('active')
    input.value = ''
    
    if(tasks.length > 0){
        let info = document.querySelector('#info')
        info.style.display = 'none'
    }
}
        
    
function openTask(e) {
    if(popup.classList.contains('active')){
        popup.classList.remove('active')
    }

    const task = e.target
   
    if(task.tagName !== 'LI') return // на всякий случай проверка точно ли по элементу li тыкнули
    setActiveTask(task)
    
    
    const activeTask = getActiveTaskFromArray()
    textArea.value = activeTask.text || ''
    textContetActive()
}

function saveText() { // тут помощью функции getActiveTaskFromArray получаем объект с активной таской и меняем внутри нее текст. так как мы получаем ссылку на объект
    //то при ее изменении этот объект меняется и в самом массиве
    const textValue = textArea.value
   
    const activeTask = getActiveTaskFromArray()
    activeTask.text = textValue
}


function textContetActive() { // textarea делаем видимой
    if (textElement.style.display === 'block') return

    textElement.style.display = 'block'
}

function getActiveTaskFromArray() {
    //через деструктаризацию получаю нужный объект(у которго data-active = true) из массива tasks
    const [activeTask] = tasks.filter(({task}) => {
        return task.dataset.active === 'true'
    })

    return activeTask
}

function setActiveTask(task) { // делаем тыкнутую таску активной а все остальные неактивными
    tasks.forEach(({task}) => {
        task.dataset.active = false
    })
    task.dataset.active = true
}

btn2.addEventListener('click', showPopup)
input.addEventListener('change', pushTask)
notes.addEventListener('click', openTask)
btn1.addEventListener('click', saveText)




    




             















    



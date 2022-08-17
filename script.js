
let count = 0
document.getElementById('reset').addEventListener('click',function(){
    count = 0
    display()
    
})
document.getElementById('plus').addEventListener('click',function(){ 
    count++
    display()
})
document.getElementById('minus').addEventListener('click',function(){
    if(count > 0){
        count = count - 1
    }
    display()
})

function display(){
    const displayCounter = document.getElementById('display')
    displayCounter.innerText = count
}



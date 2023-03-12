const getCount = ()=>{
    let count = 0
    const storedCount = localStorage.getItem('count')
    if(storedCount){
        count = parseInt(storedCount)
    }
    return count
}
document.getElementById('reset').addEventListener('click',function(){
    localStorage.clear()
    display()
    
})
document.getElementById('plus').addEventListener('click',function(){ 
    let plusCount = getCount()
    plusCount++
    localStorage.setItem('count',plusCount)
    display()
})
document.getElementById('minus').addEventListener('click',function(){
    let minusCount = getCount()
    if(minusCount > 0){
        minusCount = minusCount - 1
    }
    localStorage.setItem('count',minusCount)
    display()
})

function display(){
    const displayCounter = document.getElementById('display')
    const displayCount = getCount()
    console.log(displayCount)
    displayCounter.innerText = displayCount
}
display()



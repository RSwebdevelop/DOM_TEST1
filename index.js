(function(){
    const all = document.querySelector(".all");
    const headphones = document.querySelector(".headphones")
    const mobiles = document.querySelector(".mobiles")
    const laptops = document.querySelector('.laptops');


    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter
            storeImages.forEach((item) =>{
                if(filter==='all'){
                    item.style.display = 'block'
                    
                }
                else{
                    if(item.classList.contains(filter)){
                        item.style.display = 'block'
                    }
                    else{
                        item.style.display='none'
                    }
                }}
            
)})
    })
})
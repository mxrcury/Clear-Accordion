document.querySelectorAll('.accordion__btn').forEach((el)=>{
    el.addEventListener('click',()=>{
        const parent = el.parentNode;
        if(parent.classList.contains('active')){
            parent.classList.remove('active')
        }else{
            document.querySelectorAll('.accordion').forEach((child)=>{
                child.classList.remove('active')
            })
            parent.classList.add('active')
        }

        let content = el.nextElementSibling;
        if(content.style.maxHeight){
            document.querySelectorAll('.content').forEach((el)=> el.style.maxHeight = null)
        }else{
            document.querySelectorAll('.content').forEach((el)=>el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
})
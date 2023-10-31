const filterOptions=document.querySelectorAll(".filter-option");
const galleryItems=document.querySelectorAll(".items");


filterOptions.forEach(option=>{
    option.addEventListener('click',()=>{
        filterOptions.forEach(o=>o.classList.remove('active'));
        option.classList.add("active");


        const filterCategory=option.getAttribute('data-filter')
        galleryItems.forEach(item=>{
            if(item.classList.contains(filterCategory)||filterCategory==='all'){
                item.style.display="block";

            }else{
                item.style.display="none";
            }
        })
    })
})
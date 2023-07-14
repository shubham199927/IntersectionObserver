const observer = new IntersectionObserver( (enteries)=>{
    enteries.forEach((entery)=>{
        console.log(entery);
        if(entery.isIntersecting){
            entery.target.classList.add("show");
        }
        else{
            entery.target.classList.remove("show");
        }
    })
})

const hiddenElement =  document.querySelectorAll(".hidden");
hiddenElement.forEach((el)=> observer.observe(el));

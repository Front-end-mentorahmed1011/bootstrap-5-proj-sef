var notify = document.querySelectorAll(".custom-btn-2")


notify.forEach(function(item){
    item.addEventListener("click" , function(){
         alert("Message sent successfully")
    })
})
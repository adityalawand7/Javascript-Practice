var con = document.querySelector("#container")
var love = document.querySelector("i")
con.addEventListener("dblclick", function(){
    love.style.transform = "translate(-50%, -50%) scale(1)"
    setTimeout(function(){
        love.style.transform = "translate(-50%, -50%) scale(0)"
    },1000)
})

var liked = document.querySelector("#liked")

liked.addEventListener("dblclick", function(){
    liked.classList.remove("ri-heart-3-line")
    liked.classList.add("ri-heart-3-fill")
    liked.style.color = "red"
})

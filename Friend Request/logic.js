var statuss = document.querySelector("h5")
var addFriend = document.querySelector("#add")

var isFriend = 0

addFriend.addEventListener("click", function(){
    if(isFriend == 0){
        statuss.innerHTML = "Friends"
        statuss.style.color = "green"
        addFriend.textContent = "Unfollow"
        addFriend.style.backgroundColor = "grey"
        isFriend = 1
    }
    else{
        statuss.innerHTML = "Stranger"
        statuss.style.color = "red"
        addFriend.textContent = "Follow"
        addFriend.style.backgroundColor = "cadetblue"
        isFriend = 0
    }
})
let nam = document.getElementById("name")

let inputSearch = document.getElementById("searchInput")
let follower = document.getElementById("follower")
let following = document.getElementById("following")
let repo = document.getElementById("repo")
let photo = document.getElementById("photo")
let bioo = document.getElementById("bio")
let repos = document.getElementById("repos")

const handelEnter =(event) => {
    if (event.key === "Enter") {
        search()
    }
}

let search = async () =>{
    let  name = inputSearch.value.trim()
    if(name == 0){
        alert("Please Enter Something")
    }else{
        try {

            let data = await fetch(`https://api.github.com/users/${name}`)
            
            if (!data.ok) {
                throw new Error(`Error: ${data.status} - ${data.statusText}`);
            }
            
            let original = await data.json()
            
            if(original == undefined){
            }
            else{
                response();
            nam.innerHTML = original.name
            follower.innerHTML =  `${original.followers} Followers`
            following.innerHTML =  `${original.following} Following`
            repo.innerHTML =  `${original.public_repos} Repositiory`
            photo.src = original.avatar_url
            bioo.innerHTML = original.bio
            
            inputSearch.value = ""
        }
        
    } catch (error) {
        inputSearch.value = "User Not Found"
        setTimeout(() => {
            inputSearch.value = ""
        }, 1500);
        

        }
        
        
    }
}



const response = async () => {
    repos.innerHTML = ""
    let  name = inputSearch.value.trim()
    let data1 = await fetch(`https://api.github.com/users/${name}/repos`)
    let original1 = await data1.json()

    
    original1.forEach((item)=>{
        const elem = document.createElement("a")
        elem.href = item.html_url
        elem.classList.add("link")
        elem.innerText = item.name
        elem.target = "_blank"
        repos.appendChild(elem)

    })
}
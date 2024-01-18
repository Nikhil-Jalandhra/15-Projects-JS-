let toastBox = document.getElementById("toastBox")
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submited'
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix this error'
let invalidMsg =' <i class="fa-solid fa-exclamation"></i> Invalid Input. Check again'

function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML= msg;
    toastBox.appendChild(toast);

    if (msg.includes('error')) {
        toast.classList.add('error')
    }
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid')
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);
}


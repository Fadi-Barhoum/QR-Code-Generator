let qrText = document.getElementById("qrText");
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");

function generateQR(){
    if (qrText.value.trim().length === 0){
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        }, 1000);
    }else{
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("showImg");
    }
}
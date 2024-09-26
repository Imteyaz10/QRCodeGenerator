const input = document.getElementById("inp-text");
const button = document.getElementById("btn");
const img = document.getElementById("qrimg");

button.addEventListener("click", () => {
    if (input.value == "") {
        alert("Please Enter A Valid URL..");
        return;
    } else {
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
        img.alt = `QR For This ${input.value}`;
    }
})
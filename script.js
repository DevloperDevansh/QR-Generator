const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.getElementById('qr-body'); // Assuming 'qr-body' is an ID

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generateQrCode();
});

sizes.addEventListener('change', (e) => {
    selectedSize = e.target.value; // Extract the selected size
    generateQrCode(); // Pass the selected size to the generateQrCode function
});

downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyInput(){
    // if(qrText.value.length > 0){
    //     generateQRCode();
    // }
    // else{
    //     alert("Enter the text or URL to generate your QR code");
    // }
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");;
}

function generateQrCode() {
    // Clear any previous QR code
    qrContainer.innerHTML = '';

    // Get the selected size value
    const size = parseInt(sizes.value);

    // Generate the QR code
    const qrcode = new QRCode(qrContainer, {
        text: qrText.value,
        width: size,  // Use the selected size
        height: size, // Use the selected size
        colorDark: "#000000",
        colorLight: "#ffffff",
    });
}

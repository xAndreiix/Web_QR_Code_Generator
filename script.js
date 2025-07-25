function generateQRCode() {
  const text = document.getElementById("text").value;
  const qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = "";

  if (text.trim().length === 0) {
    alert("Please enter text or URL");
    return;
  }

  QRCode.toCanvas(text, { width: 200 }, function (error, canvas) {
    if (error) {
      console.error(error);
      alert("Failed to generate QR code.");
      return;
    }
    qrcodeContainer.appendChild(canvas);
  });
}

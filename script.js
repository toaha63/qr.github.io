// Extract the URL and dimensions from the path
const path = window.location.pathname; // e.g., "/qr/url=deepseek.ai&&240x320"
const parts = path.split('/qr/url=')[1].split('&&'); // ["deepseek.ai", "240x320"]

const url = decodeURIComponent(parts[0]); // URL to encode in the QR code
const dimensions = parts[1].split('x'); // ["240", "320"]
const width = parseInt(dimensions[0]); // Width of the QR code
const height = parseInt(dimensions[1]); // Height of the QR code

// Generate the QR code
QRCode.toCanvas(url, { width, height }, function (error, canvas) {
    if (error) {
        console.error(error);
        return;
    }
    document.getElementById('qrcode').appendChild(canvas);
})

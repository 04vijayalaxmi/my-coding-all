
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');
    const downloadTime = 5; // countdown time in seconds
    let remainingTime = downloadTime;

    // Update button text every second
    const timer = setInterval(() => {
        remainingTime--;
        downloadBtn.textContent = Download (${remainingTime});

        if (remainingTime <= 0) {
            clearInterval(timer);
            downloadBtn.disabled = false;
            downloadBtn.classList.add('enabled');
        }
    }, 1000);

    // Add event listener for button click to start the download
    downloadBtn.addEventListener('click', () => {
        if (!downloadBtn.disabled) {
            const a = document.createElement('a');
            a.href = 'D:\download button\name.txt'; // replace with your file URL
            a.download = 'filename.txt'; // replace with your file name
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
});
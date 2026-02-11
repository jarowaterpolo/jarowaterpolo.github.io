function updateTime() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleString();
}

setInterval(updateTime, 1000);
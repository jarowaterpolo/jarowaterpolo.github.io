function updateTime() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleString();
}

updateTime();
setInterval(updateTime, 1000);

function updateAge() {
    const now = new Date();
    const birthDate = new Date(2008, 2, 13);

    let age = now.getFullYear() - birthDate.getFullYear();

    const monthDifference = now.getMonth() - birthDate.getMonth();

    if (
        monthDifference < 0 || (monthDifference === 0 && now.getDate() < birthDate.getDate())
    ){
        age--;
    }

    document.getElementById("age").textContent = age;
}

updateAge();
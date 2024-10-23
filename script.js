const save = document.getElementById("save");

save.onclick = function() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const m = document.getElementById("m");
    
    const names = name.replace(/[^A-Za-z]/g, '');
    

    document.getElementById("name").value = names;

    const letters = /[A-Za-z]/.test(password);
    const numbers = /\d/.test(password);
    
    if (letters && numbers) {
        m.textContent = "Ваши данные записаны";

    } 
    else {
        m.textContent = "пароль должен содержать сочетание букв и цифр";
    }

};
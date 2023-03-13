// Получить модальное окно


// Получить модальное окно
var modal = document.getElementById('id01');

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


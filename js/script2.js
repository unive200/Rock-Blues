function gotoLink (link) {
  console.log (link.value)
  window.open(link.value) // Открыть в новом окне
};






if (confirm("Перейти на Music Store?")) {
   location.href = "https://musicstore.com"; // перенаправляет браузер на другой URL
 }
 //else {
  // location.href = "https://muztorg.ru";
 //}
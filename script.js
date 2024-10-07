let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
  nextImage();
},5000)

function nextImage() {
  count++;
  if(count > 4) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}
// Função para reiniciar o intervalo quando o usuário clica manualmente
function resetInterval() {
              clearInterval(interval); // Limpa o intervalo atual
              interval = setInterval(nextImage, 5000); // Reinicia o intervalo automático
            }
            
            // Adicionando evento de clique para reiniciar o intervalo quando o usuário clicar nas bolinhas manuais
            document.querySelectorAll('.manual-btn').forEach(btn => {
              btn.addEventListener('click', resetInterval);
            });
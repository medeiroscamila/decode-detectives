function typeMachineEffect() {
  const titleElement = document.querySelector('.header-title');
  const text = "Decifre Mensagens Secretas como um Superdetetive"; 
  let index = 0;

  function type() {
      if (index < text.length) {
          titleElement.textContent += text.charAt(index);
          index++;
          setTimeout(type, 100);
      }
  }

  type();
}


window.onload = function() {
  typeMachineEffect();
}


function openInstructionsModal() {
  document.getElementById("instructionsModal").style.display = "block";
}


function closeInstructionsModal() {
  document.getElementById("instructionsModal").style.display = "none";
}


function encrypt() {
  const originalText = document.getElementById("original-text").value;
  
  
  if (/[A-ZÀ-ÖØ-öø-ÿ]/.test(originalText)) {
    alert("Por favor, digite apenas letras minúsculas e sem acento.");
    return; 
  }
  
  let encryptedText = originalText.replace(/e/g, "enter");
  encryptedText = encryptedText.replace(/i/g, "imes");
  encryptedText = encryptedText.replace(/a/g, "ai");
  encryptedText = encryptedText.replace(/o/g, "ober");
  encryptedText = encryptedText.replace(/u/g, "ufat");
  document.getElementById("processed-text").value = encryptedText;
  
  
  document.querySelector(".result-container .result-image").style.display = "none";
  document.querySelector(".result-container .result-message__1").style.display = "none";
  document.querySelector(".result-container .result-message__2").style.display = "none";
  document.querySelector(".result-container .btn-copy").style.display = "block";
}


function decrypt() {
  let textToDecrypt = document.getElementById("original-text").value.trim();

  
  if (!textToDecrypt) {
      alert("Por favor, insira um texto para descriptografar.");
      return;
  }

  let decryptedText = textToDecrypt.replace(/enter/g, "e");
  decryptedText = decryptedText.replace(/imes/g, "i");
  decryptedText = decryptedText.replace(/ai/g, "a");
  decryptedText = decryptedText.replace(/ober/g, "o");
  decryptedText = decryptedText.replace(/ufat/g, "u");


  document.getElementById("processed-text").value = decryptedText;


  document.querySelector(".result-container .result-image").style.display = "none";
  document.querySelector(".result-container .result-message__1").style.display = "none";
  document.querySelector(".result-container .result-message__2").style.display = "none";
  document.querySelector(".result-container .btn-copy").style.display = "block";
}


function copyToClipboard() {
  const textToCopy = document.getElementById("processed-text").value;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert("Texto copiado para a área de transferência!");
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
}


document.querySelector('.icon-alura').addEventListener('click', function() {
    location.reload();
});

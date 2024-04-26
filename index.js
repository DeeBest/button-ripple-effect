const footerParagraph = document.getElementById('footer-paragraph');
const currentDate = new Date().getFullYear();
footerParagraph.textContent = `Created by \xA9Simphiwe ${currentDate}.`;

const button = document.getElementById('button');

button.addEventListener('mouseover', (event) => {
  const xPosition = event.pageX - button.offsetLeft;
  const yPosition = event.pageY - button.offsetTop;

  button.style.setProperty('--xPos', xPosition + 'px');
  button.style.setProperty('--yPos', yPosition + 'px');
});

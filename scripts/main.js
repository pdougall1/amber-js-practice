let cxValue = 50
const circle = document.getElementById('some-circle')
circle.setAttribute('cx', cxValue);

circle.addEventListener('click', () => {
  cxValue = cxValue + 10;
  circle.setAttribute('cx', cxValue);
});

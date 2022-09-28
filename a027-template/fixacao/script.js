let paragraph = document.getElementById('paragrafo');
let input = document.getElementById('texto')
let out = document.getElementById('out')

input.addEventListener('keyup', function () {
  console.log(input.value);
  out.innerHTML = input.value
})

function action() {
  paragraph.innerHTML = input.value
}
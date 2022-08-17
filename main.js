const colors = ["#c0eb30","#a2befe","#83293a","#c572fa","#3fea3e","#861ab1",
"#59372a","#4e2bc3","#603d16","#867ef6","#855dd7","#0e400f","#fb815f","#be7b77","#846692",
"#1c63d6","#3c8d37","#e30e76","#0db616","#0db616","#d119cd","#23495e"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerText = colors[randomNumber];
})
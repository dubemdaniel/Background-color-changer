const body = document.querySelector('body')
const btn = document.querySelector('.btn')

let colorArr = ['blue', 'yellow', 'pink', 'indigo', 'sky', 'green', 'brown', 'violet', 'red']

btn.addEventListener('click', () => {

    let random = Math.floor(Math.random() * colorArr.length)

    body.style.backgroundColor = colorArr[random]

})
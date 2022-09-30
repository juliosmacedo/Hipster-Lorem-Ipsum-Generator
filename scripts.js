const app = document.getElementById('root')
var request = new XMLHttpRequest()
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)


function fetchHipster() {
  const pRequest = document.querySelector('#p').value;
  request.open('GET', `https://hipsum.co/api/?type=hipster-latin&paras=${pRequest}`, true)
  request.onload = function () {
      let data = JSON.parse(this.response)
      const card = document.createElement('div')
      card.setAttribute('class', 'card')
      data.forEach(quote => {

          const h3 = document.createElement('h3')
          h3.textContent = quote
          container.appendChild(card)
          console.log(card)
          card.appendChild(h3)
      })

      if (request.status >= 200 && request.status < 400) {
          data.forEach(quote => {
            console.log(quote)
          })
        } else {
          console.log('error')
        }
        
  }
  request.send()
}

const fetchBtn = document.getElementById('btn')
console.log(fetchBtn)
fetchBtn.addEventListener('click', fetchHipster)




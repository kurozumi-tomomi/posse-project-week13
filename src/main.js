import './style.css'
import heroImg from './assets/hero.png'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'


document.querySelector('#app').innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${javascriptLogo}" class="framework" alt="JavaScript logo"/>
    <img src="${viteLogo}" class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Get started</h1>
    <p>Edit <code>src/main.js</code> and save to test <code>HMR</code></p>
  </div>
  
<p id="count1">0</p>

<div class="flex gap-10 flex-row justify-center items-center">
<div class="flex flex-col items-center justify-center">
  <button id="btn1" class="bg-red-400 px-2 py-1 text-white hover:bg-red-600">増やす</button>
</div>


<div class="flex flex-col items-center justify-center">
  <button id="btn2" class="bg-blue-400 px-2 py-1 text-white hover:bg-blue-600">減らす</button>
</div>

<button id="resetButton" class="bg-gray-400 px-2 py-1 text-white hover:bg-gray-600">リセット</button>

</div>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
    <h2>Documentation</h2>
    <p>Your questions, answered</p>
    <ul>
      <li>
        <a href="https://vite.dev/" target="_blank">
          <img class="logo" src="${viteLogo}" alt="" />
          Explore Vite
        </a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img class="button-icon" src="${javascriptLogo}" alt="">
          Learn more
        </a>
      </li>
    </ul>
  </div>
  <div id="social">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
    <h2>Connect with us</h2>
    <p>Join the Vite community</p>
    <ul>
      <li><a href="https://github.com/vitejs/vite" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
      <li><a href="https://chat.vite.dev/" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#discord-icon"></use></svg>Discord</a></li>
      <li><a href="https://x.com/vite_js" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#x-icon"></use></svg>X.com</a></li>
      <li><a href="https://bsky.app/profile/vite.dev" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#bluesky-icon"></use></svg>Bluesky</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`



const count1Element = document.querySelector('#count1')
const increaseButton = document.querySelector('#btn1')
let count1 = 0

increaseButton.addEventListener('click', () => {
  count1 += 1
  count1Element.textContent = count1
})

const decreaseButton = document.querySelector('#btn2')

decreaseButton.addEventListener('click', () => {
  count1 -= 1
  count1Element.textContent = count1
})

const resetButton = document.querySelector('#resetButton')

resetButton.addEventListener('click', () => {
  count1 = 0
  
  count1Element.textContent = count1
})

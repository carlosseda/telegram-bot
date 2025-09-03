(function () { const e = document.createElement('link').relList; if (e && e.supports && e.supports('modulepreload')) return; for (const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t); new MutationObserver(t => { for (const i of t) if (i.type === 'childList') for (const o of i.addedNodes)o.tagName === 'LINK' && o.rel === 'modulepreload' && a(o) }).observe(document, { childList: !0, subtree: !0 }); function n (t) { const i = {}; return t.integrity && (i.integrity = t.integrity), t.referrerPolicy && (i.referrerPolicy = t.referrerPolicy), t.crossOrigin === 'use-credentials' ? i.credentials = 'include' : t.crossOrigin === 'anonymous' ? i.credentials = 'omit' : i.credentials = 'same-origin', i } function a (t) { if (t.ep) return; t.ep = !0; const i = n(t); fetch(t.href, i) } })(); class p extends HTMLElement {constructor () { super(), this.shadow = this.attachShadow({ mode: 'open' }); const e = document.createElement('link'); e.href = 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap', e.rel = 'stylesheet', document.head.appendChild(e) }}customElements.define('font-loader-component', p); class g extends HTMLElement {constructor () { super(), this.attachShadow({ mode: 'open' }), this.basePath = this.getAttribute('base-path') || '' }connectedCallback () { this.render(), window.onpopstate = () => this.handleRouteChange() }handleRouteChange () { this.render() }render () { const e = window.location.pathname; this.getTemplate(e) } async getTemplate (e) { const a = { '/': 'home.html' }[e] || '404.html'; await this.loadPage(a) } async loadPage (e) { const a = await (await fetch(`${this.basePath}/pages/${e}`)).text(); document.startViewTransition(() => { this.shadowRoot.innerHTML = a, document.documentElement.scrollTop = 0 }) }}customElements.define('page-component', g); class u extends HTMLElement {
  constructor () { super(), this.shadow = this.attachShadow({ mode: 'open' }), this.data = {} } async connectedCallback () { await this.loadData(), await this.render() }loadData () { this.data = { title: 'Un bot de Telegram para buscar tus productos favoritos', description: 'Ahorra dinero perfeccionando y automatizando tus búsquedas gracias a nuestra IA.', buttonText: 'Comenzar' } }render () {
    this.shadow.innerHTML = `
    <style>

      *{
        box-sizing: border-box;
      }

      button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        padding: 0;
      }

      h1, h2, h3, h4, h5, h6, p{
        margin: 0;
      }

      h1, h2, h3, h4, h5, h6, p, a, span, li, label, input, button{
        font-family: "Nunito Sans", serif;
        font-optical-sizing: auto;
      }


      img{
        object-fit: cover;
        width: 100%;
      }
      
      .hero{
        background-color: hsl(198, 100%, 85%);
        height: 100vh;
        max-height: 100vh;
        position: relative;

        @media (min-width: 1024px) {
          height: 125vh;
          max-height: 125vh;
        }

        @media (min-width: 1280px) {
          height: 120vh;
          max-height: 120vh;
        }
      }

      .hero-info{
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: center;
        padding: 2rem;
        position: absolute;
        top: 5%;
        width: 100%;

        @media (min-width: 768px) {
          gap: 4rem;
        }

        @media (min-width: 1024px) {
          gap: 3rem;
        }
      }

      .hero-title h1{
        font-size: 1.5rem;
        font-weight: 800;
        text-align: center;

        @media (min-width: 768px) {
          font-size: 3rem;
        }
      }

      .hero-description p{
        color: hsl(0, 0%, 50%);
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 2rem;
        text-align: center;

        @media (min-width: 768px) {
          font-size: 2rem;
        }
      }

      .hero-button button{
        background-color: hsl(200, 77%, 52%);
        border-radius: 1rem;
        color: hsl(0, 0%, 100%);
        font-size: 1.1rem;
        font-weight: 600;
        padding: 1rem 2rem;

        @media (min-width: 768px) {
          font-size: 2rem;
        }
      }

      .hero-button button:hover{
        background-color: hsl(200, 77%, 42%);
      }

      .plane{
        animation: paper-plane-scoping 2s alternate infinite;
        animation-timing-function: linear;
        bottom: 35%;
        left: 35%;
        position: absolute;
        width: 30%;
        z-index: 1005;

        @media (min-width: 768px) {
          bottom: 40%;
          left: 35%;
          width: 25%;
        }

        @media (min-width: 1024px) {
          bottom: 40%;
          left: 40%;
          width: 20%;
        }

        @media (min-width: 1280px) {
          bottom: 55%;
          left: 45%;
          width: 10%;
        }
      }

      .plane svg {
        animation: paper-plane-soaring 4s forwards infinite;
        animation-timing-function: ease-in-out;
        width: 100%;
      }

      @-webkit-keyframes paper-plane-scoping {
        0% {
          transform: translateY(0px);
        }

        100% {
          transform: translateY(100px);
        }
      }

      @-webkit-keyframes paper-plane-soaring {
        0% {
          transform: rotate(0deg);
        }
        40% {
          transform: rotate(15deg);
        }
        50% {
          transform: rotate(15deg);
        }
        60% {
          transform: rotate(-10deg);
        }
        70% {
          transform: rotate(-10deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }

      .clouds {
        bottom: 0;
        left: 0;
        overflow: hidden;
        position: absolute;
        right: 0;
        top: 45vh;

        @media (min-width: 1280px) {
          top: 35vh;
        }
      }

      .cloud {
        animation: cloud-movement 8s linear infinite forwards;
        fill: hsl(0, 0%, 100%);
        opacity: 1;
        position: absolute;
        right: 0;
        top: 20%;
      }

      .cloud.front {
        z-index: 9;
      }

      .cloud.background {
        z-index: 1;
      }

      .cloud.smaller {
        margin-right: 20vw;
        width: 10vw;
        margin-top: 5vh;
      }

      .cloud.small {
        margin-right: 10vw;
        width: 15vw;
      }

      .cloud.big {
        margin-top: 5vh;
        margin-right: 8vw;
        width: 40vw;
      }

      .cloud.massive {
        margin-top: 2vh;
        margin-right: 0;
        width: 50vw;
      }

      .slow {
        animation-duration: 9.2s;
      }

      .slower {
        animation-duration: 11.2s;
      }

      .slowest {
        animation-duration: 13.5s;
      }

      .super-slow {
        animation-duration: 20.5s;
      }

      @keyframes cloud-movement {
        0% {
          opacity: 0.1;
          transform: translateX(20vw);
        }
        10% {
          opacity: 0.7;
        }
        90% {
          opacity: 0;
        }
        100% {
          opacity: 0;
          transform: translateX(-50vw);
        }
      }

      .hero-image{
        bottom: 2%;
        left: 15%;
        position: absolute;
        width: 70%;
        z-index: 1001;

        @media (min-width: 768px) {
          bottom: 10%;
          left: 25%;
          width: 50%;
        }

        @media (min-width: 1024px) {
          bottom: 15%;
          left: 37%;
          width: 30%;
        }

        @media (min-width: 1280px) {
          bottom: 15%;
          left: 38%;
          width: 25%;
        }
      }

      .hero-image img{
        filter: drop-shadow(0 1rem 1rem hsl(200, 87%, 15%));
      }

      .hero-footer-background-waves,
      .hero-footer-background-color {
        margin: 0;
        padding: 0;
      }

      .hero-footer{
        bottom: 0;
        position: absolute;
        width: 100%;
        z-index: 10;
      }

      .hero-footer-background-waves svg{
        display: block; 
        fill: hsl(200, 77%, 52%);
        width: 100%;
      }

      .hero-footer-background-color{
        background-color: hsl(200, 77%, 52%);
        height: 10rem;

        @media (min-width: 1280px) {
          height: 1rem;
        }
      }
    </style>

    <section class="hero">
      <div class="hero-info">
        <div class="hero-title">
          <h1>${this.data.title}</h1>
        </div>
        <div class="hero-description">
          <p>
            ${this.data.description}
          </p>
        </div>
        <div class="hero-button">
          <button>${this.data.buttonText}</button>
        </div>
      </div>

      <div class="plane">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 1131.53 379.304" enable-background="new 0 0 1131.53 379.304"
        xml:space="preserve">
        <polygon fill="hsl(0, 0%, 85%)" points="72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223  "/>
        <polygon fill="hsl(60, 1%, 77%)" points="1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102   "/>
        </svg>
      </div>
        
      <div class="clouds">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 762 331" class="cloud big front slowest">
            <path d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
            c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
            C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
            S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"/>
        </svg>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 762 331" class="cloud background smaller">
            <path d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
            c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
            C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
            S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"/>
        </svg>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 762 331" class="cloud small slow">
            <path d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
            c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
            C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
            S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"/>
        </svg>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 762 331" class="cloud massive super-slow">
            <path d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
            c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
            C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
            S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"/>
        </svg>
      </div>
        
      <div class="hero-image">
        <picture>
          <source srcset="./images/hero.webp" media="(min-width: 1920px)">
          <source srcset="./images/hero.webp" media="(min-width: 1024px)">
          <source srcset="./images/hero.webp" media="(min-width: 768px)">
          <source srcset="./images/hero.webp" media="(min-width: 480px)">
          <img src="./images/hero.webp" alt="Imagen de prueba de Picsum">
        </picture>
      </div>

      <div class="hero-footer">
        <div class="hero-footer-background-waves">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path d="M0,64L34.3,101.3C68.6,139,137,213,206,234.7C274.3,256,343,224,411,192C480,160,549,128,617,101.3C685.7,75,754,53,823,58.7C891.4,64,960,96,1029,122.7C1097.1,149,1166,171,1234,165.3C1302.9,160,1371,128,1406,112L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
          </svg>
        </div>
        <div class="hero-footer-background-color"></div>
      </div> 
    </section>
    `
  }
}customElements.define('hero-component', u); class f extends HTMLElement {
  constructor () { super(), this.shadow = this.attachShadow({ mode: 'open' }) } async connectedCallback () { await this.loadData(), await this.render() } async loadData () { this.data = [{ title: 'Filtra' }, { title: 'Automatiza' }, { title: 'Ahorra' }] }render () {
    this.shadow.innerHTML = `
    <style>

      *{
        box-sizing: border-box;
      }

      h1, h2, h3, h4, h5, h6, p, a, span, li, label, input, button{
        font-family: "Nunito Sans", serif;
        font-optical-sizing: auto;
      }

      ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      .features-titles{
        align-items: center;
        background-color: hsl(200, 77%, 52%);
        display: flex;
        flex-direction: column;
        height: 175vh;
        justify-content: center;
        position: relative;
        width: 100%;

        @media (min-width: 1024px) {
          height: 200vh;
        }

        @media (min-width: 1280px) {
          height: 250vh;
        }
      }

      .features-titles ul li {
        color: hsl(0, 0%, 100%);
        font-size: 3rem;
        height: 100vh;
        margin-top: calc(-80vh + 1.1em);
        padding-top: 50vh;
        position: sticky;
        top: 0;
        transform: translateY(calc((var(--index) - var(--items)* .5)* 1.5em));

        @media (min-width: 768px) {
          font-size: 5rem;
        }
      }

      .features-titles ul li:first-child{
        margin-top: 0;
      }

      .features-titles-footer{
        background-color: hsl(240, 33%, 99%);
        bottom: 0;
        display: block;
        position: absolute;
        width: 100%;
      }

      .features-titles-footer-backgroud-waves svg{
        fill: hsl(200, 77%, 52%);
        width: 100%;
      }

      .features-titles-footer-background-color{
        background-color: hsl(240, 33%, 99%);
        height: 10rem;
      }
    </style>

    <section class="features-titles">
      <div class="features-titles-list">
        <ul style="--items: ${this.data.length}"></ul>
      </div>
      <div class="features-titles-footer">
        <div class="features-titles-footer-backgroud-waves">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,256L30,229.3C60,203,120,149,180,133.3C240,117,300,139,360,170.7C420,203,480,245,540,224C600,203,660,117,720,74.7C780,32,840,32,900,53.3C960,75,1020,117,1080,160C1140,203,1200,245,1260,266.7C1320,288,1380,288,1410,288L1440,288L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
        </div>
      </div>
    </section>
    `, this.data.forEach((e, n) => { const a = this.shadow.querySelector('ul'); const t = document.createElement('li'); t.style.setProperty('--index', n), t.textContent = e.title, a.appendChild(t) })
  }
}customElements.define('features-titles-component', f); class w extends HTMLElement {
  constructor () { super(), this.shadow = this.attachShadow({ mode: 'open' }) } async connectedCallback () { await this.loadData(), await this.render() } async loadData () { this.data = { title: 'Fácil de usar', description: 'Tan simple como decir qué productos buscas, las características que te interesan y cuanto estás dispuesto a pagas. Nuestro bot se encargará de buscarlo por ti y te notificará cuando encuentre algo que se ajuste a tus preferencias.', images: { xs: './images/airpods/go_airpods__ed69m4vdask2_large.png', sm: './images/airpods/go_airpods__ed69m4vdask2_large.png', md: './images/airpods/go_airpods__ed69m4vdask2_large.png', lg: './images/airpods/go_airpods__ed69m4vdask2_large.png' }, cards: [{ title: 'Siri, text Rigo, "I\'m on my way"', color: 'white', images: { xs: './images/text/go_iphone__rgcqxe88k6y6_small.png', sm: './images/text/go_iphone__rgcqxe88k6y6_small.png', md: './images/text/go_iphone__rgcqxe88k6y6_small.png', lg: './images/text/go_iphone__rgcqxe88k6y6_small.png' } }, { title: 'Siri, remind me to water plants when I get home', color: 'black', images: { xs: './images/remind/go_tile_1__c3xn44p0q22q_large.png', sm: './images/remind/go_tile_1__c3xn44p0q22q_large.png', md: './images/remind/go_tile_1__c3xn44p0q22q_large.png', lg: './images/remind/go_tile_1__c3xn44p0q22q_large.png' } }, { title: 'Siri, text Rigo, "I\'m on my way"', color: 'white', images: { xs: './images/helpful/go_tile_2__r3t0enbq5lea_large.jpg', sm: './images/helpful/go_tile_2__r3t0enbq5lea_large.jpg', md: './images/helpful/go_tile_2__r3t0enbq5lea_large.jpg', lg: './images/helpful/go_tile_2__r3t0enbq5lea_large.jpg' } }] } }render () {
    this.shadow.innerHTML = `
    <style>

      *{
        box-sizing: border-box;
      }

      h1, h2, h3, h4, h5, h6, p{
        margin: 0;
      }

      h1, h2, h3, h4, h5, h6, p, a, span, li, label, input, button{
        font-family: "Nunito Sans", serif;
        font-optical-sizing: auto;
      }

      img{
        object-fit: cover;
        width: 100%;
      }

      .cards{
        align-items: center;
        background: linear-gradient(hsl(240, 33%, 99%), hsl(334, 60%, 83%), hsl(215, 58%, 34%));
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem;

        @media (min-width: 768px) {
          padding: 2rem 10%;
        }

        @media (min-width: 1280px) {
          padding: 2rem 20%;
        }
      }

      .cards-info{
        display: flex;
        flex-direction: column;
        gap: 5rem;
        padding-bottom: 5rem;

        @media (min-width: 1024px) {
          gap: 7rem;
        }

        @media (min-width: 1280px) {
          gap: 3rem;
        }

        @media (min-width: 3000px) {
          gap: 15rem;
        }
      }

      .cards-title{
        align-items: center;
        display: flex;
        position: relative;

        @media (min-width: 1280px) {
          width: 80%;
        }
      }

      .cards-title-gradient h2{
        background: linear-gradient(270deg,  hsl(331, 52%, 70%), hsl(219, 50%, 36%));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-size: 5rem;
        font-weight: 700;
        
        @media (min-width: 768px) {
          font-size: 10rem;
          line-height: 11rem;
        }

        @media (min-width: 1280px) {
          font-size: 10rem;
          line-height: 11rem;
        }
      }

      .cards-image{
        position: absolute;
        left: 55%; 
        top: 50%;
        width: 40%; 

        @media (min-width: 768px) {
          left: 60%;
          width: 30%;
        }

        @media (min-width: 1024px) {
          left: 50%;
          width: 30%;
        }

        @media (min-width: 1280px) {
          left: 70%;
          top: 30%;
          width: 30%;
        }

        @media (min-width: 3000px) {
          left: 60%;
          top: 30%;
          width: 20%;
        }
      }

      .cards-description p{
        color: hsl(240, 2%, 55%);
        font-size: 1.2rem;

        @media (min-width: 768px) {
          font-size: 2rem;
        }
      }

      .cards-list{
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .card{
        border-radius: 2rem;
        display: grid;
        gap: 2rem;
        grid-template-columns: 1fr;
        padding: 2.5rem 2.5rem 0 2.5rem;

        @media (min-width: 1024px) {
          grid-template-columns: 1fr 1fr;
        }

        @media (min-width: 1280px) {
          grid-template-columns: 1fr 1fr;
        }
      }

      .card.white{
        background: hsl(0, 0%, 100%);
      }

      .card.black{
        background: linear-gradient(hsl(209, 54%, 22%), hsl(240, 47%, 9%));
        padding: 2.5rem;
      }

      .card-title h4{
        font-size: 2rem;
        font-weight: 700;
        line-height: 2rem;

        @media (min-width: 768px) {
          font-size: 3rem;
          line-height: 3rem;
        }
      }

      .card.white .card-title h4 span{
        -webkit-background-clip: text;
        background: linear-gradient(270deg,  hsl(331, 52%, 70%), hsl(219, 50%, 36%));
        background-clip: text;
        color: transparent;
      }

      .card.black .card-title h4{
        color: hsl(0, 0%, 100%);
      }

      .card.black .card-title h4 span{
        -webkit-background-clip: text;
        background: linear-gradient(270deg,  hsl(334, 98%, 82%), hsl(312, 53%, 68%));
        background-clip: text;
        color: transparent;
      }

      .card-image img{
        display: block;
      }
    </style>

    <section class="cards">
      <div class="cards-info">
        <div class="cards-title">
          <div class="cards-title-gradient">
            <h2>${this.data.title}</h2>
          </div>
          <div class="cards-image">
            <picture>
              <source srcset="${this.data.images.lg}" media="(min-width: 1920px)">
              <source srcset="${this.data.images.md}" media="(min-width: 1024px)">
              <source srcset="${this.data.images.sm}" media="(min-width: 768px)">
              <source srcset="${this.data.images.xs}" media="(min-width: 480px)">
              <img src="${this.data.images.xs}" alt="Imagen de prueba de Picsum">
            </picture>
          </div>
        </div>
        <div class="cards-description">
          <p>
            ${this.data.description}
          </p>
        </div>
      </div>
      <div class="cards-list"></div>
    </section>
    `, this.data.cards.forEach(e => { const n = this.shadow.querySelector('.cards-list'); const a = document.createElement('div'); a.classList.add('card', e.color), n.appendChild(a); const t = document.createElement('div'); t.classList.add('card-title'), a.appendChild(t); const i = document.createElement('h4'); i.textContent = e.title, t.appendChild(i); const o = document.createElement('div'); o.classList.add('card-image'), a.appendChild(o); const s = document.createElement('picture'); o.appendChild(s); const d = document.createElement('source'); d.srcset = e.images.lg, d.media = '(min-width: 1920px)', s.appendChild(d); const l = document.createElement('source'); l.srcset = e.images.md, l.media = '(min-width: 1024px)', s.appendChild(l); const c = document.createElement('source'); c.srcset = e.images.sm, c.media = '(min-width: 768px)', s.appendChild(c); const m = document.createElement('source'); m.srcset = e.images.xs, m.media = '(min-width: 480px)', s.appendChild(m); const h = document.createElement('img'); h.src = e.images.xs, h.alt = 'Imagen de prueba de Picsum', s.appendChild(h) })
  }
}customElements.define('cards-component', w); class x extends HTMLElement {
  constructor () { super(), this.shadow = this.attachShadow({ mode: 'open' }), this.data = {} } async connectedCallback () { await this.loadData(), await this.render() } async loadData () { this.data = { title: 'promote a new product or service', info: 'star your business today with a great and strong landing page mado to enchance the marketers workflow.', featured: 'subscripción por un año', start: 'Empieza a usarlo', instructions: 'Te enviaremos un correo electrónico con las instrucciones para que puedas comenzar a utilizar nuestro bot.', textButton: 'Subscribirme' } }render () {
    this.shadow.innerHTML = `
    <style>

      *{
        box-sizing: border-box;
      }

      button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        padding: 0;
      }

      h1, h2, h3, h4, h5, h6, p{
        margin: 0;
      }

      h1, h2, h3, h4, h5, h6, p, a, span, li, label, input, button{
        font-family: "Nunito Sans", serif;
        font-optical-sizing: auto;
      }

      img{
        object-fit: cover;
        width: 100%;
      }

      .subscription-form{
        align-items: center;
        background-color: hsl(198, 100%, 85%);
        display: grid;
        gap: 2rem;
        grid-template-columns: 1fr;
        min-height: 100vh;
        padding: 3rem 1rem;

        @media (min-width: 768px) {
          padding: 3rem 10%;
        }

        @media (min-width: 1280px) {
          grid-template-columns: 1fr 1fr;
          padding: 3rem 10%;
        }
      }

      .explanation {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        @media (min-width: 1280px) {
          align-items: flex-start;
        }
      }

      .explanation-title h3 {
        font-size: 2rem;
        font-weight: 800;
        text-align: center;

        @media (min-width: 768px) {
          font-size: 3rem;
        }

        @media (min-width: 1280px) {
          font-size: 3rem;
          line-height: 3rem;
          text-align: left;
        }
      }

      .explanation-info p{
        color: hsl(0, 0%, 50%);
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 2rem;
        text-align: center;

        @media (min-width: 768px) {
          font-size: 2rem;
        }

        @media (min-width: 1280px) {
          text-align: left;
        }
      }

      .explanation-featured{
        background-color: rgba(0, 0, 0, 0.5); 
        backdrop-filter: blur(10px);
        padding: 1rem;
        width: max-content;
      }

      .explanation-featured span{
        color: hsl(0, 0%, 100%);
        font-size: 1.2rem;
        font-weight: 600;

        @media (min-width: 768px) {
          font-size: 2rem;
        }
      }

      .form-container {
        background-color: white;
        border-radius: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
        width: 100%;
      }

      .info-area {
        display: flex;
      }

      .info-area-text {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .info-area-title h4 {
        font-size: 1.8rem;
        font-weight: 800;

        @media (min-width: 768px) {
          font-size: 2rem;
        }
      }

      .info-area-subtitle span {
        color: hsl(0, 0%, 50%);
        font-size: 1rem;
        font-weight: 600;

        @media (min-width: 768px) {
          font-size: 1.5rem;
        }
      }

      .info-area-icon svg {
        animation: top-bottom 2s infinite;
        width: 5rem;
        fill: hsl(0, 0%, 70%);
        text-align: center;
      }

      @keyframes top-bottom {
        0%, 100%, 20%, 50%, 80% {
          -webkit-transform: translateY(0);
          -ms-transform: translateY(0);
          transform: translateY(0);
        }

        40% {
          -webkit-transform: translateY(-8px);
          -ms-transform: translateY(-8px);
          transform: translateY(-8px);
        }
        60% {
          -webkit-transform: translateY(-4px);
          -ms-transform: translateY(-4px);
          transform: translateY(-4px);
        }
      }

      .form form{
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
      }

      .form-element-input input {
        border: 2px solid rgb(192, 192, 192);
        border-radius: 1.5rem;
        font-size: 1rem;
        outline: none;
        padding: 1rem;
        width: 100%;

        @media (min-width: 768px) {
          font-size: 1.5rem;
        }
      }

      .form-element-input input:hover {
        border-color: hsl(200, 77%, 52%);
      }

      .form-element-button button{
        background-color: hsl(200, 77%, 52%);
        border-radius: 1rem;
        color: hsl(0, 0%, 100%);
        font-size: 1.2rem;
        font-weight: 600;
        padding: 1rem;
        width: 100%;

        @media (min-width: 768px) {
          font-size: 1.5rem;
        }
      }

      .form-element-button button:hover{
        background-color: hsl(200, 77%, 42%);
      }
    </style>

    <section class="subscription-form">
      <div class="explanation">
        <div class="explanation-title">
          <h3>${this.data.title}</h3>
        </div>
        <div class="explanation-info">
          <p>${this.data.info}</p>
        </div>
        <div class="explanation-featured">
          <span>${this.data.featured}</span>
        </div>
      </div>
      <div class="form-container">
        <div class="info-area">
          <div class="info-area-text">
            <div class="info-area-title">
              <h4>${this.data.start}</h4>
            </div>
            <div class="info-area-subtitle">
              <span>${this.data.instructions}</span>
            </div>
          </div>
          <div class="info-area-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>hand-pointing-down</title><path d="M9.9,21V11L6.7,12.69L6.5,12.72C6.19,12.72 5.93,12.6 5.74,12.4L5,11.63L9.9,7.43C10.16,7.16 10.5,7 10.9,7H17.4C18.17,7 18.9,7.7 18.9,8.5V12.86C18.9,13.47 18.55,14 18.05,14.2L13.11,16.4L11.9,16.53V21A1,1 0 0,1 10.9,22A1,1 0 0,1 9.9,21M18.9,5H10.9V2H18.9V5Z" /></svg>
          </div>
        </div>
        <div class="form">
          <form>
            <div class="form-element">
              <div class="form-element-input">
                <input type="text" placeholder="Dirección de correo">
              </div>
            </div>
            <div class="form-element-button">
              <button>${this.data.textButton}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    `
  }
}customElements.define('subscription-form-component', x); class b extends HTMLElement {
  constructor () { super(), this.shadow = this.attachShadow({ mode: 'open' }), this.data = [] } async connectedCallback () { await this.loadData(), await this.render() } async loadData () { this.data = [{ title: '¿Qué elementos principales se incluyen en el diseño de un sitio web personalizado?', content: 'Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium ratione itaque earum aperiam aliquam, error culpa fugiat ea corporis impedit. Ea illo et facilis nulla esse distinctio iste nesciunt.' }, { title: '¿Cuáles son los principios más importantes del diseño de sitios web?', content: 'Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium ratione itaque earum aperiam aliquam, error culpa fugiat ea corporis impedit. Ea illo et facilis nulla esse distinctio iste nesciunt.' }, { title: '¿Qué pasos incluye el proceso de diseño web profesional?', content: 'Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium ratione itaque earum aperiam aliquam, error culpa fugiat ea corporis impedit. Ea illo et facilis nulla esse distinctio iste nesciunt.' }] }render () {
    this.shadow.innerHTML = `
    <style>

      *{
        box-sizing: border-box;
      }

      h1, h2, h3, h4, h5, h6, p{
        margin: 0;
      }

      h1, h2, h3, h4, h5, h6, p, a, span, li, label, input, button{
        font-family: "Nunito Sans", serif;
        font-optical-sizing: auto;
      }

      .faqs{
        background-color: hsl(0, 0%, 100%);
        padding: 2rem;

        @media (min-width: 1280px) {
          padding: 2rem 20%;
        }
      }

      .faqs-title{
        padding: 2rem 0;
      }

      .faqs-title h3{
        font-weight: 600;
        font-size: 2rem;
        text-transform: uppercase;
      }

      .faqs-content{
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .faq:first-child{
        border-top: 1px solid black;
      }

      .faqs summary{
        border-bottom: 1px solid black;
        display: grid;
        font-size: 1.3rem;
        gap: 2rem;
        grid-template-columns: 8fr 1fr;
        padding: 1rem 0;
      }

      .faqs details[open] summary{
        border: none;
      }

      .faqs details[open]{
        border-bottom: 1px solid black;
        padding-bottom: 2rem;
      }

      .faqs details p{
        font-size: 1.5rem;
        line-height: 1.5;
      }

      .faq-button{
        cursor: pointer;
      }

      .faq-button svg{
        width: 3rem;
      }
    </style>

    <section class="faqs">
      <div class="faqs-title">
        <h3>Preguntas frecuentes</h3>
      </div>
      <div class="faqs-content"></div>
    </section>
    `, this.data.forEach(e => {
      const n = this.shadow.querySelector('.faqs-content'); const a = document.createElement('div'); a.classList.add('faq'), n.appendChild(a); const t = document.createElement('details'); t.name = 'faqs', a.appendChild(t); const i = document.createElement('summary'); t.appendChild(i); const o = document.createElement('div'); o.classList.add('faq-content-title'), i.appendChild(o); const s = document.createElement('h3'); s.textContent = e.title, o.appendChild(s); const d = document.createElement('div'); d.classList.add('faq-button'), i.appendChild(d), d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>plus</title>
                  <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>`;const l = document.createElement('p'); l.textContent = e.content, t.appendChild(l)
    })
  }
}customElements.define('faqs-component', b); class v extends HTMLElement {
  constructor () { super(), this.shadow = this.attachShadow({ mode: 'open' }) }connectedCallback () { this.loadData().then(() => this.render()) } async loadData () { this.data = { title: 'Youthing' } }render () {
    this.shadow.innerHTML = `
    <style>
      .not-found{
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        height: 100vh;
        width: 100%;
      }

      .not-found img{
        height: 10rem;
        width: 10rem;
      }

      .not-found h1{
        color: hsl(0, 0%, 100%);
        font-family: 'Lato', sans-serif;
        font-size: 3rem;
        font-weight: 700;
        margin: 0;
        text-shadow: 2px 0 0 hsl(0deg 0% 0%), -2px 0 0 hsl(0deg 0% 0%), 0 2px 0 hsl(0deg 0% 0%), 0 -2px 0 hsl(0deg 0% 0%), 1px 1px hsl(0deg 0% 0%), -1px -1px 0 hsl(0deg 0% 0%), 1px -1px 0 hsl(0deg 0% 0%), -1px 1px 0 hsl(0deg 0% 0%);
      }

      .not-found p{
        color: hsl(0, 0%, 0%);
        font-family: 'Lato', sans-serif;
        font-size: 1.5rem;
        font-weight: 400;
        margin: 1rem;
      }

      .not-found a{
        background-color: hsl(0deg 0% 0%);
        border-radius: 0.5rem;
        color: hsl(0, 0%, 100%);
        font-family: 'Lato', sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
        padding: 1rem 2rem;
        text-decoration: none;
      }
    </style>

    <div class="not-found">
      <h1>${this.data.title}</h1>
      <p>La página que buscas no existe</p>
      <a href="/">Volver al inicio</a>
    </div>
    `, this.shadow.querySelector('a').addEventListener('click', e => { e.preventDefault(), window.history.pushState({}, '', '/'), window.dispatchEvent(new PopStateEvent('popstate')) })
  }
}customElements.define('notfound-component', v)

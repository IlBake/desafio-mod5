function e(e,n,t,a){Object.defineProperty(e,n,{get:t,set:a,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=n.parcelRequired5de;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){a[e]=n},n.parcelRequired5de=i),i.register("27Lyk",(function(n,t){var a,i;e(n.exports,"register",(()=>a),(e=>a=e)),e(n.exports,"resolve",(()=>i),(e=>i=e));var s={};a=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)s[n[t]]=e[n[t]]},i=function(e){var n=s[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i.register("8PK3s",(function(e,n){e.exports=new URL(i("27Lyk").resolve("jIFtP"),import.meta.url).toString()})),i.register("Je3y0",(function(e,n){e.exports=new URL(i("27Lyk").resolve("9pGeL"),import.meta.url).toString()})),i.register("6Xasi",(function(e,n){e.exports=new URL(i("27Lyk").resolve("h0fmy"),import.meta.url).toString()})),i("27Lyk").register(JSON.parse('{"aT88m":"index.79a4a288.js","jIFtP":"papel.5f334517.png","9pGeL":"piedra.fbd93f21.png","h0fmy":"tijera.1329e682.png"}'));const s={data:{currentGame:{cpuPlay:"",userPlay:""},playHistory:{player:0,cpu:0,result:""}},listeners:[],suscribe(e){this.listeners.push(e)},init(){const e=localStorage.getItem("Saved-play");this.setState(JSON.parse(e)||this.data)},setState(e){this.data=e;for(const e of this.listeners)e();localStorage.setItem("Saved-play",JSON.stringify(this.data))},getState(){return this.data},aleatoryPlayPc:()=>["piedra","papel","tijera"][Math.floor(3*Math.random())],setMove(e){const n=this.getState(),t=this.aleatoryPlayPc();n.currentGame.cpuPlay=t,n.currentGame.userPlay=e,s.setState(n),this.whoWin(e,t)},whoWin(e,n){if(["piedra"==e&&"tijera"==n,"papel"==e&&"piedra"==n,"tijera"==e&&"papel"==n].includes(!0))return this.pushHistory("Ganador");if(["piedra"==e&&"papel"==n,"papel"==e&&"tijera"==n,"tijera"==e&&"piedra"==n].includes(!0))return this.pushHistory("Perdedor");return["piedra"==e&&"piedra"==n,"papel"==e&&"papel"==n,"tijera"==e&&"tijera"==n].includes(!0)?this.pushHistory("Empates"):void 0},pushHistory(e,n,t){const a=this.getState();n=a.playHistory.player,t=a.playHistory.cpu,"Ganador"==e&&this.setState({...a,playHistory:{player:n+1,cpu:t,result:"Ganaste"}}),"Perdedor"==e&&this.setState({...a,playHistory:{player:n,cpu:t+1,result:"Perdiste"}}),"Empates"==e&&this.setState({...a,playHistory:{player:n,cpu:t,result:"Empate"}})}};function r(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=document.createElement("div"),n=document.createElement("style"),t=this.getAttribute("value")||"Click me";e.innerHTML=`\n        <div class="contenedor">\n           \n              <input type="button" class="button" value="${t}" >\n              \n              </div>`,n.innerHTML="\n              \n              .conteiner{\n                  display:flex;\n                  justify-content:center;\n                  aling-items:center\n              }\n              .button{\n                  color: white;\n                  height:87px ;\n                  font-size: 45px;\n                  border: 10px solid #001997;\n                  border-radius: 10px;\n                  background: #006CFC;\n                  width:322px ;\n              }\n              ",this.appendChild(e),this.appendChild(n)}}customElements.define("my-button",e)}function o(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=document.createElement("div"),n=document.createElement("style");e.innerHTML='\n              <div class="container">\n              <h1 class = "title">\n              Piedra, \n              <br>\n              Papel ó\n              <br>\n              tijeta\n              <br>\n              \n              </h1>\n              </div>',n.innerHTML="\n              .container{\n                  display:flex;\n                  justify-content:center;\n                  aling-items:center\n              }\n              .title{\n                 color: #009048;;\n                  font-size: 80px;\n                  font-weight: 700;\n                  font-family: 'Odibee Sans', cursive;\n                  text-align: center;\n                  margin: 25px auto;\n              }\n              ",this.appendChild(e),this.appendChild(n)}}customElements.define("my-text",e)}function l(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=i("8PK3s"),n=document.createElement("div"),t=document.createElement("style");n.className="paper",n.innerHTML=`\n      <img src="${e}" alt="papel" class  ="paper-img" />\n      `,t.innerHTML="\n      .paper{\n        display: flex;\n      }\n      .paper-img{\n        height: 145px;\n        width: 61px;\n        object-position: 0px 40px;\n      }\n      @media (min-width: 768px) {\n        .paper-img{\n          height: 168px;\n          width: 69px;\n          object-position: 0px 60px;\n        }",this.appendChild(n),this.appendChild(t)}}customElements.define("mano-papel",e)}function c(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=i("Je3y0"),n=document.createElement("img"),t=document.createElement("style");n.className="piedra-img",n.src=e,t.innerHTML="\n     \n      .piedra-img{\n        height: 145px;\n        width: 61px;\n        object-position: 0px 40px;\n      }\n      @media (min-width: 768px) {\n        .piedra-img{\n          height: 168px;\n          width: 69px;\n          object-position: 0px 60px;\n        }",n.appendChild(t),this.appendChild(n)}}customElements.define("mano-piedra",e)}function p(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=i("6Xasi"),n=document.createElement("img"),t=document.createElement("style");n.className="tijera-img",n.src=e,t.innerHTML="\n      .tijera-img{\n        height: 145px;\n        width: 61px;\n        object-position: 0px 40px;\n      }\n      @media (min-width: 768px) {\n        .tijera-img{\n          height: 168px;\n          width: 69px;\n          object-position: 0px 60px;\n        }",this.appendChild(t),this.appendChild(n)}}customElements.define("mano-tijera",e)}function d(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div"),t=document.createElement("style");n.innerHTML='\n          <div class = "contador"> \n          <div class = "contador__number">  </div>\n          <svg class="svg">\n                <circle class="svg-circle" r="90" cx="140" cy="140"></circle>\n            </svg>\n          </div>\n              \n              ',t.innerHTML="\n          .contador{\n              margin: 0 auto;\n          }\n          .contador__number{\n              position: relative;\n              top: 169px;\n              font-weight: 400;\n              font-size: 72px;\n              text-align: center;\n              font-family: 'Faster One', cursive;\n              color: #000;\n          }\n              .svg {\n          width: 260px;\n          height: 280px;\n          transform: rotateY(-180deg) rotateZ(-90deg);\n        }\n        \n        .svg-circle {\n          stroke-dasharray: 570px;\n          stroke-dashoffset: 0px;\n          stroke-linecap: round;\n          stroke-width: 19px;\n          stroke: #fb0000;\n          fill: none;\n          animation: countdown 5s linear infinite forwards;\n        }\n        \n        @keyframes countdown {\n          from {\n            stroke-dashoffset: 0px;\n          }\n          to {\n            stroke-dashoffset: 580px;\n          }\n        }\n       \n          \n              ";let a=5;const i=n.querySelector(".contador__number");i.textContent=a;const s=setInterval((()=>{a--,i.textContent=a,a<3&&clearInterval(s)}),1e3);e.appendChild(n),e.appendChild(t)}}customElements.define("my-contador",e)}function u(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=document.createElement("div"),n=s.getState();console.log(n,"state");const t=n.playHistory.result,a=document.createElement("style");e.innerHTML=`\n  <div class= "star-container">\n  <h1 class = "star-title">Resultado</h1>\n  \n \n  <text-result></text-result>\n  \n  <div class="star">\n  <h2 class ="result">${t}</h2>\n  </div>\n  </div>\n  \n  `,a.innerHTML="\n      \n      .star-container {   \n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        border: 5px solid black;\n        border-radius: 10px;\n        width: 400px;\n        height: 500px;\n        margin-top: 40px;\n        background-color: #ffffff;\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='400' cy='400' r='36.9%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%231EA2FF'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='400' cy='400' r='80.9%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%231E85FF'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='800'/%3E%3Cg fill-opacity='0.89'%3E%3Cpath fill='url(%23b)' d='M998.7 439.2c1.7-26.5 1.7-52.7 0.1-78.5L401 399.9c0 0 0-0.1 0-0.1l587.6-116.9c-5.1-25.9-11.9-51.2-20.3-75.8L400.9 399.7c0 0 0-0.1 0-0.1l537.3-265c-11.6-23.5-24.8-46.2-39.3-67.9L400.8 399.5c0 0 0-0.1-0.1-0.1l450.4-395c-17.3-19.7-35.8-38.2-55.5-55.5l-395 450.4c0 0-0.1 0-0.1-0.1L733.4-99c-21.7-14.5-44.4-27.6-68-39.3l-265 537.4c0 0-0.1 0-0.1 0l192.6-567.4c-24.6-8.3-49.9-15.1-75.8-20.2L400.2 399c0 0-0.1 0-0.1 0l39.2-597.7c-26.5-1.7-52.7-1.7-78.5-0.1L399.9 399c0 0-0.1 0-0.1 0L282.9-188.6c-25.9 5.1-51.2 11.9-75.8 20.3l192.6 567.4c0 0-0.1 0-0.1 0l-265-537.3c-23.5 11.6-46.2 24.8-67.9 39.3l332.8 498.1c0 0-0.1 0-0.1 0.1L4.4-51.1C-15.3-33.9-33.8-15.3-51.1 4.4l450.4 395c0 0 0 0.1-0.1 0.1L-99 66.6c-14.5 21.7-27.6 44.4-39.3 68l537.4 265c0 0 0 0.1 0 0.1l-567.4-192.6c-8.3 24.6-15.1 49.9-20.2 75.8L399 399.8c0 0 0 0.1 0 0.1l-597.7-39.2c-1.7 26.5-1.7 52.7-0.1 78.5L399 400.1c0 0 0 0.1 0 0.1l-587.6 116.9c5.1 25.9 11.9 51.2 20.3 75.8l567.4-192.6c0 0 0 0.1 0 0.1l-537.3 265c11.6 23.5 24.8 46.2 39.3 67.9l498.1-332.8c0 0 0 0.1 0.1 0.1l-450.4 395c17.3 19.7 35.8 38.2 55.5 55.5l395-450.4c0 0 0.1 0 0.1 0.1L66.6 899c21.7 14.5 44.4 27.6 68 39.3l265-537.4c0 0 0.1 0 0.1 0L207.1 968.3c24.6 8.3 49.9 15.1 75.8 20.2L399.8 401c0 0 0.1 0 0.1 0l-39.2 597.7c26.5 1.7 52.7 1.7 78.5 0.1L400.1 401c0 0 0.1 0 0.1 0l116.9 587.6c25.9-5.1 51.2-11.9 75.8-20.3L400.3 400.9c0 0 0.1 0 0.1 0l265 537.3c23.5-11.6 46.2-24.8 67.9-39.3L400.5 400.8c0 0 0.1 0 0.1-0.1l395 450.4c19.7-17.3 38.2-35.8 55.5-55.5l-450.4-395c0 0 0-0.1 0.1-0.1L899 733.4c14.5-21.7 27.6-44.4 39.3-68l-537.4-265c0 0 0-0.1 0-0.1l567.4 192.6c8.3-24.6 15.1-49.9 20.2-75.8L401 400.2c0 0 0-0.1 0-0.1L998.7 439.2z'/%3E%3C/g%3E%3C/svg%3E\");\n        background-attachment: fixed;\n        background-size: cover;;\n      }\n      \n      @media (max-width: 768px){\n      .star-container{\n        width: 350px;\n        height: 400px;\n        margin-button: 20px;\n      }\n    }\n    .star-title {\n      font-size: 30px;\n      margin-top: 20px;\n      font-family: 'Roboto', sans-serif;\n      font-weight: 700;\n      text-align: start;\n    }\n    \n    .star {\n      \n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 250px;\n      height: 250px;\n      \n      background-color: green;\n      clip-path: polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0% 38%, 37% 38%);\n      \n    }\n    \n    .result {\n      font-size: 30px;\n      font-family: 'Roboto', sans-serif;\n      font-weight: 700;\n      color: #000;\n      \n    }\n    @media (max-width: 768px){\n      .result {\n        font-size: 20px;\n      }\n    }\n    \n",e.appendChild(a),function(){const n=e.querySelector(".star");"Ganaste"==t?n.style.backgroundColor="green":"Perdiste"==t?n.style.backgroundColor="red":"Empate"==t&&(n.style.backgroundColor="yellow")}(),this.appendChild(e)}}customElements.define("my-star",e)}function m(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=document.createElement("div"),n=document.createElement("style");e.className="div_rules",e.innerHTML='\n          <p class = "rules">\n          Presioná jugar\n          y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.\n          </p>\n         \n          ',n.innerHTML="\n          .div_rules{\n              display: flex;\n              flex-direction: column;\n              align-items: center;\n              height: 240px;\n              width: 317px;\n          }\n          @media (max-width: 768px) {\n              .div_rules{\n                \n              }\n          }\n          .rules{\n              color: #000000;\n              font-size: 50px;\n              font-weight: 700;\n              font-family: 'Odibee Sans', cursive;\n              text-align: center;\n              margin: 0 auto;\n              text-align: center;\n          }\n          @media (max-width: 768px) {\n              .rules{\n                  font-size: 40px;\n                  font-weight: 400;\n              }\n          }\n          \n          ",this.appendChild(e),this.appendChild(n)}}customElements.define("my-rules",e)}function y(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=s.getState(),n=e.playHistory.player,t=e.playHistory.cpu,a=document.createElement("div"),i=document.createElement("style");a.className="container-result",a.innerHTML=`\n    \n    <p class = "text">  TU :${n}</p>\n    <p class = "text"> PC: ${t} </p>\n    \n    \n    \n    `,i.innerHTML="\n      .text {\n        font-size: 20px;\n        font-family: 'Roboto', sans-serif;\n        font-weight: 700;\n        color: black;\n        margin-top: 20px;\n        }\n     \n",a.appendChild(i),this.firstChild?.remove(),this.appendChild(a)}}customElements.define("text-result",e)}const h=[{path:/\/welcome/,component:function(e){const n=document.createElement("div"),t=document.createElement("style");return n.innerHTML='\n    <div class="contenedor">\n    <my-text ></my-text>\n    <my-button class = "boton" value ="Empezar"></my-button>\n    \n    \n    \n    <div class = "manos">\n    <mano-papel></mano-papel>\n    <mano-piedra></mano-piedra>\n    <mano-tijera></mano-tijera>\n  </div>\n    </div>  ',t.innerHTML="\n    .contenedor{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-evenly;\n      gap: 50px;\n    \n      \n    }\n    .manos{\n      display: flex;\n      gap: 50px;\n    \n    }\n    ",n.appendChild(t),function(){const t=n.querySelector(".boton");t?.addEventListener("click",(()=>{e.goTo("/reglas")}))}(),n}},{path:/\/reglas/,component:function(e){const n=document.createElement("div"),t=document.createElement("style");return n.innerHTML='\n      <div class="contenedor">\n      <my-rules></my-rules>\n      <my-button class = "boton" value ="Jugar"></my-button>\n      <div class = "manos">\n      <mano-papel  class = "mano"></mano-papel>\n      <mano-piedra class = "mano"></mano-piedra>\n      <mano-tijera class = "mano"></mano-tijera>\n    </div>\n      </div>\n      ',t.innerHTML="\n      .contenedor{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n        height: 100%;\n        margin:25px ;\n        gap: 20px;\n      }\n      \n      \n      @media (max-width: 768px){\n        \n        .contenedor{\n          \n         \n      }\n    }\n      .manos{\n       display: flex;\n        justify-content: space-evenly;\n        width: 100%;\n      }\n      @media (max-width: 768px){\n      .manos{\n        \n        width: 100%;\n        ;\n      }\n      }\n      \n      \n      ",n.appendChild(t),function(){const t=n.querySelector(".boton");t?.addEventListener("click",(()=>{e.goTo("/play")}))}(),n}},{path:/\/play/,component:function(e){const n=document.createElement("div"),t=document.createElement("style");n.className="contenedor",n.innerHTML='\n<div class="contenedor">\n<div class = "cpu-componet">\n<mano-piedra class = "pc-piedra"></mano-piedra>\n<mano-papel  class = "pc-papel "></mano-papel>\n<mano-tijera class = "pc-tijera"> </mano-tijera>\n</div>\n<my-contador class = "contador"></my-contador>\n \n<div class = "player-componet">\n<mano-piedra class = "mano-piedra"></mano-piedra>\n<mano-papel  class = "mano-papel "></mano-papel>\n<mano-tijera class = "mano-tijera"> </mano-tijera>\n</div>\n</div>\n</div>\n',t.innerHTML="\n  .contenedor{\n  height:100%;\n  display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n  \n  }\n  \n    .mano{\n        margin:0  20px;\n    }\n    .cpu-componet{\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        gap:25px;\n    }\n.player-componet{\n    display: flex;\n    align-items:start;\n    overflow:auto;\n    gap: 55px;\n}\n.pc-piedra,\n.pc-tijera,\n.pc-papel{\n    display: none;\n    align-items: start;\n    transform: rotate(180deg);\n}\n.mano-tijera:hover,\n.mano-papel:hover,\n.mano-piedra:hover{\n    cursor: pointer;\n    transform: translateY(-25px);\n    transition: all 0.1s;\n}\n  ",n.appendChild(t);let a=5;const i=setInterval((()=>{a--,a<1&&(clearInterval(i),e.goTo("/reglas"))}),1e3),r=n.querySelector(".contador"),o=n.querySelector(".pc-tijera");o.style.height="279px",o.style.width="87px",o.style.objectPosition="0px 43px";const l=n.querySelector(".pc-papel");l.style.height="279px",l.style.width="87px",l.style.objectPosition="0px 43px";const c=n.querySelector(".pc-piedra");c.style.height="279px",c.style.width="87px",c.style.objectPosition="0px 43px";const p=n.querySelector(".mano-tijera"),d=p.querySelector(".tijera-img");d.style.height="230px",d.style.width="75px",d.style.objectPosition="0px 43px";const u=()=>{s.setMove("tijera"),d.style.objectPosition="0px 43px",d.style.transition="all 0.5s ease-out",f.style.opacity="0.4",m.style.opacity="0.4",setTimeout((()=>{"tijera"==s.data.currentGame.cpuPlay?o.style.display="flex":"piedra"==s.data.currentGame.cpuPlay?c.style.display="flex":"papel"==s.data.currentGame.cpuPlay&&(l.style.display="flex"),r.style.display="none",f.style.display="none",m.style.display="none",d.style.height="280px",d.style.width="100px"}),1),clearInterval(i),setTimeout((()=>{e.goTo("/result")}),2500),d.removeEventListener("click",u),p.style.cursor="default",p.style.transform="unset",x.removeEventListener("click",u),f.style.cursor="default",f.style.transform="unset",y.removeEventListener("click",u),m.style.cursor="default",m.style.transform="unset",p.removeEventListener("click",u)};d.addEventListener("click",u);const m=n.querySelector(".mano-papel"),y=m.querySelector(".paper-img");y.style.height="230px",y.style.width="75px";const h=()=>{s.setMove("papel"),y.style.objectPosition="0px 43px",y.style.transition="all 0.5s ease-out",f.style.opacity="0.4",p.style.opacity="0.4",setTimeout((()=>{"tijera"==s.data.currentGame.cpuPlay?o.style.display="flex":"piedra"==s.data.currentGame.cpuPlay?c.style.display="flex":"papel"==s.data.currentGame.cpuPlay&&(l.style.display="flex"),r.style.display="none",f.style.display="none",p.style.display="none",y.style.height="280px",y.style.width="100px"}),1),clearInterval(i),setTimeout((()=>{e.goTo("/result")}),2500),y.removeEventListener("click",h),m.style.cursor="default",m.style.transform="unset",x.removeEventListener("click",h),f.style.cursor="default",f.style.transform="unset",d.removeEventListener("click",h),p.style.cursor="default",p.style.transform="unset"};y.addEventListener("click",h);const f=n.querySelector(".mano-piedra"),x=f.querySelector(".piedra-img");x.style.height="230px",x.style.width="75px";const g=()=>{s.setMove("piedra"),x.style.objectPosition="0px 43px",x.style.transition="all 0.5s ease-out",m.style.opacity="0.4",p.style.opacity="0.4",setTimeout((()=>{"tijera"==s.data.currentGame.cpuPlay?o.style.display="flex":"piedra"==s.data.currentGame.cpuPlay?c.style.display="flex":"papel"==s.data.currentGame.cpuPlay&&(l.style.display="flex"),r.style.display="none",m.style.display="none",p.style.display="none",x.style.height="280px",x.style.width="100px"}),1),clearInterval(i),setTimeout((()=>{e.goTo("/result")}),2500),x.removeEventListener("click",g),f.style.cursor="default",f.style.transform="unset",y.removeEventListener("click",g),m.style.cursor="default",m.style.transform="unset"};return x.addEventListener("click",g),n}},{path:/\/result/,component:function(e){const n=document.createElement("div"),t=document.createElement("style");return n.innerHTML='\n  \n  <div class="contenedor">\n  <my-star></my-star>\n  <my-button  class="boton"    value="Volver a jugar"></my-button>\n  <my-button  class="boton1"   value="Salir"></my-button>\n  </div>\n  ',t.innerHTML="\n  .contenedor {\n    margin: 0 auto;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 20px;\n  }\n  @media (max-width: 768px){\n    .contenedor{\n      margin-top: 10px;\n      margin-bottom: 10px;\n    }\n  }\n  ",n.appendChild(t),function(){const t=n.querySelector(".boton"),a=n.querySelector(".boton1");t?.addEventListener("click",(()=>{e.goTo("/play")})),a?.addEventListener("click",(()=>{e.goTo("/reglas")}))}(),n}}],f="/desafio-mod-5";function x(){return location.host.includes("github.io")}function g(e){function n(e){const n=x()?f+e:e;history.pushState({},"",n),t(n)}function t(t){const a=x()?t.replace(f,""):t;for(const t of h)if(t.path.test(a)){const a=t.component({goTo:n});e.firstChild&&e.firstChild.remove(),e.appendChild(a)}}location.host.includes("github.io")||"/"==location.pathname?n("/welcome"):t(location.pathname),window.onpopstate=function(){t(location.pathname)}}function v(){r(),m(),o(),d(),y(),u(),l(),c(),p()}!function(){const e=document.querySelector(".root");s.init(),v(),g(e)}();
//# sourceMappingURL=index.79a4a288.js.map

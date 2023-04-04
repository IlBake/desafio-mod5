import { state } from "./state";

import { init as initButton } from "./components/button/index";
import { init as initText } from "./components/text-init/index";
import { init as initManoPapel } from "./components/mano-papel/index";
import { init as initManoPiedra } from "./components/mano-piedra/index";
import { init as initManoTijera } from "./components/mano-tijera/index";
import { init as initcontador } from "./components/contador/index";
import { initStar } from "./components/card-result";
import { initRules } from "./components/text-rules/index";
import { initResult } from "./components/text-result";

import { initRouter } from "./router";

function inicializa() {
  initButton();
  initRules();
  initText();
  initcontador();
  initResult();
  initStar();
  initManoPapel();
  initManoPiedra();
  initManoTijera();


}

(function () {
  const root: any = document.querySelector(".root") as HTMLElement;


  state.init();
  inicializa();
  initRouter(root);

})();
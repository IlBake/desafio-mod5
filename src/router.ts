import { initWelcome } from "./pages/page-welcome";
import { initRules } from "./pages/reglas";
import { initPlay } from "./pages/play";

import { initResult } from "./pages/result";

const routes = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/reglas/,
    component: initRules,
  },
  {
    path: /\/play/,
    component: initPlay,
  },
  {
    path: /\/result/,
    component: initResult,
  },
];

const BASE_PATH = "/desafio-mod-5";

function isGithubPages() {
  return location.host.includes("github.io");
}

export function initRouter(container: any) {
  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }
  function handleRoute(route) {

    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  if (location.host.includes("github.io")) {
    goTo("/welcome");
  } else if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
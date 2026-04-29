"use strict";

import { fetchSystems } from "./api.js";
import { renderSystems } from "./ui.js";

async function init() {
  const systems = await fetchSystems();
  renderSystems(systems);
}

init();

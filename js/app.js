"use strict";

import { fetchSystems } from "./api.js";
import { renderSystems } from "./ui.js";

const state = {
  systems: [],
};

async function init() {
  state.systems = await fetchSystems();
  renderSystems(state.systems);
}

init();

function simulateSystems() {
  state.systems = state.systems.map((system) => {
    let latency = system.latency;

    latency += Math.floor(Math.random() * 40 - 20);

    if (latency < 10) latency = 10;

    let status = "online";

    if (latency > 120) status = "degraded";
    if (latency > 200) status = "offline";

    return {
      ...system,
      latency,
      status,
    };
  });

  renderSystems(state.systems);
}

setInterval(simulateSystems, 3000);

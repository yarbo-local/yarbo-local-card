import "../src/yarbo-local-card";
import type { YarboLocalCard } from "../src/yarbo-local-card";
import type { HomeAssistant, LiveEvent, MapData, StreamEvent } from "../src/types";
import site from "./site-map.json";

if (location.search.includes("dark")) {
  document.body.classList.add("dark");
}

const map = site as MapData;
const area = map.zones.find((z) => z.family === "areas")!;
const pathway = map.zones.find((z) => z.family === "pathways")!;
const route = [...pathway.points, ...area.points, ...[...pathway.points].reverse()];

function* drive(): Generator<[number, number, number, boolean]> {
  for (;;) {
    for (let i = 1; i < route.length; i++) {
      const [ax, ay] = route[i - 1]!;
      const [bx, by] = route[i]!;
      const steps = Math.max(1, Math.round(Math.hypot(bx - ax, by - ay) / 0.3));
      const phi = Math.atan2(by - ay, bx - ax);
      for (let s = 0; s < steps; s++) {
        const k = s / steps;
        yield [ax + (bx - ax) * k, ay + (by - ay) * k, phi, false];
      }
    }
  }
}

const hass: HomeAssistant = {
  user: { is_admin: true, name: "Demo" },
  states: {},
  entities: { "device_tracker.yarbo_demo_location": { entity_id: "device_tracker.yarbo_demo_location", platform: "yarbo_local" } },
  async callWS<T>(msg: Record<string, unknown>): Promise<T> {
    if (msg.type === "yarbo_local/map") return map as T;
    if (msg.type === "yarbo_local/background/get") return null as T;
    if (msg.type === "yarbo_local/background/save") return msg.background as T;
    return null as T;
  },
  connection: {
    async subscribeMessage<T>(callback: (event: T) => void): Promise<() => void> {
      const it = drive();
      let battery = 92;
      const timer = setInterval(() => {
        const [x, y, phi, reverse] = it.next().value as [number, number, number, boolean];
        battery = Math.max(15, battery - 0.01);
        const event: LiveEvent = {
          type: "live",
          t: Date.now() / 1000,
          connected: true,
          awake: true,
          activity: "working",
          battery: Math.round(battery),
          charging: false,
          error_code: 0,
          head: "snow_blower",
          plan_running: true,
          x,
          y,
          phi,
          rtk_status: 4,
          fix_quality: 4,
          satellites: 31,
          hdop: 0.5,
          reverse,
        };
        callback(event as StreamEvent as T);
      }, 150);
      return () => clearInterval(timer);
    },
  },
};

const card = document.getElementById("card") as YarboLocalCard;
card.setConfig({ type: "custom:yarbo-local-card", entity: "device_tracker.yarbo_demo_location", title: "Driveway" });
card.hass = hass;

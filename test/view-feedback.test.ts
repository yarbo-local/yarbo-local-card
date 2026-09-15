import { describe, expect, it } from "vitest";
import { allPoints, longestPath, obstacleClusters, planOverlay } from "../src/feedback";
import { fitView, pixelToDisplay, viewBox, zoomAt } from "../src/view";

describe("view", () => {
  const size = { w: 800, h: 400 };

  it("fits bounds with the element's aspect ratio", () => {
    const view = fitView([-20, -40, 0, 0], size, 0);
    const [, , w, h] = viewBox(view, size);
    expect(h).toBeGreaterThanOrEqual(40);
    expect(w / h).toBeCloseTo(2);
  });

  it("keeps the anchor fixed when zooming", () => {
    const view = { cx: 0, cy: 0, width: 40 };
    const anchor = pixelToDisplay(view, size, 600, 100);
    const zoomed = zoomAt(view, 0.5, anchor);
    const after = pixelToDisplay(zoomed, size, 600, 100);
    expect(after[0]).toBeCloseTo(anchor[0]);
    expect(after[1]).toBeCloseTo(anchor[1]);
  });
});

describe("feedback overlays", () => {
  it("splits plan paths at clean_index", () => {
    const overlay = planOverlay({
      cleanPathProgress: [{ id: 1, clean_index: 2, path: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }] }],
    });
    expect(overlay.visited).toEqual([[[0, 0], [1, 0], [2, 0]]]);
    expect(overlay.remaining).toEqual([[[2, 0], [3, 0]]]);
  });

  it("ignores shapes it does not recognise", () => {
    expect(planOverlay(null)).toEqual({ visited: [], remaining: [] });
    expect(planOverlay({ cleanPathProgress: "nope" })).toEqual({ visited: [], remaining: [] });
    expect(longestPath(42)).toEqual([]);
  });

  it("finds the return route and obstacle points wherever they sit", () => {
    const route = longestPath({ data: { path: [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }], other: [{ x: 9, y: 9 }] } });
    expect(route).toHaveLength(3);
    expect(allPoints({ points: [{ x: 1, y: 2 }, { x: 3, y: 4 }] })).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});

describe("obstacles", () => {
  it("reads the integration's clusters of [x, y] pairs and the robot's {x, y} objects", () => {
    expect(
      obstacleClusters([
        [
          [0.73, -27.45],
          [0.68, -27.53],
        ],
        [{ x: 1, y: 2 }],
        "nope",
        [],
      ]),
    ).toEqual([
      [
        [0.73, -27.45],
        [0.68, -27.53],
      ],
      [[1, 2]],
    ]);
    expect(obstacleClusters(null)).toEqual([]);
  });
});

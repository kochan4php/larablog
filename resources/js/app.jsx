import "./bootstrap";
import "../css/app.css";
import "trix/dist/trix";
import "trix/dist/trix.css";

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { RecoilRoot } from "recoil";

createInertiaApp({
  title: (title) => `${title} - Larablog`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob("./Pages/**/*.jsx")
    ),
  setup({ el, App, props }) {
    return render(
      <RecoilRoot>
        <App {...props} />
      </RecoilRoot>,
      el
    );
  },
});

InertiaProgress.init({ color: "#ffc500" });

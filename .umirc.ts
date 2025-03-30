import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    {
      path: "/404",
      component: "404",
    },
  ],
});

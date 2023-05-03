import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";

const manifest = defineManifest({
  "name": "everything-ics",
  "version": "0.1.0",
  "manifest_version": 3,
  "description": "The Google Chrome extension that generate an ics file by using everthing-ics.",
  "homepage_url": "http://github.com/chick-p/chrome-extension-everything-ics",
  "icons": {
    "16": "icons/icon16.png",
    "32": "icons/icon32.png",
    "128": "icons/icon128.png"
  },
  "action": {
    "default_icon": "icons/icon16.png",
    "default_title": "everthing-ics"
  },
  "background": {
    "service_worker": "src/bg/index.ts"
  }
});

export default defineConfig({
  plugins: [crx({ manifest })],
});

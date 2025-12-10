/*
Copyright 2025-present Julian Gerhards

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/content", "@nuxtjs/plausible"],
    css: ["~/assets/css/main.css"],
    ssr: true,
    content: {
        build: {
            markdown: {
                highlight: {
                    theme: {
                        default: "light-plus",
                        dark: "one-dark-pro",
                    },
                    preload: ["bash", "shell", "dockerfile", "yaml", "typescript", "javascript", "swift"],
                },
            },
        },
    },
    image: {
        quality: 80,
    },
    vite: {
        optimizeDeps: {
            exclude: ["@nuxt/content"],
        },
    },
    plausible: {
        domain: "alarik.io",
        ignoredHostnames: ["localhost"],
        apiHost: "https://plausible.achtungsoftware.de",
    },
});

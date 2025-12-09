<script setup lang="ts">
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

import type { NavigationMenuItem } from "@nuxt/ui";
const route = useRoute();
const items = computed<NavigationMenuItem[]>(() => [
    {
        label: "Installation",
        to: "/docs/installation",
        active: route.path.startsWith("/docs/installation") && route.path != "/docs",
    },
    {
        label: "Docs",
        to: "/docs",
        active: route.path.startsWith("/docs") && route.path != "/docs/installation",
    },
]);
</script>
<template>
    <UBanner id="alpha-warning-banner" title="Alarik is currently in alpha - please do not use in production." close color="primary" />
    <UHeader mode="drawer">
        <template #left>
            <Logo />
        </template>

        <UNavigationMenu :items="items" content-orientation="horizontal" class="hidden lg:flex" />

        <template #right>
            <UContentSearchButton :collapsed="true" variant="ghost" class="hidden lg:flex" />
            <UButton to="https://github.com/achtungsoftware/alarik" target="_blank" icon="i-simple-icons-github" aria-label="Alarik on Github" variant="ghost" />
        </template>

        <template #body>
            <div class="flex flex-col gap-6">
                <UContentSearchButton :collapsed="false" variant="subtle" size="lg" />
                <UNavigationMenu :items="items" orientation="vertical" variant="link" />
                <UColorModeSelect size="lg" variant="subtle" color="neutral" />
            </div>
        </template>
    </UHeader>
</template>

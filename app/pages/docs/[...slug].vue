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

import type { ContentNavigationItem } from "@nuxt/content";
import { findPageBreadcrumb, findPageHeadline } from "@nuxt/content/utils";
import type { BreadcrumbItem } from "@nuxt/ui";

definePageMeta({
    layout: "docs",
});

const route = useRoute();
const navigation = inject<Ref<ContentNavigationItem[]>>("docsNavigation");

const { data: page } = await useAsyncData(route.path, () => queryCollection("docs").path(route.path).first());
if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
    return queryCollectionItemSurroundings("docs", route.path, {
        fields: ["description"],
    });
});

useSeoMeta({
    title: (page.value.seo?.title || page.value.title) + " - Alarik Documentation",
    ogTitle: (page.value.seo?.title || page.value.title) + " - Alarik Documentation",
    description: page.value.seo?.description || page.value.description,
    ogDescription: page.value.seo?.description || page.value.description,
});

const breadcrumbNavItems = findPageBreadcrumb(navigation?.value ?? [], route.path, { current: true });
const items: BreadcrumbItem[] = breadcrumbNavItems.map((navItem: ContentNavigationItem) => ({
    label: navItem.path === "/docs" ? "Docs" : navItem.title,
    to: navItem.path,
})) as BreadcrumbItem[];
</script>

<template>
    <UPage v-if="page">
        <UCollapsible class="flex lg:hidden flex-col gap-2 w-full mt-4">
            <UButton :label="page.title" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block size="lg" />

            <template #content>
                <UContentNavigation v-if="navigation?.[0]?.children" highlight :navigation="navigation[0].children" />
            </template>
        </UCollapsible>

        <UPageHeader :title="page.title" :description="page.description">
            <template #headline>
                <UBreadcrumb :items="items">
                    <template #separator>
                        <span class="mx-2 text-muted">/</span>
                    </template>
                </UBreadcrumb>
            </template>
            <template #links>
                <UButton v-for="(link, index) in page.links" :key="index" v-bind="link" />
            </template>
        </UPageHeader>

        <UPageBody>
            <ContentRenderer v-if="page" :value="page" />
            <USeparator v-if="surround?.length" />
            <UContentSurround :surround="surround" />
        </UPageBody>

        <template v-if="page?.body?.toc?.links?.length" #right>
            <UContentToc title="Content" :links="page.body?.toc?.links"  />
        </template>
    </UPage>
</template>

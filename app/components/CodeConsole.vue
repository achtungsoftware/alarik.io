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

interface Props {
    code: string;
    lang?: "bash" | "shell" | "dockerfile" | "yaml" | "typescript" | "javascript";
    title?: string;
    allowCopy?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    lang: "bash",
    title: "terminal",
    allowCopy: true,
});

const colorMode = useColorMode();
const highlighter = await useShikiHighlighter();
const theme = computed(() => (colorMode.value === "dark" ? "one-dark-pro" : "light-plus"));
const html = computed(() => {
    return highlighter.codeToHtml(props.code, { lang: props.lang, theme: theme.value });
});

const didCopy = ref(false);

function unsecuredCopyToClipboard(text: string) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus({ preventScroll: true });
    textArea.select();
    try {
        document.execCommand("copy");
    } catch (err) {
        console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
    didCopy.value = true;
}

watchEffect(() => {
    if (didCopy.value) {
        setTimeout(() => {
            didCopy.value = false;
        }, 1000);
    }
});
</script>

<template>
    <div class="relative group max-w-full min-w-0">
        <div class="relative bg-elevated rounded-xl border border-accented overflow-hidden">
            <div class="flex flex-row items-center justify-between gap-2 px-4 py-3 border-b border-accented bg-muted/50">
                <div class="flex flex-row items-center gap-2">
                    <div class="w-3 h-3 rounded-full bg-error" />
                    <div class="w-3 h-3 rounded-full bg-warning" />
                    <div class="w-3 h-3 rounded-full bg-success" />
                    <div class="text-muted text-sm font-mono">{{ props.title }}</div>
                </div>
                <UButton v-if="props.allowCopy" @click="unsecuredCopyToClipboard(props.code)" size="sm" :color="didCopy ? 'success' : 'neutral'" variant="ghost" :icon="didCopy ? 'i-lucide-check' : 'i-lucide-copy'" />
            </div>
            <ClientOnly>
                <div class="p-4 overflow-x-auto text-sm font-mono" v-html="html"></div>
            </ClientOnly>
        </div>
    </div>
</template>
<style scoped>
:deep(pre) {
    margin: 0;
    padding: 0;
    background: transparent !important;
}

:deep(code) {
    background: transparent !important;
}

:deep(.line) {
    display: block;
    line-height: 0.25rem;
}
</style>

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

const columns = [
    {
        label: "Resources",
        children: [
            {
                label: "Documentation",
                to: "/docs"
            },
        ],
    },
    {
        label: "Legal",
        children: [
            {
                label: "Imprint",
                to: "/imprint"
            },
        ],
    },
];

const toast = useToast();

const email = ref("");
const loading = ref(false);

function onSubmit() {
    loading.value = true;

    toast.add({
        title: "Subscribed!",
        description: "You've been subscribed to our newsletter.",
    });
}
</script>
<template>
    <USeparator class="h-px" />

    <UFooter :ui="{ top: 'border-b border-default' }">
        <template #top>
            <UContainer>
                <UFooterColumns :columns="columns">
                    <template #left>
                        <Logo />
                    </template>
                </UFooterColumns>
            </UContainer>
        </template>

        <template #left>
            <p class="text-muted text-sm">© Alarik, ein AchtungSoftware Produkt.</p>
        </template>

        <template #right>
            <UButton to="https://github.com/achtungsoftware/alarik" target="_blank" icon="i-simple-icons-github" aria-label="Alarik on Github" color="neutral" variant="ghost" />
            <UColorModeSwitch />
        </template>
    </UFooter>
</template>

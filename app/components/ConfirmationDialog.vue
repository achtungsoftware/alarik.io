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

const props = defineProps({
    isShowing: {
        type: Boolean,
        default: false,
    },
    onConfirm: {
        type: Function,
        default: () => {},
    },
    title: {
        type: String,
        default: "Are you sure?"
    },
    message: {
        type: String,
        required: true,
    },
    confirmLabel: {
        type: String,
        default: "Continue",
    },
});

const emit = defineEmits(["update:isShowing"]);
const open = ref(props.isShowing);

function hideModal() {
    emit("update:isShowing", false);
}

watch(
    () => props.isShowing,
    (val) => {
        open.value = val;
    }
);
</script>
<template>
    <UModal v-model:open="open" :title="props.title" :ui="{ footer: 'justify-end' }">
        <template #body>
            <p>{{ props.message }}</p>
        </template>

        <template #footer>
            <UButton label="Cancel" color="neutral" variant="subtle" @click="hideModal" />
            <UButton
                @click="
                    () => {
                        props.onConfirm();
                        hideModal();
                    }
                "
                :label="props.confirmLabel"
                color="error"
            />
        </template>
    </UModal>
</template>

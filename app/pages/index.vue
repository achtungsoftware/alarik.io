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

import type { ButtonProps } from "@nuxt/ui";

useSeoMeta({
    title: "Alarik - High-Performance Open-Source S3-Compatible Object Storage",
    ogTitle: "Alarik - High-Performance Open-Source S3-Compatible Object Storage",
    description: "A modern, fast, and truly open-source object storage solution. S3-compatible, built with Swift for maximum performance, easy to deploy with Docker.",
    ogDescription: "A modern, fast, and truly open-source object storage solution. S3-compatible, built with Swift for maximum performance, easy to deploy with Docker.",
    ogUrl: "https://alarik.io/",
    ogType: "website",
});

const heroLinks = ref<ButtonProps[]>([
    {
        label: "Documentation",
        to: "/docs",
        class: "rounded-full",
        trailingIcon: "i-lucide-arrow-right",
    },
    {
        label: "View on GitHub",
        color: "neutral",
        variant: "subtle",
        to: "https://github.com/achtungsoftware/alarik",
        target: "_blank",
        trailingIcon: "i-lucide-github",
        class: "rounded-full",
    },
]);

const features = [
    {
        title: "S3 Compatible",
        description: "Drop-in replacement for existing S3 workflows. Use your favorite tools and SDKs without any changes.",
        icon: "i-lucide-plug",
    },
    {
        title: "High Performance",
        description: "Built for low-latency I/O and highly parallel request handling. Competitive throughput even in alpha.",
        icon: "i-lucide-zap",
    },
    {
        title: "Written in Swift",
        description: "Leverages Swift's performance, memory safety, and SwiftNIO for efficient networking.",
        icon: "i-lucide-code",
    },
    {
        title: "Truly Open Source",
        description: "Apache 2.0 licensed. A transparent, community-driven alternative you can trust and extend.",
        icon: "i-lucide-heart-handshake",
    },
    {
        title: "Simple to Operate",
        description: "Easy deployment with Docker Compose. Minimal configuration, maximum reliability.",
        icon: "i-lucide-settings",
    },
    {
        title: "Web Console",
        description: "Built-in Nuxt-based web console for managing buckets and objects with a modern UI.",
        icon: "i-lucide-layout-dashboard",
    },
];

const quickStart = `# Alarik is still in alpha,
# please do not use it in production yet!

# Clone the repository
git clone https://github.com/achtungsoftware/alarik.git

# Start with Docker Compose
docker compose -f docker-compose.deploy.yml up --build -d`;

const awsExample = `import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({
    endpoint: "http://localhost:8080",
    region: "us-east-1",
    credentials: {
        accessKeyId: "YOUR_ACCESS_KEY",
        secretAccessKey: "YOUR_SECRET_KEY",
    },
    forcePathStyle: true,
});

await client.send(new PutObjectCommand({
    Bucket: "my-first-bucket",
    Key: "hello.txt",
    Body: "Hello from Alarik!",
}));`;
</script>

<template>
    <UPageHero class="bg-muted border-b border-default" title="High-Performance Open-Source Object Storage" description="A modern, S3-compatible object store that is fast, simple to operate, easy to extend, and genuinely open-source. Built with Swift for maximum performance and safety." :links="heroLinks" orientation="horizontal">
        <CodeConsole :code="quickStart" lang="bash" title="terminal" />
    </UPageHero>

    <UPageSection title="Why Alarik?" description="Built to address fragility in the object storage ecosystem with a focus on transparency, performance, and developer experience.">
        <UPageGrid>
            <UPageCard v-for="(feature, index) in features" :key="index" v-bind="feature" spotlight />
        </UPageGrid>
    </UPageSection>

    <UPageSection headline="S3 Compatible" title="Drop-In Replacement for Your Existing Workflows" description="Use the official AWS SDK, s3cmd, rclone, or any S3-compatible tool. No code changes required - just point to your Alarik endpoint and go." orientation="horizontal">
        <CodeConsole :code="awsExample" lang="typescript" title="example.ts" />
    </UPageSection>

    <UPageCTA
        title="Ready to Try Alarik?"
        description="Get started in minutes with Docker Compose. No complex setup, no vendor lock-in."
        variant="subtle"
        :links="[
            { label: 'Read the Docs', to: '/docs', trailingIcon: 'i-lucide-arrow-right', class: 'rounded-full' },
            { label: 'Star on GitHub', color: 'neutral', variant: 'ghost', to: 'https://github.com/achtungsoftware/alarik', target: '_blank', trailingIcon: 'i-lucide-github', class: 'rounded-full', },
        ]"
    />
</template>

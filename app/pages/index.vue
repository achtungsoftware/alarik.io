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
        label: "View Demo",
        color: "neutral",
        variant: "subtle",
        to: "https://demo.alarik.io",
        target: "_blank",
        trailingIcon: "i-lucide-arrow-right",
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

const performanceFeatures = [
    {
        title: "Low-Latency I/O",
        description: "Optimized storage engine designed for minimal latency, especially important for small object workloads common in web applications.",
        icon: "i-lucide-gauge",
    },
    {
        title: "Highly Parallel Request Handling",
        description: "Built on Swift's modern async/await concurrency model and SwiftNIO for efficient handling of thousands of concurrent connections.",
        icon: "i-lucide-layers",
    },
    {
        title: "Memory Safe Architecture",
        description: "Swift's memory safety guarantees mean no buffer overflows, no use-after-free bugs, and predictable performance under load.",
        icon: "i-lucide-shield-check",
    },
    {
        title: "No Garbage Collection Pauses",
        description: "Swift uses automatic reference counting instead of a tracing garbage collector, so there are no GC pause spikes under load.",
        icon: "i-lucide-timer",
    },
];

const gettingStarted = [
    {
        title: "Pull the Image",
        description: "Grab the official Alarik and console images from GitHub Container Registry. No build step, no dependencies to install.",
        icon: "i-lucide-download",
        value: 1,
    },
    {
        title: "Run docker-compose",
        description: "Start the API and web console with a single docker compose up -d. Two containers, one command.",
        icon: "i-lucide-terminal",
        value: 2,
    },
    {
        title: "Connect Your SDK",
        description: "Point your existing AWS SDK, s3cmd, or rclone setup at your Alarik endpoint. No code changes required.",
        icon: "i-lucide-plug",
        value: 3,
    },
];

const useCases = [
    {
        title: "Self-Hosted Cloud Storage",
        description: "Replace expensive cloud storage with your own S3-compatible infrastructure. Full control over your data, no vendor lock-in.",
        icon: "i-lucide-cloud",
    },
    {
        title: "Application Backend Storage",
        description: "Store user uploads, media files, and application data with a reliable, high-performance object store.",
        icon: "i-lucide-database",
    },
    {
        title: "Backup & Archive",
        description: "Cost-effective long-term storage for backups, logs, and archived data with S3-compatible tooling you already know.",
        icon: "i-lucide-archive",
    },
    {
        title: "Development & Testing",
        description: "Local S3-compatible storage for development environments. Test your S3 integrations without cloud costs or network latency.",
        icon: "i-lucide-code-2",
    },
];

const switchingCards = [
    {
        title: "Migrating from MinIO?",
        description: "See why teams are switching to Alarik - actively developed, Apache 2.0, and built for the post-MinIO era.",
        icon: "i-lucide-arrow-left-right",
        to: "/minio-alternative",
    },
    {
        title: "Comparing with RustFS?",
        description: "See how Alarik's focused, Swift-native approach compares to RustFS's multi-protocol platform.",
        icon: "i-lucide-git-compare",
        to: "/rustfs-alternative",
    },
];

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
    <UPageHero class="bg-muted border-b border-default" title="High-Performance Open-Source Object Storage" description="A modern, S3-compatible object store that is fast, simple to operate, easy to extend, and genuinely open-source. Built with Swift for maximum performance and safety." :links="heroLinks">
        <UColorModeImage alt="Alarik object store object browser screenshot" :placeholder="[59, 33]" sizes="sm:950px md:1200px lg:1600px" format="webp" width="1600" light="/img/web/screenshots/console_browser_light.png" dark="/img/web/screenshots/console_browser_dark.png" class="overflow-hidden rounded-md md:rounded-lg lg:rounded-2xl border border-default shadow-lg" />
    </UPageHero>

    <UPageSection headline="Why Alarik?" title="Everything You Need, Nothing You Don't" description="Built to address fragility in the object storage ecosystem with a focus on transparency, performance, and developer experience.">
        <UPageGrid>
            <UPageCard v-for="(feature, index) in features" :key="index" v-bind="feature" spotlight />
        </UPageGrid>
    </UPageSection>

    <UPageSection class="bg-muted border-y border-default" headline="Performance" title="Built for Speed" description="Alarik is built with Swift and SwiftNIO for low-latency I/O and highly parallel request handling. Even in alpha, benchmarks show throughput competitive with established S3-compatible stores." :features="performanceFeatures" />

    <UPageSection headline="Get Started" title="Up and Running in Minutes" description="No complex cluster setup, no configuration sprawl. Just Docker and your existing S3 tooling.">
        <UTimeline :items="gettingStarted" orientation="vertical" size="lg" class="w-full lg:hidden" />
        <UTimeline :items="gettingStarted" orientation="horizontal" size="lg" class="hidden w-full lg:flex" />
    </UPageSection>

    <UPageSection headline="S3 Compatible" title="Drop-In Replacement for Your Existing Workflows" description="Use the official AWS SDK, s3cmd, rclone, or any S3-compatible tool. No code changes required - just point to your Alarik endpoint and go." orientation="horizontal">
        <CodeConsole :code="awsExample" lang="typescript" title="example.ts" />
    </UPageSection>

    <UPageSection class="bg-muted border-y border-default" headline="Use Cases" title="Perfect For Any S3 Workload" description="Whether you're building a new application or replacing existing infrastructure, Alarik handles your object storage needs.">
        <UPageGrid>
            <UPageCard v-for="(useCase, index) in useCases" :key="index" v-bind="useCase" variant="subtle" />
        </UPageGrid>
    </UPageSection>

    <UPageSection headline="Switching?" title="Coming From MinIO or RustFS?" description="See exactly how Alarik compares - license, performance, and philosophy - before you migrate.">
        <UPageGrid class="sm:grid-cols-2">
            <UPageCard v-for="(item, index) in switchingCards" :key="index" v-bind="item" variant="subtle" />
        </UPageGrid>
    </UPageSection>

    <UPageSection>
        <UPageCTA
            title="Ready to Try Alarik?"
            description="Get started in minutes with Docker Compose. No complex setup, no vendor lock-in."
            variant="subtle"
            :links="[
                { label: 'Read the Docs', to: '/docs', trailingIcon: 'i-lucide-arrow-right', class: 'rounded-full' },
                { label: 'Star on GitHub', color: 'neutral', variant: 'ghost', to: 'https://github.com/achtungsoftware/alarik', target: '_blank', trailingIcon: 'i-lucide-github', class: 'rounded-full' },
            ]"
        />
    </UPageSection>
</template>

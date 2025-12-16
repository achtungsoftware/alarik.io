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
    title: "Best MinIO Alternative 2025 - Alarik Open-Source S3",
    ogTitle: "Best MinIO Alternative 2025 - Alarik Open-Source S3",
    description: "MinIO is dead. Looking for an actively developed alternative? Alarik is a high-performance, truly open-source S3-compatible object storage.",
    ogDescription: "MinIO is dead. Looking for an actively developed alternative? Alarik is a high-performance, truly open-source S3-compatible object storage.",
    ogUrl: "https://alarik.io/minio-alternative",
    ogType: "website",
});

const heroLinks = ref<ButtonProps[]>([
    {
        label: "Get Started Free",
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

const comparisonFeatures = [
    {
        feature: "Project Status",
        alarik: "Actively developed",
        minio: "Maintenance mode only",
        advantage: "alarik",
    },
    {
        feature: "License",
        alarik: "Apache 2.0",
        minio: "AGPL v3",
        advantage: "alarik",
    },
    {
        feature: "Docker Images",
        alarik: "Official images on GHCR",
        minio: "No longer published",
        advantage: "alarik",
    },
    {
        feature: "Commercial Use",
        alarik: "Free, no restrictions",
        minio: "Requires license for proprietary use",
        advantage: "alarik",
    },
    {
        feature: "Small Object Performance",
        alarik: "2x+ faster (4KB objects)",
        minio: "Baseline",
        advantage: "alarik",
    },
    {
        feature: "Web Console",
        alarik: "Built-in modern UI",
        minio: "Removed from open-source",
        advantage: "alarik",
    },
    {
        feature: "Community Contributions",
        alarik: "Pull requests welcome",
        minio: "No longer accepting PRs",
        advantage: "alarik",
    },
    {
        feature: "Language",
        alarik: "Swift (memory safe)",
        minio: "Go",
        advantage: "alarik",
    },
];

const whySwitch = [
    {
        title: "MinIO Is No Longer Open Source",
        description: "In December 2025, MinIO entered maintenance mode. No new features, no enhancements, and they stopped publishing Docker images. It's time to migrate.",
        icon: "i-lucide-alert-triangle",
    },
    {
        title: "Actively Developed",
        description: "Unlike MinIO, Alarik is under active development with new features, performance improvements, and community contributions welcomed.",
        icon: "i-lucide-git-commit",
    },
    {
        title: "2x Faster for Small Objects",
        description: "Benchmarks show Alarik delivers more than 2x the throughput of MinIO for 4KB objects. Built with Swift and SwiftNIO for maximum performance.",
        icon: "i-lucide-zap",
    },
    {
        title: "True Open Source Freedom",
        description: "Apache 2.0 license means you can use, modify, and distribute Alarik without AGPL restrictions. No licensing traps, no moving goalposts.",
        icon: "i-lucide-scale",
    },
    {
        title: "Official Docker Images",
        description: "MinIO stopped publishing Docker images in October 2025. Alarik provides official, up-to-date images on GitHub Container Registry.",
        icon: "i-lucide-container",
    },
    {
        title: "Full-Featured Web Console",
        description: "MinIO removed their console from the open-source version. Alarik includes a modern, built-in web console for managing buckets and objects.",
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
        description: "Unlike Go-based solutions, Swift uses automatic reference counting. No GC pauses means consistent, predictable latency.",
        icon: "i-lucide-timer",
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
        description: "Store user uploads, media files, and application data with a reliable, high-performance object store that won't be abandoned.",
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

const minioTimeline = [
    {
        title: "May 2025",
        description: "MinIO removed the web console from the open-source version, leaving only a basic object browser.",
    },
    {
        title: "October 2025",
        description: "MinIO stopped publishing Docker images to Docker Hub and Quay.io. Source-only distribution began.",
    },
    {
        title: "December 2025",
        description: "MinIO entered maintenance mode. No new features, no PRs accepted, no active development.",
    },
];

const migrationCode = `# Migration from MinIO to Alarik is simple!
# Just update your endpoint URL

# Before (MinIO)
S3_ENDPOINT=http://minio:9000

# After (Alarik)
S3_ENDPOINT=http://alarik:8080

# Your existing S3 code works unchanged!
# AWS SDK, s3cmd, rclone - all compatible`;
</script>

<template>
    <UPageHero class="bg-muted border-b border-default" title="The Best Open-Source MinIO Alternative" description="In December 2025, MinIO entered maintenance mode and stopped active development. Alarik is the high-performance, truly open-source alternative you've been looking for. Apache 2.0 licensed, actively developed, and more than 2x faster for small objects." :links="heroLinks">
        <UColorModeImage alt="Alarik object storage console - MinIO alternative" :placeholder="[59, 33]" sizes="sm:950px md:1200px lg:1600px" format="webp" width="1600" light="/img/web/screenshots/console_browser_light.png" dark="/img/web/screenshots/console_browser_dark.png" class="overflow-hidden rounded-md md:rounded-lg lg:rounded-2xl border border-default shadow-lg" />
    </UPageHero>

    <UPageSection headline="What Happened?" title="MinIO Is No Longer Actively Developed" description="On December 3, 2025, MinIO officially entered maintenance mode. The project stopped accepting new pull requests, publishing Docker images, and developing new features. Only critical security fixes are considered on a case-by-case basis. If MinIO is part of your infrastructure, it's time to migrate.">
        <UPageGrid>
            <UPageCard v-for="(item, index) in minioTimeline" :key="index" v-bind="item" variant="subtle" />
        </UPageGrid>
    </UPageSection>

    <UPageSection headline="Why Alarik?" title="The Modern MinIO Alternative" description="Alarik exists because developers need an S3-compatible store that is fast, simple to operate, easy to extend, and genuinely open-source. No licensing traps, no moving goalposts.">
        <UPageGrid>
            <UPageCard v-for="(item, index) in whySwitch" :key="index" v-bind="item" spotlight />
        </UPageGrid>
    </UPageSection>

    <UPageSection headline="Performance" title="Built for Speed" description="Recent benchmarks using MinIO's own warp tool show Alarik delivers more than 2x the throughput of MinIO for 4KB objects. Built with Swift and SwiftNIO for low-latency I/O and highly parallel request handling.">
        <UPageGrid>
            <UPageCard v-for="(item, index) in performanceFeatures" :key="index" v-bind="item" spotlight />
        </UPageGrid>
    </UPageSection>

    <UPageSection headline="Comparison" title="Alarik vs MinIO: Side by Side" description="See why teams are migrating from MinIO to Alarik.">
        <div class="overflow-x-auto">
            <table class="w-full border-collapse">
                <thead>
                    <tr class="border-b border-default">
                        <th class="text-left py-4 px-4 font-semibold">Feature</th>
                        <th class="text-left py-4 px-4 font-semibold text-primary">Alarik</th>
                        <th class="text-left py-4 px-4 font-semibold">MinIO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in comparisonFeatures" :key="index" class="border-b border-default">
                        <td class="py-4 px-4 font-medium">{{ row.feature }}</td>
                        <td class="py-4 px-4">
                            <span :class="row.advantage === 'alarik' ? 'text-primary font-semibold' : ''">
                                {{ row.alarik }}
                            </span>
                            <UIcon v-if="row.advantage === 'alarik'" name="i-lucide-check" class="ml-2 text-green-500" />
                        </td>
                        <td class="py-4 px-4 text-muted">{{ row.minio }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </UPageSection>

    <UPageSection headline="Easy Migration" title="Migrate from MinIO in Minutes" description="Switching from MinIO to Alarik is as simple as changing your endpoint URL. Your existing S3 code, SDKs, and tools work without any modifications. AWS SDK, s3cmd, rclone - everything just works." orientation="horizontal">
        <CodeConsole :code="migrationCode" lang="bash" title="migration.sh" />
    </UPageSection>

    <UPageSection headline="Use Cases" title="Perfect For Any S3 Workload" description="Whether you're building a new application or urgently migrating from MinIO, Alarik handles your object storage needs with an actively maintained codebase.">
        <UPageGrid>
            <UPageCard v-for="(useCase, index) in useCases" :key="index" v-bind="useCase" spotlight />
        </UPageGrid>
    </UPageSection>

    <UPageSection>
        <UPageCTA
            title="Don't Wait Until It's Too Late"
            description="With MinIO no longer actively developed, vulnerabilities will go unpatched and your infrastructure becomes a liability. Migrate to Alarik today - actively developed, truly open-source, and faster."
            variant="subtle"
            :links="[
                { label: 'Read the Documentation', to: '/docs', trailingIcon: 'i-lucide-arrow-right', class: 'rounded-full' },
                { label: 'Star on GitHub', color: 'neutral', variant: 'ghost', to: 'https://github.com/achtungsoftware/alarik', target: '_blank', trailingIcon: 'i-lucide-github', class: 'rounded-full' },
            ]"
        />
    </UPageSection>
</template>

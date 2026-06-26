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
    title: "Best RustFS Alternative 2026 - Alarik Open-Source S3",
    ogTitle: "Best RustFS Alternative 2026 - Alarik Open-Source S3",
    description: "Looking for a simpler alternative to RustFS? Alarik is a focused, Swift-native, Apache 2.0 S3-compatible object store - one protocol done well, without the multi-protocol complexity.",
    ogDescription: "Looking for a simpler alternative to RustFS? Alarik is a focused, Swift-native, Apache 2.0 S3-compatible object store - one protocol done well, without the multi-protocol complexity.",
    ogUrl: "https://alarik.io/rustfs-alternative",
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
        feature: "License",
        alarik: "Apache 2.0",
        rustfs: "Apache 2.0",
        advantage: "neutral",
    },
    {
        feature: "Project Origin",
        alarik: "Open-source & community-driven from day one",
        rustfs: "Commercial product, open-sourced in 2025",
        advantage: "alarik",
    },
    {
        feature: "Protocol Surface",
        alarik: "Focused: S3-compatible only",
        rustfs: "Multi-protocol: S3 + OpenStack Swift API + Keystone",
        advantage: "alarik",
    },
    {
        feature: "Deployment Complexity",
        alarik: "Two containers, one docker-compose file",
        rustfs: "Full platform: KMS, multi-tenancy, replication, lifecycle engine",
        advantage: "alarik",
    },
    {
        feature: "Production Commitment",
        alarik: "Dogfooded in our own production stack",
        rustfs: "Maintained by a commercial company",
        advantage: "alarik",
    },
    {
        feature: "Small Object Performance",
        alarik: "Competitive to superior vs RustFS (4KB objects)",
        rustfs: "Baseline",
        advantage: "alarik",
    },
    {
        feature: "Web Console",
        alarik: "Built-in modern UI",
        rustfs: "Built-in UI with enterprise SSO setup",
        advantage: "alarik",
    },
];

const whyAlarik = [
    {
        title: "Built for Simplicity",
        description: "RustFS has grown into a full platform spanning S3, the OpenStack Swift storage protocol, Keystone auth, multi-tenancy, and KMS. Alarik focuses on one protocol: S3. Fewer moving parts, smaller surface area, easier to operate.",
        icon: "i-lucide-feather",
    },
    {
        title: "Open Source From Day One",
        description: "RustFS started as a commercial product in December 2023 and was open-sourced in mid-2025. Alarik has been community-driven and Apache 2.0 licensed since its very first commit - no transition, no asterisks.",
        icon: "i-lucide-git-branch",
    },
    {
        title: "Dogfooded in Production",
        description: "We build belegFuchs, a production accounting platform currently running on MinIO, and we're migrating it to Alarik ourselves. Our own infrastructure depends on Alarik staying fast and actively maintained.",
        icon: "i-lucide-rocket",
    },
    {
        title: "Swift-Native Performance",
        description: "Built with Swift and SwiftNIO for low-latency I/O and highly parallel request handling. Internal benchmarks already show throughput competitive with, and in many cases exceeding, both MinIO and RustFS - even in alpha.",
        icon: "i-lucide-zap",
    },
    {
        title: "Lightweight Two-Container Stack",
        description: "Deploy the API and web console with a single docker-compose file. No Helm charts, no KMS setup, no multi-tenancy configuration required just to get started.",
        icon: "i-lucide-box",
    },
    {
        title: "True Open Source Freedom",
        description: "Apache 2.0 with a single codebase and no separate enterprise edition. Use, modify, and distribute Alarik without restrictions or a future licensing surprise.",
        icon: "i-lucide-scale",
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
        title: "No Tracing Garbage Collector",
        description: "Swift uses automatic reference counting instead of a tracing garbage collector, avoiding unpredictable GC pause spikes under load.",
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
        description: "Store user uploads, media files, and application data with a reliable, high-performance object store with a minimal footprint.",
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

const migrationCode = `# Migration from RustFS to Alarik is simple!
# Just update your endpoint URL

# Before (RustFS)
S3_ENDPOINT=http://rustfs:9000

# After (Alarik)
S3_ENDPOINT=http://alarik:8080

# Your existing S3 code works unchanged!
# AWS SDK, s3cmd, rclone - all compatible`;
</script>

<template>
    <UPageHero class="bg-muted border-b border-default" title="The Focused, Open-Source Alternative to RustFS" description="RustFS is a fast, Apache 2.0-licensed object store - but it has grown into a full platform spanning S3, OpenStack Swift, Keystone auth, and KMS. Alarik takes the opposite approach: a focused, Swift-native S3 store built by a team that depends on it in production. Same open license, far less surface area." :links="heroLinks">
        <UColorModeImage alt="Alarik object storage console - RustFS alternative" :placeholder="[59, 33]" sizes="sm:950px md:1200px lg:1600px" format="webp" width="1600" light="/img/web/screenshots/console_browser_light.png" dark="/img/web/screenshots/console_browser_dark.png" class="overflow-hidden rounded-md md:rounded-lg lg:rounded-2xl border border-default shadow-lg" />
    </UPageHero>

    <UPageSection headline="Why Alarik?" title="A Focused Alternative to RustFS" description="RustFS is a capable, fast, Apache 2.0 object store. Alarik exists for teams who want the same openness and performance without the multi-protocol feature surface - one clear job, done well.">
        <UPageGrid>
            <UPageCard v-for="(item, index) in whyAlarik" :key="index" v-bind="item" spotlight />
        </UPageGrid>
    </UPageSection>

    <UPageSection headline="Performance" title="Built for Speed" description="Alarik is built with Swift and SwiftNIO for low-latency I/O and highly parallel request handling. Internal benchmarks already show throughput competitive with, and in many cases exceeding, both MinIO and RustFS - even in alpha.">
        <UPageGrid>
            <UPageCard v-for="(item, index) in performanceFeatures" :key="index" v-bind="item" spotlight />
        </UPageGrid>
    </UPageSection>

    <UPageSection headline="Comparison" title="Alarik vs RustFS: Side by Side" description="Both are Apache 2.0 licensed and actively developed. Here's where they genuinely differ.">
        <div class="overflow-x-auto">
            <table class="w-full border-collapse">
                <thead>
                    <tr class="border-b border-default">
                        <th class="text-left py-4 px-4 font-semibold">Feature</th>
                        <th class="text-left py-4 px-4 font-semibold text-primary">Alarik</th>
                        <th class="text-left py-4 px-4 font-semibold">RustFS</th>
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
                        <td class="py-4 px-4 text-muted">{{ row.rustfs }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </UPageSection>

    <UPageSection headline="Easy Migration" title="Migrate from RustFS in Minutes" description="Both Alarik and RustFS speak the S3 protocol, so switching is just a matter of changing your endpoint URL. Your existing S3 code, SDKs, and tools work without any modifications. AWS SDK, s3cmd, rclone - everything just works." orientation="horizontal">
        <CodeConsole :code="migrationCode" lang="bash" title="migration.sh" />
    </UPageSection>

    <UPageSection headline="Use Cases" title="Perfect For Any S3 Workload" description="Whether you're building a new application or evaluating object storage options, Alarik handles your S3 needs with a small, auditable codebase.">
        <UPageGrid>
            <UPageCard v-for="(useCase, index) in useCases" :key="index" v-bind="useCase" spotlight />
        </UPageGrid>
    </UPageSection>

    <UPageSection>
        <UPageCTA
            title="Want Less Complexity, Not More?"
            description="If you need every protocol and enterprise integration under the sun, RustFS is a solid choice. If you want a focused, fast, Apache 2.0 S3 store that does one thing well, give Alarik a try."
            variant="subtle"
            :links="[
                { label: 'Read the Documentation', to: '/docs', trailingIcon: 'i-lucide-arrow-right', class: 'rounded-full' },
                { label: 'Star on GitHub', color: 'neutral', variant: 'ghost', to: 'https://github.com/achtungsoftware/alarik', target: '_blank', trailingIcon: 'i-lucide-github', class: 'rounded-full' },
            ]"
        />
    </UPageSection>
</template>

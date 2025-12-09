import { defineContentConfig, defineCollection } from "@nuxt/content";
import * as v from "valibot";

export default defineContentConfig({
    collections: {
        docs: defineCollection({
            type: "page",
            source: {
                include: 'docs/**/*'
            },
            schema: v.object({
                links: v.optional(
                    v.array(
                        v.object({
                            label: v.string(),
                            icon: v.string(),
                            to: v.string(),
                            target: v.optional(v.string()),
                        })
                    )
                ),
            }),
        }),
    },
});

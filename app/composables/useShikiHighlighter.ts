import { createHighlighter, type Highlighter } from "shiki";

let highlighterPromise: Promise<Highlighter> | null = null;

export async function useShikiHighlighter() {
    if (!highlighterPromise) {
        highlighterPromise = createHighlighter({
            themes: ["one-dark-pro", "light-plus"],
            langs: ["bash", "shell", "dockerfile", "yaml", "typescript", "javascript", "swift"],
        });
    }

    const highlighter = await highlighterPromise;
    return highlighter;
}

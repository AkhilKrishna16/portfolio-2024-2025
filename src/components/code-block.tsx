import React from "react";

const LANGUAGE_LABELS: Record<string, string> = {
  c: "C",
  cpp: "C++",
  java: "Java",
  python: "Python",
  js: "JavaScript",
  javascript: "JavaScript",
  ts: "TypeScript",
  typescript: "TypeScript",
  asm: "Assembly",
  mips: "MIPS",
  bash: "Bash",
  shell: "Shell",
  html: "HTML",
  css: "CSS",
  json: "JSON",
  rust: "Rust",
  go: "Go",
};

function getLanguage(raw?: string): string | null {
  if (!raw) return null;
  return LANGUAGE_LABELS[raw] || raw.charAt(0).toUpperCase() + raw.slice(1);
}

export function CodeBlock(
  props: React.ComponentPropsWithoutRef<"pre"> & {
    "data-language"?: string;
  }
) {
  // rehype-pretty-code puts data-language on <code>, but MDX passes the
  // <pre> props through. Try the pre first, then fall back to the child.
  let lang = props["data-language"];

  if (!lang) {
    const child = React.Children.only(props.children) as React.ReactElement<{
      "data-language"?: string;
      className?: string;
    }>;
    lang =
      child?.props?.["data-language"] ??
      child?.props?.className?.match(/language-(\w+)/)?.[1] ??
      undefined;
  }

  const language = getLanguage(lang);

  return (
    <div className="not-prose my-4 rounded-lg overflow-hidden border border-zinc-700/50 bg-[#1e1e1e]">
      {language && (
        <div className="flex items-center gap-2 px-4 py-2 text-xs text-zinc-400 bg-[#2d2d2d] border-b border-zinc-700/50">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-500"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <span className="font-medium">{language}</span>
        </div>
      )}
      <pre className="!m-0 !rounded-none !bg-transparent !p-4 overflow-x-auto text-sm text-zinc-300">
        {props.children}
      </pre>
    </div>
  );
}

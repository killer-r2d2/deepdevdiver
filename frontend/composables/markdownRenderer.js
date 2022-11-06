import md from "markdown-it";

export const useMarkdownRenderer = () => {
  const mdRenderer = md();
  return mdRenderer;
};

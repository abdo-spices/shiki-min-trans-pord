import { defineConfig } from 'astro/config';
import { transformerNotationDiff, transformerNotationFocus, transformerMetaHighlight, transformerNotationWordHighlight, transformerNotationErrorLevel, transformerRenderWhitespace, transformerMetaWordHighlight, transformerCompactLineOptions, transformerRemoveLineBreak } from "@shikijs/transformers";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(
    {
      optimize: true,
      shikiConfig: {
        experimentalThemes: {
          light: "material-theme-lighter",
          dark: "material-theme-darker",
        },
        transformers: [
          transformerNotationDiff(),
          transformerNotationFocus(),
          transformerMetaHighlight(),
          transformerNotationWordHighlight(),
          transformerNotationErrorLevel(),
          transformerRenderWhitespace(),
          transformerMetaWordHighlight(),
        ],
      },
    }
  )]
});
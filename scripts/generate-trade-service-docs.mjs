import * as OpenAPI from 'fumadocs-openapi';
import { rimrafSync } from 'rimraf';
import path from 'path';

const out = './content/docs/trade-service';

// clean generated files
rimrafSync(out, {
  filter(v) {
    // Get relative path from output directory
    const relativePath = path.relative(out, v);

   

    return (
      !v.endsWith("index.mdx") &&
      !v.endsWith("setup.mdx") &&
      !v.endsWith("meta.json") &&
      !v.endsWith("resources.mdx")

    );
  }
});

void OpenAPI.generateFiles({
  // input files
  input: ['./public/openapi-trade-service.json'],
  output: out,
  groupBy: 'tag',
});

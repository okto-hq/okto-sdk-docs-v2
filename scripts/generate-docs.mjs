import * as OpenAPI from 'fumadocs-openapi';
import { rimrafSync } from 'rimraf';
import path from 'path';

const out = './content/docs/openapi';

// clean generated files
rimrafSync(out, {
  filter(v) {
    // Get relative path from output directory
    const relativePath = path.relative(out, v);

    // Check if file is inside the "authenticate" folder
    const isInAuthenticateFolder = relativePath.startsWith('authenticate');
    const isInIntentsFolder = relativePath.startsWith('(Intents)');

    return (
      !v.endsWith('index.mdx') &&
      !v.endsWith('meta.json') &&
      !v.endsWith('api-migration.mdx') &&
      !isInAuthenticateFolder &&
      !isInIntentsFolder
    );
  }
});

void OpenAPI.generateFiles({
  // input files
  input: ['./public/openapi.json'],
  output: out,
  groupBy: 'tag',
});

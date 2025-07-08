import * as OpenAPI from 'fumadocs-openapi';
import { rimrafSync } from 'rimraf';
import path from 'path';

const out = './content/docs/trade-service';

// clean generated files
rimrafSync(out, {
  filter(v) {
    // Get relative path from output directory
    const relativePath = path.relative(out, v);

    // Check if file is inside the "authenticate" folder
    const isInTradeServiceFolder = relativePath.startsWith("authenticate");

    return (
      !v.endsWith("index.mdx") &&
      !v.endsWith("overview.mdx") &&
      !v.endsWith("setup.mdx") &&
      !v.endsWith("meta.json") &&
      !v.endsWith("resources.mdx") &&
      !v.endsWith("supported-networks-tokens.mdx") &&
      !v.endsWith("architecture.mdx") &&
      !v.endsWith("scenarios.mdx") &&
      !v.endsWith("trade-service-actors.mdx") &&
      !v.endsWith("slippage.mdx") &&
      !v.endsWith("fees.mdx") &&
      !v.endsWith("refunds.mdx") &&
      !v.endsWith("template-repository.mdx") && 
      !isInTradeServiceFolder
    );
  }
});

void OpenAPI.generateFiles({
  // input files
  input: ['./public/openapi/openapi-trade-service.json'],
  output: out,
  groupBy: 'tag',
});

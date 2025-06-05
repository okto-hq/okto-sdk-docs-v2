import * as OpenAPI from 'fumadocs-openapi';
import { rimrafSync } from 'rimraf';
import path from 'path';

void OpenAPI.generateFiles({
  // input files
  input: ['./public/openapi/intents/tokenTransfer.json' , './public/openapi/intents/nftTransfer.json' , './public/openapi/intents/rawTransaction.json' , './public/openapi/intents/signData.json'  ],
  output: "./content/docs/openapi/(intents)/(3pbff)",
  includeDescription: true,
});

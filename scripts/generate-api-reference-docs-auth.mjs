import * as OpenAPI from 'fumadocs-openapi';
import { rimrafSync } from 'rimraf';
import path from 'path';

void OpenAPI.generateFiles({
  // input files
  input: ['./public/openapi/auth/google.json' , './public/openapi/auth/email.json' , './public/openapi/auth/whatsapp.json' , './public/openapi/auth/jwt.json'],
  output: "./content/docs/openapi/authenticate/(auth)"
});

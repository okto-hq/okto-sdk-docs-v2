import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Enable __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust to your paths
const openapiJsonPath = path.join(__dirname, "../public/openapi/openapi-trade-service.json");
const mdxDir = path.join(__dirname, "../content/docs/trade-service/usage");

// Kebab-case converter
const toKebabCase = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

const openapi = JSON.parse(fs.readFileSync(openapiJsonPath, "utf8"));

Object.entries(openapi.paths).forEach(([route, methods]) => {
  Object.entries(methods).forEach(([method, details]) => {
    const xDesc = details["x-description-md"];
    if (!xDesc) return;

    const operationId = details.operationId;
    if (!operationId) {
      console.log(`❌ No operationId for ${method.toUpperCase()} ${route}`);
      return;
    }

    const fileName = `${toKebabCase(operationId)}.mdx`;
    const filePath = path.join(mdxDir, fileName);

    if (!fs.existsSync(filePath)) {
      console.log(`❌ MDX not found for ${method.toUpperCase()} ${route}: ${fileName}`);
      return;
    }

    let content = fs.readFileSync(filePath, "utf8");

    // Remove existing injected paragraphs between markers
    const startMarker = "{/* x-description-md-start */}";
    const endMarker = "{/* x-description-md-end */}";
    const regex = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}\\n?`, "m");
    content = content.replace(regex, "");

    // Insert Markdown paragraph after frontmatter and generation notice
    const insertion = `${startMarker}\n${xDesc}\n${endMarker}\n\n`;

    // Find insertion point: after first occurrence of '*/}' or end of frontmatter
    const lines = content.split("\n");
    let insertIndex = lines.findIndex(line => line.includes("*/}")) + 1;
    if (insertIndex === 0) {
      insertIndex = lines.findIndex(line => line.trim() === "---") + 1;
      if (insertIndex === 0) insertIndex = lines.length;
    }

    lines.splice(insertIndex, 0, insertion.trim());

    const updatedContent = lines.join("\n");

    fs.writeFileSync(filePath, updatedContent, "utf8");
    console.log(`✅ Patched and injected body for ${fileName}`);
  });
});
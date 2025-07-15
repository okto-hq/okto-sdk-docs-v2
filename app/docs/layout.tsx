import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "../layout.config";
import { source } from "@/app/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout sidebar={{ tabs:false ,prefetch: false, collapsible: true }} themeSwitch={{ enabled: false }} tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}

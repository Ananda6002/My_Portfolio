import { createFileRoute } from "@tanstack/react-router";
import { PdfViewer } from "@/components/portfolio/PdfViewer";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Ananda J | Resume" },
      { name: "description", content: "Ananda J - Resume" },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return <PdfViewer file="/resume.pdf" title="Ananda J - Resume" />;
}

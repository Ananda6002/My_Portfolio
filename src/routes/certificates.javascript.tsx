import { createFileRoute } from "@tanstack/react-router";
import { PdfViewer } from "@/components/portfolio/PdfViewer";

export const Route = createFileRoute("/certificates/javascript")({
  head: () => ({
    meta: [
      { title: "Mastering JavaScript Certificate | Ananda J" },
      { name: "description", content: "Mastering JavaScript Certificate - Ananda J" },
    ],
  }),
  component: JavaScriptCertificatePage,
});

function JavaScriptCertificatePage() {
  return (
    <PdfViewer
      file="/certificates/Mastering_JavaScript_Certificate.pdf"
      title="Mastering JavaScript Certificate"
    />
  );
}

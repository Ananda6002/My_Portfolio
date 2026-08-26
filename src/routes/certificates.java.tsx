import { createFileRoute } from "@tanstack/react-router";
import { PdfViewer } from "@/components/portfolio/PdfViewer";

export const Route = createFileRoute("/certificates/java")({
  head: () => ({
    meta: [
      { title: "Java Foundation Certificate | Ananda J" },
      { name: "description", content: "Java Foundation Certificate - Ananda J" },
    ],
  }),
  component: JavaCertificatePage,
});

function JavaCertificatePage() {
  return (
    <PdfViewer
      file="/certificates/Java_Foundation_Certificate.pdf"
      title="Java Foundation Certificate"
    />
  );
}

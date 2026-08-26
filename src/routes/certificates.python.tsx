import { createFileRoute } from "@tanstack/react-router";
import { PdfViewer } from "@/components/portfolio/PdfViewer";

export const Route = createFileRoute("/certificates/python")({
  head: () => ({
    meta: [
      { title: "Python Foundation Certificate | Ananda J" },
      { name: "description", content: "Python Foundation Certificate - Ananda J" },
    ],
  }),
  component: PythonCertificatePage,
});

function PythonCertificatePage() {
  return (
    <PdfViewer
      file="/certificates/Python_Foundation_Certificate.pdf"
      title="Python Foundation Certification"
    />
  );
}

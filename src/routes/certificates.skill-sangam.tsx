import { createFileRoute } from "@tanstack/react-router";
import { PdfViewer } from "@/components/portfolio/PdfViewer";

export const Route = createFileRoute("/certificates/skill-sangam")({
  head: () => ({
    meta: [
      { title: "Skill Sangam 2K25 Certificate | Ananda J" },
      { name: "description", content: "Skill Sangam 2K25 Certificate - Ananda J" },
    ],
  }),
  component: SkillSangamCertificatePage,
});

function SkillSangamCertificatePage() {
  return (
    <PdfViewer
      file="/certificates/Skill_Sangam_2K25_Certificate.pdf"
      title="Skill Sangam 2K25 Certificate"
    />
  );
}

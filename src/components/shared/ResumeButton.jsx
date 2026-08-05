import { Download } from "lucide-react";

export default function ResumeButton() {
  return (
    <a
      href="/resume/Fahim-Ahmed-Resume.pdf"
      download
      className="btn btn-primary rounded-xl"
    >
      <Download size={18} />
      Resume
    </a>
  );
}
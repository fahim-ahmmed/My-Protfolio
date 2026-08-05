import Link from "next/link";
import socialLinks from "@/data/socialLinks";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4 mt-8">
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <Link
            key={social.id}
            href={social.url}
            target="_blank"
            className="btn btn-circle btn-outline hover:btn-primary transition-all"
          >
            <Icon size={20} />
          </Link>
        );
      })}
    </div>
  );
}
import { Github, Linkedin, Twitter } from "lucide-react";
import { clsx } from "clsx";
import { socials } from "../../data/site";

const icons = { github: Github, linkedin: Linkedin, twitter: Twitter };

export function SocialLinks({ className, size = 20 }) {
  return (
    <ul className={clsx("flex items-center gap-1", className)}>
      {socials.map(({ key, label, url }) => {
        const Icon = icons[key];
        return (
          <li key={key}>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-fg"
            >
              <Icon size={size} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

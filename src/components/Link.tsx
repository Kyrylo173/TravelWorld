import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function Link({ href, children, className = '' }: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
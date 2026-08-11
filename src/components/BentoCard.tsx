import type { ReactNode } from 'react';

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  strong?: boolean;
  as?: 'div' | 'article' | 'li';
};

export function BentoCard({ children, className = '', strong = false, as: Tag = 'div' }: BentoCardProps) {
  return (
    <Tag className={`bento-item ${strong ? 'glass-strong' : 'glass'} ${className}`.trim()}>
      {children}
    </Tag>
  );
}

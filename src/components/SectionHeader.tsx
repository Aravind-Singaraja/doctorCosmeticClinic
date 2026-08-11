import type { ReactNode } from 'react';

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({ eyebrow, title, subtitle, align = 'left' }: SectionHeaderProps) {
  return (
    <div className="section-head" style={{ textAlign: align, marginInline: align === 'center' ? 'auto' : undefined }}>
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <div className="rule" style={{ marginInline: align === 'center' ? 'auto' : undefined }} />
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}

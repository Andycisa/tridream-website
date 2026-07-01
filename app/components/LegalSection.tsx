export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-sm font-medium text-muted">{title}</h2>
      <div className="mt-3 space-y-2 text-base leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}

export default function DashboardCardsSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid auto-rows-min gap-4 p-4 md:grid-cols-3">
      {children}
    </div>
  );
}

import KPICard from "@/components/KPICard";
import { BookOpen, Package, Users, Wallet } from "lucide-react";

const KPIData = [
  { kpiName: "Total Bookings", kpiValue: "12", Icon: BookOpen },
  { kpiName: "Current Packages", kpiValue: "4", Icon: Package },
  { kpiName: "Total Trainers", kpiValue: "5", Icon: Users },
  { kpiName: "Total Payments", kpiValue: "12,345", Icon: Wallet },
];

export default function Page() {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {KPIData.map((kpi, index) => (
          <KPICard
            key={index}
            kpiName={kpi.kpiName}
            kpiValue={kpi.kpiValue}
            Icon={kpi.Icon}
          />
        ))}
      </div>
    </section>
  );
}

"use client";
import KPICard from "@/components/KPICard";
import { BookOpen, Package, Users, Wallet } from "lucide-react";

const KPIData = [
  { kpiName: "Total Payments", kpiValue: 12345, Icon: Wallet, kpiUrl: '/reports' },
  { kpiName: "Total Bookings", kpiValue: 12, Icon: BookOpen, kpiUrl: '/booking-history' },
  { kpiName: "Total Trainers", kpiValue: 5, Icon: Users, kpiUrl: '/trainers' },
  { kpiName: "Current Packages", kpiValue: 4, Icon: Package, kpiUrl: '/packages' },
];



export default function Dashboard() {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPIData.map((kpi) => (
          <KPICard
            key={kpi.kpiName}
            {...kpi}
          />
        ))}
      </div>
    </section>
  );
}

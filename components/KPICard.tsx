'use client';


import Link from 'next/link';
import CountUp from 'react-countup';

interface KPICardProps {
  kpiName: string;
  kpiValue: number;
  Icon: React.ElementType;
  kpiUrl: string;
}

export default function KPICard({ kpiName, kpiValue, Icon, kpiUrl }: KPICardProps) {
  return (
    <Link href={kpiUrl} >
    <div className="group p-4 rounded-3xl border border-gray-200 bg-white  transition-all duration-300 max-w-sm cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-inner">
          <Icon className="h-8 w-8 text-gray-700 group-hover:text-black transition-colors" />
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">{kpiName}</span>
          <span className="text-3xl font-bold tracking-tight text-gray-900">
            <CountUp
              start={0}
              end={kpiValue}
            />
          </span>
        </div>
      </div>
    </div>
    </Link>
  );
}

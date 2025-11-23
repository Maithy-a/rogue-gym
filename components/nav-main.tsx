"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
}

interface NavMainProps {
  menuItems: NavItem[];
}

export function NavMain({ menuItems }: NavMainProps) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-4">
        <SidebarMenu>
          {menuItems.map((menuItem,) => {
            const active = pathname === menuItem.url;

            return (
              <SidebarMenuItem key={menuItem.title}>
                <SidebarMenuButton asChild isActive={active} size='lg'>
                  <Link
                    href={menuItem.url}
                    className={`flex items-center w-full ${active
                      ? "font-semibold text-black"
                      : "text-gray-600 hover:text-black"
                      }`}
                  >
                    {menuItem.icon && <menuItem.icon className="mr-2 h-4 w-4" />}
                    <span>{menuItem.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

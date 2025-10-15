"use client"

import * as React from "react"

import {
  House,
  LibraryBig,
  History,
  Folder,
  Cog
} from "lucide-react";

import Link from "next/link";

import { useUser } from "@clerk/nextjs";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Skeleton } from "./ui/skeleton";

const navItems = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: House,
    },
    {
      title: "Package",
      url: "/package",
      icon: LibraryBig,
    },
    {
      title: "Booking History",
      url: "/booking-history",
      icon: History,
    },
    {
      title: "Report",
      url: "/report",
      icon: Folder,
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <Sidebar collapsible="offcanvas" {...props}>
        <SidebarHeader className="mb-6">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="data-[slot=sidebar-menu-button]:!p-1.5"
              >
                <Link href="/dashboard">
                  <span className="font-semibold text-2xl text-primary">Rogue Gym.</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent className="space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center gap-3 px-4">
              <Skeleton className="h-8 w-10 rounded-md" />
              <Skeleton className="h-8 w-full rounded-md" />
            </div>
          ))}
        </SidebarContent>

        <SidebarFooter className="flex flex-row items-center gap-3 p-4">
          <Skeleton className="h-8 w-12 rounded-md" />
          <Skeleton className="h-8 w-full rounded-md" />
        </SidebarFooter>

      </Sidebar>
    )
  }

  const userData = {
    name: `${user?.firstName || ""} ${user?.lastName || ""}`.trim() || "Anonymous",
    email: user?.primaryEmailAddress?.emailAddress || "No email",
    avatar: user?.imageUrl || "",
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="mb-6">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/dashboard">
                <span className="font-semibold text-2xl text-primary">Rogue Gym.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navItems.navMain} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  )
}

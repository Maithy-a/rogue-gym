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
import { NavSecondary } from "@/components/nav-secondary";
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
  ],

  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: Cog,
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <Sidebar collapsible="offcanvas" {...props}>
        <div className="p-4 text-sm text-muted-foreground">
          Loading user...
        </div>
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
                <span className="font-semibold text-xl text-primary">Rogue Gym.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems.navMain} />
        <NavSecondary items={navItems.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  )
}

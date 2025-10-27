"use client";

import { AppSidebar } from "@/components/app-sidebar";
<<<<<<< HEAD
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileData } from "@/components/profile-data";
import Readme from "@/components/readme";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export default function Page() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCertificateData().then((fetchedData) => {
      if (fetchedData) {
        setData(fetchedData);
      }
      setLoading(false);
    });
  }, []);

  async function getCertificateData() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/Dijkstra/test/certificate/data/`
      );
      if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
      return await res.json();
    } catch (error) {
      console.error("Error fetching certificate data:", error);
      return null;
    }
  }

  const { data: session, status } = useSession();

=======
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { DataTable } from "@/components/blogs/data-table";
import { columns } from "@/components/blogs/columns";
import { personalBlogs, lcBlogs } from "@/lib/mock-data";
import { UserProfileCard } from "@/components/user-profile-card";
import { QuickActions } from "@/components/quick-actions";
import { LCBlogCard } from "@/components/blogs/lc-blog-card";
import { LCInstructionsCard } from "@/components/blogs/lc-instructions-card";

export default function BlogDashboardPage() {
>>>>>>> 1aaf95b (Incorporating the blog and articles section frontend)
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
<<<<<<< HEAD
      <SidebarInset className="h-[calc(100vh-20px)] flex flex-col overflow-hidden">
        {/* Sticky header */}
        <div className="sticky top-0 z-10 bg-background">
          <SiteHeader title="Blogs and Articles" />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-4 lg:px-6 landing-page">
          <div className="@container/main flex flex-1 flex-row gap-6 py-4">
            Hello
=======

      <SidebarInset className="h-[calc(100vh-20px)] flex flex-col overflow-hidden">
        <div className="sticky top-0 z-10 bg-background">
          <SiteHeader title="Blog Dashboard" />
        </div>

        {/* ✅ Reduced vertical padding to bring everything up */}
        <div className="flex-1 overflow-y-auto px-6 py-2 space-y-6 landing-page">

          {/* ✅ Brought button up & aligned right neatly */}
          <div className="flex justify-end">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              New Blog
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
            <div className="space-y-6">
              <div>
                <div className="mb-4">
                  <h2 className="text-2xl font-bold tracking-tight">Personal Blogs</h2>
                  <p className="text-sm text-muted-foreground">
                    Manage and organize your blog posts
                  </p>
                </div>

                <DataTable data={personalBlogs} columns={columns} />
              </div>

              <Separator />
            </div>

            <div className="space-y-6">
              <UserProfileCard />
              <QuickActions />
            </div>
          </div>

          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold tracking-tight">LeetCode Blogs</h2>
              <p className="text-sm text-muted-foreground">
                Automatically generated from your LeetCode solutions
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              <LCInstructionsCard />
              {lcBlogs.map((blog) => (
                <LCBlogCard key={blog.id} blog={blog} />
              ))}
            </div>
>>>>>>> 1aaf95b (Incorporating the blog and articles section frontend)
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

// src/data/sidebarData.tsx
import React from "react";
import {
  LayoutDashboard,
  Home,
  Layers,
  Settings,
  User,
  BarChart2,
  FileText,
  Command,
  Target,
  PanelLeft,
} from "lucide-react";
import type { SectionNames } from "@/hooks/useSidebarState";

export interface SidebarIconItem {
  icon: React.ReactElement<{ className?: string, size?: number }>; // Bu zaten güncellenmişti
  title: string;
}

export interface SidebarSectionItem {
  icon: React.ReactElement<{ className?: string, size?: number }>; // GÜNCELLENDİ
  text: string;
  href?: string;
  active?: boolean;
  badge?: number | string;
}

export interface SidebarSection {
  sectionKey: SectionNames;
  title: string;
  items: SidebarSectionItem[];
}

export const sidebarIconsList: SidebarIconItem[] = [
  { icon: <Layers />, title: "Gösterge Paneli" },
  { icon: <Home />, title: "Ana Sayfa" },
  { icon: <Command />, title: "Pazarlama" },
  { icon: <Settings />, title: "Ayarlar" },
];

export const sidebarContentConfig: Record<string, SidebarSection[]> = {
  "Gösterge Paneli": [
    {
      sectionKey: "campaigns", title: "Kampanyalar", items: [
        { icon: <LayoutDashboard />, text: "Genel Bakış", href: "/dashboard/overview" },
        { icon: <BarChart2 />, text: "Öneriler", href: "/dashboard/recommendations" },
        { icon: <Target />, text: "Analizler", badge: 10, href: "/dashboard/insights" },
      ]
    },
    {
      sectionKey: "adGroups", title: "Reklam Grupları", items: [
        { icon: <Layers />, text: "Tüm Gruplar", href: "/dashboard/ad-groups" },
        { icon: <FileText />, text: "Raporlar", href: "/dashboard/ad-groups/reports" },
      ]
    },
    {
      sectionKey: "audiences", title: "Kitleler", items: [
        { icon: <User />, text: "Segmentler", href: "/dashboard/audiences" },
      ]
    },
  ],
  "Ana Sayfa": [
    {
      sectionKey: "home", title: "Ev", items: [
        { icon: <Home />, text: "Anasayfa", href: "/" },
        { icon: <PanelLeft />, text: "Son Aktiviteler", href: "/recent" },
      ]
    },
    {
      sectionKey: "productCatalog", title: "Ürünler", items: [
        { icon: <Layers />, text: "Katalog", href: "/products" },
      ]
    }
  ],
  "Pazarlama": [
     {
      sectionKey: "marketingCampaigns", title: "Pazarlama Kampanyaları", items: [
        { icon: <Target />, text: "Aktif Kampanyalar", href: "/marketing/active" },
      ]
    }
  ],
  "Ayarlar": [
    {
      sectionKey: "account", title: "Hesap", items: [
        { icon: <User />, text: "Profil", href: "/settings/profile" },
        { icon: <Settings />, text: "Genel Ayarlar", href: "/settings/general" },
      ]
    },
    {
      sectionKey: "system", title: "Sistem", items: [
        { icon: <Command />, text: "Sistem Bilgisi", href: "/settings/system-info" },
      ]
    }
  ],
};
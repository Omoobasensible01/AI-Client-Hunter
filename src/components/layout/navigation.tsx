import {
  LayoutDashboard,
  Search,
  Brain,
  Users,
  BarChart3,
  Settings,
  Mail,
  FileText,
  CreditCard,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Lead Search",
    href: "/leads",
    icon: Search,
  },
  {
    title: "Lead Intelligence",
    href: "/intelligence",
    icon: Brain,
  },
  {
    title: "AI Outreach",
    href: "/outreach",
    icon: Mail,
  },
  {
    title: "CRM",
    href: "/crm",
    icon: Users,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Proposals",
    href: "/proposals",
    icon: FileText,
  },
  {
    title: "Billing",
    href: "/billing",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];
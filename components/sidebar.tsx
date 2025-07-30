"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Building, User, GraduationCap, Bell, UserPlus, LogOut } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface SidebarProps {
  notificationCount?: number
}

export function Sidebar({ notificationCount = 3 }: SidebarProps) {
  const pathname = usePathname()

  const handleLogout = () => {
    console.log("Cerrando sesión...")
    // Aquí iría la lógica de cierre de sesión
  }

  const sidebarItems = [
    { path: "/", icon: Phone, label: "Agenda telefónica" },
    { path: "/grupos", icon: Building, label: "Grupos" },
    { path: "/carreras", icon: GraduationCap, label: "Carreras" },
    { path: "/notificaciones", icon: Bell, label: "Notificación", badge: notificationCount },
    { path: "/invitaciones", icon: UserPlus, label: "Invitación" },
    { path: "/perfil", icon: User, label: "Perfil" },
  ]

  return (
    <div className="w-64 bg-gradient-to-b from-green-500 to-green-600 text-white flex flex-col h-screen">
      <div className="p-4 border-b border-green-400">
        <h2 className="text-lg font-semibold">Agenda UML</h2>
      </div>

      <nav className="flex-1 p-2">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link href={item.path} key={item.path}>
              <button
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors mb-1 ${
                  isActive ? "bg-white/20 text-white font-medium" : "text-green-100 hover:bg-white/10 hover:text-white"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
                {item.badge && item.badge > 0 && (
                  <Badge className="ml-auto bg-red-500 text-white text-xs">{item.badge}</Badge>
                )}
              </button>
            </Link>
          )
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-2 border-t border-green-400">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-green-100 hover:bg-red-500/20 hover:text-white"
        >
          <LogOut className="w-4 h-4" />
          Cerrar Sesión
        </button>
      </div>
    </div>
  )
}

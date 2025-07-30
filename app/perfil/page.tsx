"use client"

import Link from "next/link"
import { User, Bell, GraduationCap, Phone, Building, Users, UserPlus, LogOut } from "lucide-react"

const handleLogout = () => {
  console.log("Cerrando sesión...")
}

export default function PerfilPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-green-500 to-green-600 text-white flex flex-col">
        <div className="p-4 border-b border-green-400">
          <h2 className="text-lg font-semibold">Agenda UML</h2>
        </div>

        <nav className="flex-1 p-2">
          <Link
            href="/agenda"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors mb-1 text-green-100 hover:bg-white/10 hover:text-white"
          >
            <Phone className="w-4 h-4" />
            Agenda telefónica
          </Link>
          <Link
            href="/usuarios"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors mb-1 text-green-100 hover:bg-white/10 hover:text-white"
          >
            <Users className="w-4 h-4" />
            Usuarios
          </Link>
          <Link
            href="/grupos"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors mb-1 text-green-100 hover:bg-white/10 hover:text-white"
          >
            <Building className="w-4 h-4" />
            Grupos
          </Link>
          <Link
            href="/carreras"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors mb-1 text-green-100 hover:bg-white/10 hover:text-white"
          >
            <GraduationCap className="w-4 h-4" />
            Carreras
          </Link>
          <Link
            href="/perfil"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors mb-1 bg-white/20 text-white font-medium"
          >
            <User className="w-4 h-4" />
            Perfil
          </Link>
          <Link
            href="/notificaciones"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors mb-1 text-green-100 hover:bg-white/10 hover:text-white"
          >
            <Bell className="w-4 h-4" />
            Notificación
            <span className="bg-red-500 text-white text-xs ml-auto">3</span>
          </Link>
          <Link
            href="/invitaciones"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors mb-1 text-green-100 hover:bg-white/10 hover:text-white"
          >
            <UserPlus className="w-4 h-4" />
            Invitación
          </Link>
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

      {/* Main Content */}
      <div className="flex-1 p-6">{/* Profile Content Here */}</div>
    </div>
  )
}

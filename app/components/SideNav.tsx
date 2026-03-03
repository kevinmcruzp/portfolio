import { Briefcase, Mail, MapPin, User } from "lucide-react";

// --- COMPONENTE DE NAVEGAÇÃO LATERAL (NOVO) ---
export const SideNav = () => {
    const links = [
        { id: "hero", label: "Início", icon: <User size={18} /> },
        { id: "saga", label: "Saga", icon: <MapPin size={18} /> },
        { id: "works", label: "Obras", icon: <Briefcase size={18} /> },
        { id: "contact", label: "Contato", icon: <Mail size={18} /> },
    ];

    return (
        <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-6">
            {links.map((link, index) => (
                <a 
                    key={link.id} 
                    href={`#${link.id}`}
                    className="group flex items-center justify-end gap-4 relative"
                >
                    {/* Label aparece no hover com animação de deslize */}
                    <span className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 bg-nordic-wood border border-nordic-bronze/30 px-3 py-1 text-xs text-nordic-gold font-serif uppercase tracking-widest rounded shadow-xl">
                        {link.label}
                    </span>
                    
                    {/* Marcador Estilo Runa/Botão */}
                    <div className="w-10 h-10 bg-nordic-wood border border-nordic-iron group-hover:border-nordic-bronze rounded rotate-45 flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-[0_0_15px_rgba(180,83,9,0.3)]">
                        <div className="-rotate-45 text-nordic-parchment group-hover:text-nordic-bronze transition-colors">
                            {link.icon}
                        </div>
                    </div>
                </a>
            ))}
            {/* Linha vertical conectando */}
            <div className="absolute top-0 bottom-0 right-[1.2rem] w-px bg-nordic-iron -z-10" />
        </nav>
    );
};
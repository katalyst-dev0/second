"use client"

export function GradientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden bg-black" style={{ zIndex: -1 }}>
      {/* Mesh Background - Set to full opacity */}
      <img 
        src="/mesh-700.png" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 1 }}
      />
      
      {/* Very faint glows to not obscure the mesh */}
      <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] opacity-20 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2)_0%,transparent_70%)] blur-[100px]" />
      <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] opacity-15 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)] blur-[120px]" />
    </div>
  )
}

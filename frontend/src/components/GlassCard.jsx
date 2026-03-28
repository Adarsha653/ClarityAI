export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 ${className}`}>
      {children}
    </div>
  )
}
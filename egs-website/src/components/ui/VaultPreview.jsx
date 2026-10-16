const tones = {
  ok: 'bg-cyan-claro text-cyan-texto',
  info: 'bg-azul-medio/10 text-azul-medio',
  wait: 'bg-gray-100 text-gris-medio',
};

const rows = [
  { name: 'Contratos', status: 'Preservado', tone: 'ok' },
  { name: 'Historias laborales', status: 'Indexado', tone: 'info' },
  { name: 'Actas de comité', status: 'En digitalización', tone: 'wait' },
  { name: 'Planos y proyectos', status: 'Preservado', tone: 'ok' },
];

// Maqueta decorativa de Nebula Vault (ventana minimalista). No expone datos reales.
export default function VaultPreview() {
  return (
    <div aria-hidden="true" className="bg-white border border-line rounded-card shadow-soft overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        <span className="ml-3 text-xs text-gris-medio">Nebula Vault</span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 border border-line rounded-md px-3 py-2 text-xs text-gris-medio mb-3">
          <i className="fas fa-magnifying-glass" />
          Buscar en el archivo digital
        </div>
        <ul className="divide-y divide-line">
          {rows.map((r) => (
            <li key={r.name} className="flex items-center justify-between gap-3 py-3">
              <span className="flex items-center gap-3 text-sm font-medium text-azul-profundo">
                <i className="fas fa-file-lines text-gris-medio" />
                {r.name}
              </span>
              <span className={`text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full ${tones[r.tone]}`}>
                {r.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between px-5 py-3 border-t border-line bg-gris-bg text-xs text-gris-medio">
        <span>Estándar OAIS</span>
        <span>Acceso 24/7</span>
      </div>
    </div>
  );
}
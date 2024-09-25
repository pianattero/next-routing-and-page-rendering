
export default function ArchiveLayout({ archive, latest }) {
 return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  )
}

//! Cuando uso 'parallel routes' (se escriben con @ al inicio del nombre), puedo ver todas las páginas al mismo tiempo
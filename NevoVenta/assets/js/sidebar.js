// Barra lateral izquierda definitiva — Nexo Venta POS
(function() {
  const SB = `<!-- ================= SIDEBAR ================= -->
<aside class="sidebar" id="sidebar">
  <div class="logo">
    <div class="logo-mark" style="background:#17517a;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M6 20V5h3.2l6 9.5V5H18.5v15h-3.2l-6-9.5V20H6z" fill="#fff"/>
        <path d="M13.2 15.8l2.9 3.5 4.6-5.4" stroke="#fff" stroke-width="2.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="18" y="3" width="5.2" height="2.6" fill="#aeb9c4" transform="rotate(-28 20.6 4.3)"/>
      </svg>
    </div>
    <div class="logo-text"><b style="color:#fff;">Nexo</b><span style="color:#8ea3b3;letter-spacing:.8px;font-size:10px;">Venta</span></div>
  </div>

  <button class="btn-sale">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
    Registrar venta
  </button>

  <div class="nav-wrap">
    <div class="nav-item">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/></svg>
      Inicio
    </div>
  </div>

  <div class="nav-wrap" tabindex="0">
    <div class="nav-item">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4.5V3h6v1.5"/><path d="M8.5 10.5h7M8.5 14h7M8.5 17.5h4"/></svg>
      Inventario
    </div>
    <div class="submenu">
      <div class="sub-item">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="5.5" cy="6" r="2.4"/><circle cx="18.5" cy="6" r="2.4"/><circle cx="12" cy="18" r="2.4"/><path d="M7.7 7.4 10.5 16M16.3 7.4 13.5 16M8 6h8"/></svg>
        Categoría
      </div>
      <div class="sub-item">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>
        Producto
      </div>
      <div class="sub-item">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v4h4"/><path d="M9 11h6M9 14.5h6M9 18h4"/></svg>
        Reporte
      </div>
    </div>
  </div>

  <div class="nav-wrap" tabindex="0">
    <div class="nav-item">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="9" cy="6.5" rx="6" ry="2.8"/><path d="M3 6.5v5c0 1.6 2.7 2.8 6 2.8s6-1.2 6-2.8v-5"/><path d="M3 11.5v5c0 1.6 2.7 2.8 6 2.8 1.6 0 3-.3 4.2-.8"/><ellipse cx="17" cy="9.5" rx="4" ry="1.9"/><path d="M13 9.5v5c0 1 .9 1.8 2.3 1.9"/></svg>
      Ventas
    </div>
    <div class="submenu">
      <div class="sub-item">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h12v20l-2-1.5L14 22l-2-1.5L10 22l-2-1.5L6 22V2z"/><path d="M9 6.5h6M9 10.5h6M9 14.5h4"/></svg>
        POS
      </div>
      <div class="sub-item">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v2h6V3"/><rect x="8.5" y="11" width="2" height="5" fill="currentColor" stroke="none"/><rect x="11.5" y="8.5" width="2" height="7.5" fill="currentColor" stroke="none"/><rect x="14.5" y="13" width="2" height="3" fill="currentColor" stroke="none"/></svg>
        Reportes
      </div>
    </div>
  </div>

  <div class="nav-wrap" tabindex="0">
    <div class="nav-item">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 2h14v20l-2-1.5L15 22l-2-1.5L11 22l-2-1.5L7 22l-2-1.5V2z"/><path d="M8.5 6.5h7M8.5 10h7M8.5 13.5h7M8.5 17h4"/></svg>
      Facturas
    </div>
    <div class="submenu">
      <div class="sub-item">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12v18l-2-1.4-2 1.4-2-1.4L10 21l-2-1.4L6 21z"/><path d="M9 8h6M9 12h4"/><path d="m10.8 15.6 1.6 1.6 2.8-2.8"/></svg>
        Venta
      </div>
      <div class="sub-item">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 4.5h2l2.4 11h10.8l2-7.5H6.1"/><circle cx="9.5" cy="19.5" r="1.6"/><circle cx="16.5" cy="19.5" r="1.6"/></svg>
        Compra
      </div>
      <div class="sub-item">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v4h4"/><rect x="9" y="12" width="1.8" height="5" fill="currentColor" stroke="none"/><rect x="12" y="9.5" width="1.8" height="7.5" fill="currentColor" stroke="none"/><rect x="15" y="14" width="1.8" height="3" fill="currentColor" stroke="none"/></svg>
        Reportes
      </div>
    </div>
  </div>

  <div class="nav-wrap" tabindex="0">
    <div class="nav-item">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.5" cy="8" r="3.3"/><path d="M2.5 20c0-3.3 2.7-5.4 6-5.4s6 2.1 6 5.4"/><circle cx="17" cy="9" r="2.5"/><path d="M15.8 14.7c3 .4 5 2.3 5 5.3"/></svg>
      Clientes
    </div>
    <div class="submenu">
      <div class="sub-item">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="8" r="3.4"/><path d="M3.5 20c0-3.6 2.9-5.8 6.5-5.8 1.7 0 3.2.5 4.4 1.4"/><circle cx="17.5" cy="17.5" r="3.2"/><path d="m19.8 19.8 2 2"/></svg>
        Lista
      </div>
      <div class="sub-item">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v2h6V3"/><path d="M8.5 11h7M8.5 14.5h7M8.5 18h4"/></svg>
        Reporte
      </div>
    </div>
  </div>

  <div class="nav-wrap" tabindex="0">
    <div class="nav-item">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V3h3.5v6"/><path d="M3 21V9l5 3.5V9l5 3.5V9l5 3.5V21"/><path d="M3 21h18M7.5 17.5h2.5M12.5 17.5h2.5"/></svg>
      Proveedores
    </div>
    <div class="submenu">
      <div class="sub-item">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 4h3.6l4.4 5.5V4h5.5l4 5v11h-17V4z"/><path d="M7.5 20v-4.5h3V20"/></svg>
        Lista
      </div>
      <div class="sub-item">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v4h4"/><path d="M9 11h6M9 14.5h6M9 18h4"/></svg>
        Reporte
      </div>
    </div>
  </div>

  <div class="nav-wrap">
    <div class="nav-item">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
      Ajustes
    </div>
  </div>

  <div class="nav-spacer"></div>
  <div class="user-box">
    <div class="avatar">DM</div>
    <div><b>Daniel Montero</b><span>Administrador</span></div>
  </div>
</aside>`;
  document.body.insertAdjacentHTML('afterbegin', SB);

  const ROUTES = {
  'Inicio': {},
  'Inventario': {'Categoría':'inventario-categoria.html','Producto':'inventario-producto.html','Reporte':'inventario-reporte.html'},
  'Ventas': {'POS':'ventas-pos.html','Reportes':'ventas-reportes.html'},
  'Facturas': {'Venta':'facturas-venta.html','Compra':'facturas-compra.html','Reportes':'facturas-reportes.html'},
  'Clientes': {'Lista':'clientes-lista.html','Reporte':'clientes-reporte.html'},
  'Proveedores': {'Lista':'proveedores-lista.html','Reporte':'proveedores-reporte.html'},
  'Ajustes': {}
};

  // Clic en módulos sin submódulos
  document.querySelectorAll('#sidebar .nav-wrap > .nav-item').forEach(el => {
    const mod = el.textContent.trim();
    if (mod === 'Inicio') el.addEventListener('click', () => location.href = 'index.html');
    if (mod === 'Ajustes') el.addEventListener('click', () => showToast('Ajustes no disponible en el prototipo'));
  });

  // Clic en submódulos
  document.querySelectorAll('#sidebar .nav-wrap').forEach(w => {
    const mod = w.querySelector(':scope > .nav-item').textContent.trim();
    w.querySelectorAll(':scope > .submenu .sub-item').forEach(s => {
      const sub = s.textContent.trim();
      const href = (ROUTES[mod] || {})[sub];
      if (href) s.addEventListener('click', () => location.href = href);
    });
  });

  // Logo y botón Registrar venta
  const logo = document.querySelector('#sidebar .logo');
  if (logo) { logo.style.cursor = 'pointer'; logo.addEventListener('click', () => location.href = 'index.html'); }
  const btnSale = document.querySelector('#sidebar .btn-sale');
  if (btnSale) btnSale.addEventListener('click', () => location.href = 'ventas-pos.html');

  // Toast para acciones no disponibles
  window.showToast = function(msg) {
    let t = document.getElementById('sb-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'sb-toast';
      t.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(80px);background:#16303e;color:#fff;font-size:12px;font-weight:600;padding:11px 20px;border-radius:10px;transition:transform .25s;z-index:999;font-family:Inter,system-ui,sans-serif;';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    requestAnimationFrame(() => { t.style.transform = 'translateX(-50%) translateY(0)'; });
    clearTimeout(window.__sbToast);
    window.__sbToast = setTimeout(() => { t.style.transform = 'translateX(-50%) translateY(80px)'; }, 2600);
  };
})();

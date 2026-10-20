  transition: .2s ease;
}
.filter:hover, .filter.active { color: #07111b; background: var(--cyan); border-color: var(--cyan); }
.card-grid, .info-grid, .article-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
.card, .info-card, .article {
  min-width: 0;
  background: linear-gradient(145deg, rgba(18,27,41,.96), rgba(13,19,29,.96));
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease;
}
.card:hover, .info-card:hover, .article:hover {
  transform: translateY(-5px);
  border-color: rgba(101,231,255,.35);
  box-shadow: 0 18px 45px rgba(0,0,0,.22);
}
.card-cover {
  min-height: 160px;
  display: grid; place-items: center;
  position: relative; overflow: hidden;
  font-size: 35px; font-weight: 950; letter-spacing: -.04em;
  color: #e8f8ff;
  background:
    radial-gradient(circle at 70% 35%, rgba(101,231,255,.18), transparent 30%),
    linear-gradient(135deg, #1a2941, #141729 60%, #201a3b);
  border-bottom: 1px solid var(--line);
}
.card-cover::after {
  content: ""; position: absolute; width: 140px; height: 140px;
  border: 1px solid rgba(101,231,255,.16); border-radius: 28px;
  transform: rotate(35deg); right: -24px; bottom: -75px;
}
.card-body { padding: 22px; }
.badges { display: flex; gap: 7px; flex-wrap: wrap; margin-bottom: 13px; }
.badge {
  display: inline-flex; align-items: center;
  font-size: 10px; font-weight: 750; padding: 4px 9px;
  border-radius: 6px; background: rgba(101,231,255,.08);
  border: 1px solid rgba(101,231,255,.12); color: #a9eefa;
}
.card h3, .info-card h3, .article h3 { margin: 0 0 8px; font-size: 18px; line-height: 1.35; letter-spacing: -.02em; }
.card p, .info-card p, .article p { margin: 0; color: var(--muted); font-size: 13px; }
.card-footer { display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-top: 20px; color: #8396ae; font-size: 11px; }
.card-footer span:last-child { color: var(--cyan); font-weight: 800; }
.empty { display: none; color: var(--muted); text-align: center; padding: 34px; border: 1px dashed var(--line); border-radius: 16px; }

.info-card { padding: 25px; }
.icon { display: block; font-size: 25px; color: var(--cyan); margin-bottom: 18px; }
.translation-box {
  display: grid; grid-template-columns: 2fr repeat(3, minmax(0, 1fr));
  gap: 1px; background: var(--line); border: 1px solid var(--line);
  border-radius: var(--radius); overflow: hidden;
}
.translation-box > div { min-width: 0; background: var(--panel); padding: 26px; }
.translation-box p { color: var(--muted); margin-bottom: 0; font-size: 13px; }
.status-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #6cf0b4; margin-right: 8px; box-shadow: 0 0 12px rgba(108,240,180,.5); }
.translation-stat { display: flex; flex-direction: column; justify-content: center; }
.translation-stat strong { font-size: 22px; }
.translation-stat span { color: var(--muted); font-size: 12px; }
.article { padding: 24px; }
.article .article-tag { color: var(--cyan); font-size: 10px; font-weight: 850; letter-spacing: .13em; margin-bottom: 13px; }
.about-inner { display: grid; grid-template-columns: 1fr 1.5fr; gap: 55px; align-items: start; }
.about-inner > p { color: var(--muted); margin: 0; font-size: 15px; }
footer { border-top: 1px solid var(--line); padding: 30px 0; color: var(--muted); font-size: 12px; }
.footer-inner { display: flex; justify-content: space-between; align-items: center; gap: 20px; }
.footer-inner strong { color: var(--text); }
.footer-inner span { color: var(--muted); }

@media (max-width: 900px) {
  .nav-wrap { gap: 15px; }
  nav { gap: 2px; }
  nav a { padding: 8px 9px; font-size: 12px; }
  .hero-inner { grid-template-columns: minmax(0, 1.1fr) minmax(230px, .8fr); gap: 30px; padding-block: 65px; }
  .hero-card { min-height: 250px; }
  .card-grid, .info-grid, .article-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .translation-box { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .translation-box > div:first-child { grid-column: 1 / -1; }
}
@media (max-width: 680px) {
  .container { width: min(var(--max), calc(100% - 32px)); }
  .nav-wrap { min-height: 68px; }
  .brand { font-size: 14px; }
  .brand-mark { width: 35px; height: 35px; }
  .menu-btn { display: inline-flex; align-items: center; justify-content: center; }
  nav {
    display: none; position: absolute; top: calc(100% + 1px); left: 0; right: 0;
    padding: 12px 16px 17px; flex-direction: column; align-items: stretch; gap: 4px;
    background: rgba(8,11,18,.98); border-bottom: 1px solid var(--line);
    box-shadow: 0 20px 30px rgba(0,0,0,.22);
  }
  nav.open { display: flex; }
  nav a { padding: 11px 12px; font-size: 14px; }
  .hero-inner { min-height: auto; grid-template-columns: 1fr; gap: 30px; padding-block: 58px 48px; }
  h1 { font-size: clamp(38px, 11vw, 56px); }
  .hero-text { font-size: 14px; margin: 20px 0 24px; }
  .hero-card { aspect-ratio: auto; min-height: 245px; }
  .hero-symbol { font-size: 82px; }
  .section { padding: 58px 0; }
  .section-head { align-items: flex-start; flex-direction: column; gap: 18px; }
  h2 { font-size: 30px; }
  .filters { gap: 7px; }
  .filter { padding: 8px 12px; }
  .card-grid, .info-grid, .article-grid { grid-template-columns: 1fr; gap: 14px; }
  .card-cover { min-height: 145px; }
  .translation-box { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .translation-box > div { padding: 17px 14px; }
  .translation-stat strong { font-size: 18px; }
  .translation-stat span { font-size: 11px; }
  .about-inner { grid-template-columns: 1fr; gap: 18px; }
  .footer-inner { flex-direction: column; align-items: flex-start; gap: 8px; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; }
}

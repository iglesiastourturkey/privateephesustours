/* eslint-disable @next/next/no-html-link-for-pages */
import { ArrowUpRight } from "lucide-react";
import { CONTACT_EMAIL, DEFAULT_WHATSAPP_URL, PHONE_DISPLAY } from "../content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div><strong>PRIVATE EPHESUS</strong><p>Private shore excursions, shaped by local expertise since 2010.</p></div>
      <div><small>EXPLORE</small><a href="/tours">All tours</a><a href="/about">About us</a><a href="/#faq">Frequently asked</a></div>
      <div><small>CONTACT</small><a href={DEFAULT_WHATSAPP_URL} target="_blank" rel="noreferrer">{PHONE_DISPLAY} <ArrowUpRight /></a><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><span>Kusadasi · Aydın · Türkiye</span></div>
      <div><small>LICENSED AGENCY</small><b>TÜRSAB 10772</b><span>Iglesias Tour Travel Agency</span></div>
      <p className="footer-bottom">© 2026 PrivateEphesusTours.com</p>
    </footer>
  );
}

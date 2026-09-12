"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type AnalyticsEvent = {
  name: "generate_lead" | "social_click" | "affiliate_click";
  parameters: Record<string, string>;
};

function sendEvent({ name, parameters }: AnalyticsEvent) {
  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag !== "function") {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }

  window.gtag("event", name, {
    ...parameters,
    page_path: window.location.pathname,
  });
}

function classifyLink(link: HTMLAnchorElement): AnalyticsEvent | null {
  const href = link.getAttribute("href") || "";
  const location = link.dataset.analyticsLocation || "sitewide";

  if (href.startsWith("https://wa.me/")) {
    return {
      name: "generate_lead",
      parameters: { contact_method: "whatsapp", cta_location: location },
    };
  }

  if (href.startsWith("tel:")) {
    return {
      name: "generate_lead",
      parameters: { contact_method: "phone", cta_location: location },
    };
  }

  if (href.startsWith("mailto:")) {
    return {
      name: "generate_lead",
      parameters: { contact_method: "email", cta_location: location },
    };
  }

  const socialNetwork = link.dataset.analyticsSocial;
  if (socialNetwork) {
    return {
      name: "social_click",
      parameters: { social_network: socialNetwork, cta_location: location },
    };
  }

  const affiliateProduct = link.dataset.analyticsAffiliate;
  if (affiliateProduct) {
    return {
      name: "affiliate_click",
      parameters: { product: affiliateProduct, cta_location: location },
    };
  }

  return null;
}

/** Registra ações de contato sem enviar telefone, e-mail ou texto da mensagem. */
export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const analyticsEvent = classifyLink(link);
      if (analyticsEvent) sendEvent(analyticsEvent);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

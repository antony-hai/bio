"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/resume";
import { useLanguage, type Lang } from "@/components/language-provider";
import { Mail, Phone, MapPin, ArrowUpRight, LucideIcon } from "lucide-react";

interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

const ui: Record<
  Lang,
  {
    title: string;
    intro: string;
    labels: { email: string; phone: string; location: string };
  }
> = {
  zh: {
    title: "联系我",
    intro:
      "目前正在寻找新的机会，欢迎任何关于全职岗位、技术交流或项目合作的沟通。",
    labels: { email: "邮箱", phone: "电话", location: "所在地" },
  },
  en: {
    title: "Contact",
    intro:
      "Currently open to new opportunities. Feel free to reach out about full-time roles, technical exchange, or project collaboration.",
    labels: { email: "Email", phone: "Phone", location: "Location" },
  },
};

function ContactRow({
  item,
  isLast,
}: {
  item: ContactItem;
  isLast: boolean;
}) {
  const content = (
    <>
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <item.icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted-foreground">{item.label}</p>
        <p className="truncate text-base font-medium text-card-foreground">
          {item.value}
        </p>
      </div>
      {item.href && (
        <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
      )}
    </>
  );

  const className = `group flex items-center gap-4 rounded-md px-4 py-4 transition-colors hover:bg-muted/60 sm:px-5 ${
    isLast ? "" : "border-b border-border"
  }`;

  if (item.href) {
    return (
      <motion.a
        href={item.href}
        whileHover={{ x: 3 }}
        transition={{ type: "spring", stiffness: 400, damping: 24 }}
        className={className}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
      className={className}
    >
      {content}
    </motion.div>
  );
}

export function Contact() {
  const { lang } = useLanguage();
  const p = profile[lang];
  const t = ui[lang];

  const contactItems: ContactItem[] = [
    { icon: Mail, label: t.labels.email, value: p.email, href: `mailto:${p.email}` },
    { icon: Phone, label: t.labels.phone, value: p.phone, href: `tel:${p.phone}` },
    { icon: MapPin, label: t.labels.location, value: p.location },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-muted/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading slug="CONTACT" title={t.title} />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <FadeIn delay={0.1} className="h-full">
            <div className="flex h-full flex-col justify-between gap-8">
              <div className="space-y-5">
                <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                  {t.intro}
                </p>

                <a
                  href={`mailto:${p.email}`}
                  className="group inline-flex items-center gap-2 text-2xl font-semibold text-foreground transition-colors hover:text-primary sm:text-3xl"
                >
                  {p.email}
                  <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <p className="text-sm text-muted-foreground">
                {p.status} · {p.location} · {p.experience}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="h-full">
            <div className="flex h-full flex-col justify-center rounded-md border border-border bg-card p-2 transition-all hover:border-primary/30 hover:shadow-md">
              {contactItems.map((item, index) => (
                <ContactRow
                  key={item.label}
                  item={item}
                  isLast={index === contactItems.length - 1}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { tabs, socialLinks } from "@/constants/footer";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between sm:items-start mb-8 lg:mb-12">
          <div className="mb-8 lg:mb-0">
            <Link href="/" className="text-2xl lg:text-3xl font-bold lowercase">
              audiophile
            </Link>
          </div>

          <nav className="mb-8 lg:mb-0">
            <ul className="flex flex-col sm:flex-row items-center gap-4 lg:gap-8">
              {tabs.map((tab) => (
                <li key={tab.idx}>
                  <Link
                    href={tab.link}
                    className="text-sm font-semibold tracking-wider uppercase hover:text-secondary transition-colors duration-300"
                  >
                    {tab.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-8 lg:mb-12">
          <div className="mb-8 lg:mb-0 lg:max-w-lg">
            <p className="text-gray-secondary text-sm lg:text-base leading-relaxed">
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a week.
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.idx}
                href={link.link}
                className="text-white hover:text-secondary transition-colors duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-8">
          <p className="text-gray-secondary text-sm">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

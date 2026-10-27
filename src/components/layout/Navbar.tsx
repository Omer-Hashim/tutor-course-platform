import { Menu } from "lucide-react"
import { Link, NavLink } from "react-router"
import { useTranslation } from "react-i18next"

import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import type { Language } from "@/config/app"
import { setLanguage } from "@/i18n"
import { cn } from "@/lib/utils"

const SITE_NAME = "Omer Tec"

const navLinks = [
    { labelKey: "nav.courses", to: "/courses" },
    { labelKey: "nav.about", to: "/about" },
    { labelKey: "nav.contact", to: "/contact" },
]

// Fixed order and labels: never translated, so a visitor can always find the way back.
const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "ar", label: "ع" },
]

export function Navbar() {
    const { t, i18n } = useTranslation()
    return (
        <header className="sticky top-0 z-40 border-b bg-card">
            <Container>
                <div className="flex h-14 items-center gap-4 lg:h-16">
                    <Link to="/" className="flex min-w-0 items-center gap-2">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary-tint font-semibold text-primary-tint-foreground">
                            {SITE_NAME.charAt(0)}
                        </span>
                        <span className="truncate text-lg font-semibold">{SITE_NAME}</span>
                    </Link>

                    <nav aria-label={t("nav.main")} className="hidden lg:ms-4 lg:block">
                        <ul className="flex items-center gap-6">
                            {navLinks.map((link) => (
                            <li key={link.labelKey}>
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        cn(
                                        "text-base transition-colors",
                                        isActive
                                            ? "text-foreground underline decoration-primary decoration-2 underline-offset-8"
                                            : "text-muted-foreground hover:text-foreground"
                                        )
                                    }
                                >
                                    {t(link.labelKey)}
                                </NavLink>
                            </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="ms-auto flex shrink-0 items-center gap-2 lg:gap-3">
                        <div
                            role="group"
                            aria-label={t("nav.language")}
                            dir="ltr"
                            className="flex h-10 overflow-hidden rounded-md border"
                        >
                            {languages.map((language) => (
                                <button
                                    key={language.code}
                                    type="button"
                                    lang={language.code}
                                    aria-pressed={language.code === i18n.language}
                                    onClick={() => setLanguage(language.code)}
                                    className={cn(
                                        "px-3 text-sm transition-colors",
                                        language.code === i18n.language
                                        ? "bg-primary-tint font-semibold text-primary-tint-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                    )}
                                    >
                                    {language.label}
                                </button>
                        ))}
                        </div>

                        <div className="hidden items-center gap-2 lg:flex">
                            <Button variant="outline">{t("nav.login")}</Button>
                            <Button>{t("nav.signup")}</Button>
                        </div>

                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            aria-label={t("nav.menu")}
                            className="size-10 lg:hidden"
                        >
                            <Menu className="size-5" />
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}
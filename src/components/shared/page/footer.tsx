import Link from "next/link"

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon
} from "lucide-react"

import { NewsLetterForm } from "../newsletter-form"

export function Footer() {
  return (
    <footer data-aos="fade-down" className="px-6 sm:px-0">
      <div className="w-full space-y-16 py-16">
        <div className="flex flex-col space-y-12 md:flex-row md:justify-between md:items-center">
          <div>
            <span className="font-medium text-foreground">
              Empresa
            </span>
            <ul className="mt-4 list-inside space-y-4">
              <li>
                <Link
                  href="/contato"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-medium text-foreground">
              Social
            </span>
            <ul className="mt-4 list-inside space-y-4">
              <li>
                <Link
                  href="https://github.com/coderaw-io"
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <GithubIcon className="size-4" />
                  Github
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.linkedin.com/company/coderaw"
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <LinkedinIcon className="size-4" />
                  Linkedin
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.instagram.com/coderaw.io/profilecard"
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <InstagramIcon className="size-4" />
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          <NewsLetterForm />
        </div>

        <div className="flex flex-col space-y-3 py-3 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
          <span className="text-[11px] text-muted-foreground sm:text-sm">
            © Coderaw Soluções Tecnológicas LTDA - 2024.
          </span>

          <span className="text-xs text-muted-foreground sm:text-sm">
            Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  )
}

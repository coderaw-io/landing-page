import Link from "next/link"

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon
} from "lucide-react"

import { NewsLetterForm } from "../newsletter-form"

export function Footer() {
  return (
    <footer data-aos="fade-down" className="px-6 sm:px-0">
      <div className="w-full space-y-16 py-16">
        <div className="flex flex-col space-y-12 md:flex-row md:justify-between md:items-center md:space-y-0">
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
                  href="https://www.instagram.com/coderaw.io/#"
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <InstagramIcon className="size-4" />
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-medium text-foreground">
              Atendimento
            </span>
            <ul className="mt-4 list-inside space-y-4">
              <li>
                <Link
                  href="mailto:contato@coderaw.io"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <MailIcon className="size-4" />
                  Informações: contato@coderaw.io
                </Link>
              </li>

              <li>
                <Link
                  href="mailto:comercial@coderaw.io"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <MailIcon className="size-4" />
                  Comercial: comercial@coderaw.io
                </Link>
              </li>
            </ul>
          </div>

          <NewsLetterForm />
        </div>

        <div className="flex flex-col space-y-3 py-3 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
          <span className="text-[11px] text-muted-foreground sm:text-[13px]">
            2024 © Copyright - Coderaw Soluções Tecnológicas LTDA.
          </span>

          <span className="text-xs text-muted-foreground font-medium sm:text-[13px]">
            Todos os direitos reservados. {" "}
            <Link
              href="/politica-de-privacidade"
              className="hover:text-primary"
            >
              Política de Privacidade
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

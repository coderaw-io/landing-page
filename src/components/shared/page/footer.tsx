import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon
} from "lucide-react"

import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { Label } from "../../ui/label"
import { Icon } from "../icons/icon"

export function Footer() {
  return (
    <footer data-aos="fade-down" className="px-6 sm:px-0">
      <div className="w-full space-y-16 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-4 sm:gap-6">
          <div>
            <span className="font-medium text-foreground">
              Empresa
            </span>
            <ul className="mt-4 list-inside space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Sobre nós
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Serviços
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-sm font-medium text-foreground">
              Produtos
            </span>
            <ul className="mt-4 list-inside space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Condotec
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Spendmanagement
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-medium text-foreground">
              Social
            </span>
            <ul className="mt-4 list-inside space-y-4">
              <li>
                <a
                  href="https://github.com/coderaw-io"
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <GithubIcon className="size-4" />
                  Github
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <LinkedinIcon className="size-4" />
                  Linkedin
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <FacebookIcon className="size-4" />
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <InstagramIcon className="size-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <form className="w-full">
              <a
                href="/"
                className="hidden sm:block"
                aria-label="Coderaw logo"
              >
                <Icon className="w-1/5 mb-2" />
              </a>

              <div className="flex flex-col space-y-3">
                <Label
                  className="font-medium text-foreground text-sm"
                  htmlFor="current-email"
                >
                  Conteúdos de tecnologia
                </Label>

                <Input
                  type="email"
                  id="current-email"
                  name="current-email"
                  placeholder="Informe o seu e-mail"
                  className="placeholder:text-xs"
                  required
                />

                <Button type="button">
                  Inscreva-se
                </Button>
              </div>
            </form>
          </div>
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

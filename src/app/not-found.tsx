import Link from "next/link"

import { Button } from "@/components/ui/button"

function NotFoundPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center space-y-12 px-6 sm:px-0">
        <h1 className="text-3xl md:text-6xl xl:text-7xl font-bold">
          404
        </h1>

        <p className="text-lg text-muted-foreground sm:text-lg">
          Conteúdo não encontrado.
        </p>

        <Link href="/">
          <Button type="button">
            Página inicial
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
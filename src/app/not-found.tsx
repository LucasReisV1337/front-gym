
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "404 - Não encontrada",
    description:
        "Página não encontrada.",
    generator: "Next.js",
    robots: "index, follow"
}

export default function NotFound() {
    return (
        <div className="md:max-w-7xl md:mx-auto">

            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
                <h1 className="text-2xl-semi text-gry-900">Página não encontrada.</h1>
                <p className="text-small-regular text-gray-700">
                    A página que você está buscando, não existe.
                </p>
                <Link href="/" className="mt-4 underline text-base-regular text-gray-900">
                    Voltar ao começo
                </Link>
            </div>

        </div>
    )
}

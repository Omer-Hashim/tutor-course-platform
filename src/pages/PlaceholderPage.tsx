import { Container } from "@/components/layout/Container"

type PlaceholderPageProps = {
    title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
    return (
        <Container>
        <h1 className="py-8 text-2xl font-semibold">{title}</h1>
        </Container>
    )
}
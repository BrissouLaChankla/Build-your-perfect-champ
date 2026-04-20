import Header from "@/components/Header";

export default function Page() {
    return (
        <main className="min-h-screen p-4 flex flex-col items-center max-w-7xl m-auto">
            <Header />
            <div className="grid grid-cols-12 my-8 grow w-full" />
        </main>
    );
}

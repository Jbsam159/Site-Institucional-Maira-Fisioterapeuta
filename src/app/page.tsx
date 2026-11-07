
export default function Home() {
  return (
    <main className="min-h-screen bg-brand-background p-10">
      <h1 className="mb-8 text-4xl font-bold text-brand-rose">
        Identidade Visual da Maíra
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-brand-light p-8">
          <p className="font-semibold text-brand-rose">
            Rosa-claro
          </p>
        </div>

        <div className="rounded-xl bg-brand-pink p-8">
          <p className="font-semibold text-brand-rose">
            Rosa pastel
          </p>
        </div>

        <div className="rounded-xl bg-brand-nude p-8">
          <p className="font-semibold text-brand-rose">
            Bege nude
          </p>
        </div>

        <div className="rounded-xl bg-brand-rose p-8">
          <p className="font-semibold text-brand-background">
            Rosa escuro
          </p>
        </div>
      </div>
    </main>
  );
}

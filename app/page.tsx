import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="border p-4 rounded-xl">
          <h3 className="font-bold">OPD History Sheet</h3>
          <p>Structured clinical history in proper format.</p>
        </div>

        <div className="border p-4 rounded-xl">
          <h3 className="font-bold">Full Case Presentation</h3>
          <p>Exam-ready medicine long case output.</p>
        </div>

        <div className="border p-4 rounded-xl">
          <h3 className="font-bold">PDF Export</h3>
          <p>Download instantly for rounds and exams.</p>
        </div>
      </section>
    </main>
  );
}

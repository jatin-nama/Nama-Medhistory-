import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-20">
      <h2 className="text-4xl font-bold mb-4">
        AI Powered Medicine OPD Case Generator
      </h2>

      <p className="text-gray-600 max-w-xl mx-auto mb-6">
        Generate OPD History Sheets + Full Case Presentations in seconds.
        Perfect for medical students and doctors.
      </p>

      <Link
        href="/new-case"
        className="bg-black text-white px-6 py-3 rounded-xl shadow"
      >
        Start New Case →
      </Link>
    </section>
  );
}

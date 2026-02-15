"use client";
import { useState } from "react";

export default function NewCase() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    complaint: "",
    duration: "",
    history: "",
  });

  const [output, setOutput] = useState("");

  async function generateCase() {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setOutput(data.output);
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        New Medicine OPD Case
      </h1>

      <input
        placeholder="Patient Name"
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Age"
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />

      <input
        placeholder="Chief Complaint"
        className="border p-2 w-full mb-2"
        onChange={(e) =>
          setForm({ ...form, complaint: e.target.value })
        }
      />

      <input
        placeholder="Duration"
        className="border p-2 w-full mb-2"
        onChange={(e) =>
          setForm({ ...form, duration: e.target.value })
        }
      />

      <textarea
        placeholder="History of Present Illness"
        className="border p-2 w-full mb-2"
        onChange={(e) =>
          setForm({ ...form, history: e.target.value })
        }
      />

      <button
        onClick={generateCase}
        className="bg-black text-white px-4 py-2 rounded-xl"
      >
        Generate AI Case →
      </button>

      {output && (
        <pre className="mt-6 whitespace-pre-wrap border p-4 rounded-xl bg-gray-50">
          {output}
        </pre>
      )}
    </main>
  );
}

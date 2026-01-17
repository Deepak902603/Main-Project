import { useState } from "react";
import Modal from "../components/Modal";
import Dropdown from "../components/Dropdown";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 w-[360px] text-center space-y-6">
        <h1 className="text-2xl font-bold text-white">
          Day 9 Mini Project
        </h1>

        <Dropdown />

        <button
          onClick={() => setOpen(true)}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Open Modal
        </button>

        <Modal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

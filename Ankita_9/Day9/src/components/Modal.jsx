import { Dialog } from "@headlessui/react";

export default function Modal({ open, setOpen }) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-xl p-6 w-full max-w-sm text-center space-y-4">
          <Dialog.Title className="text-lg font-bold">
            Headless UI Modal
          </Dialog.Title>

          <p className="text-gray-600 text-sm">
            Accessible modal built using Headless UI and Tailwind CSS.
          </p>

          <button
            onClick={() => setOpen(false)}
            className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

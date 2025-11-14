'use client';

import { useEffect } from "react";

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") onClose?.();
    }
    if (open) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4 backdrop-blur-sm">
      <div className="max-w-lg grow rounded-3xl border border-[#e0e0e2] bg-white p-6 shadow-xl">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d6d6d9] text-sm font-semibold text-[#6b6b6b] transition hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
          >
            ×
          </button>
        </div>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}


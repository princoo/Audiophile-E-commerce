"use client";

import { Toaster } from "react-hot-toast";
export function ToastProvider() {
  return (
    <Toaster
      position="top-left"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#22c55e",
          color: "#ffffff",
          padding: "16px",
          border: "none",
        },
        iconTheme: {
          primary: "#ffffff",
          secondary: "#16a34a",
        },
      }}
    />
  );
}

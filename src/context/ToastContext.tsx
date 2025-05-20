"use client";
import React, { createContext, useContext, ReactNode } from "react";
import toast, { Toaster, ToastOptions } from "react-hot-toast";

type ToastContextType = {
  success: (message: string, options?: ToastOptions) => void;
  error: (message: string, options?: ToastOptions) => void;
  info: (message: string, options?: ToastOptions) => void;
  loading: (message: string, options?: ToastOptions) => string;
  dismiss: (toastId?: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const success = (message: string, options?: ToastOptions) => {
    toast.success(message, { position: "top-right", ...options });
  };

  const error = (message: string, options?: ToastOptions) => {
    toast.error(message, { position: "top-right", ...options });
  };

  const info = (message: string, options?: ToastOptions) => {
    toast(message, { position: "top-right", ...options });
  };

  const loading = (message: string, options?: ToastOptions): string => {
    return toast.loading(message, { position: "top-right", ...options });
  };

  const dismiss = (toastId?: string) => {
    toast.dismiss(toastId);
  };

  return (
    <ToastContext.Provider value={{ success, error, info, loading, dismiss }}>
      <Toaster />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

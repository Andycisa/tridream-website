"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { getSchedulerEmbedUrl } from "../lib/booking";

type BookingContextValue = {
  openBooking: (url: string) => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

function useBookingContext() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return context;
}

export function useBooking() {
  return useBookingContext();
}

function BookingModal({
  url,
  onClose,
}: {
  url: string;
  onClose: () => void;
}) {
  const embedUrl = getSchedulerEmbedUrl(url);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label="Close booking scheduler"
      />
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center md:items-stretch md:justify-end">
        <div className="pointer-events-auto relative flex h-[92dvh] w-full flex-col overflow-hidden rounded-t-2xl bg-white md:h-full md:max-w-xl md:rounded-none lg:max-w-2xl">
          <div className="flex items-center justify-between border-b border-border px-4 py-3 md:px-6">
            <p className="text-sm font-medium text-foreground">Book a call</p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Close
            </button>
          </div>
          <iframe
            src={embedUrl}
            title="Pipedrive scheduling"
            className="min-h-0 flex-1 w-full border-0"
            allow="clipboard-write"
          />
          <div className="border-t border-border px-4 py-3 text-center md:px-6">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted transition-colors hover:text-foreground"
            >
              Open scheduler in a new tab
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [bookingUrl, setBookingUrl] = useState<string | null>(null);

  const openBooking = useCallback((url: string) => {
    setBookingUrl(url);
  }, []);

  const closeBooking = useCallback(() => {
    setBookingUrl(null);
  }, []);

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      {children}
      {bookingUrl ? (
        <BookingModal url={bookingUrl} onClose={closeBooking} />
      ) : null}
    </BookingContext.Provider>
  );
}

const bookingButtonClassName =
  "inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover";

export function BookingButton({
  children,
  url,
  className = "",
}: {
  children: React.ReactNode;
  url: string;
  className?: string;
}) {
  const { openBooking } = useBookingContext();

  return (
    <button
      type="button"
      onClick={() => openBooking(url)}
      className={`${bookingButtonClassName} ${className}`}
    >
      {children}
    </button>
  );
}

export function BookingLink({
  children,
  url,
  className = "",
}: {
  children: React.ReactNode;
  url: string;
  className?: string;
}) {
  const { openBooking } = useBookingContext();

  return (
    <button
      type="button"
      onClick={() => openBooking(url)}
      className={className}
    >
      {children}
    </button>
  );
}

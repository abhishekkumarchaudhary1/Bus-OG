import { Suspense } from "react";

export const metadata = {
  title: "Booking | Bus OG",
  description:
    "Submit your vehicle booking with Bus OG. Choose cars, buses, or canters and we will confirm a vetted driver.",
};

export default function BookingLayout({ children }) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}


import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Booking | Bus OG",
  description:
    "Submit your vehicle booking with Bus OG. Choose cars, buses, or canters and we will confirm a vetted driver.",
};

export default async function BookingPage({ searchParams }) {
  const params = await searchParams;
  const vehicle =
    params && typeof params === "object" ? params.vehicle : undefined;

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-[#1a1a1a]">Booking</h1>
        <p className="max-w-3xl text-base leading-relaxed text-[#6b6b6b]">
          Fill in the trip details and our coordinators will confirm your vehicle
          assignment within the hour. We will reach out if any additional
          information is required for dispatch.
        </p>
      </header>

      <BookingForm
        defaultVehicle={typeof vehicle === "string" ? vehicle : ""}
      />
    </div>
  );
}


import DriverDirectory from "@/components/DriverDirectory";
import { drivers } from "@/data/drivers";

export const metadata = {
  title: "Driver Contacts | Bus OG",
  description:
    "Meet the Bus OG driver network across cars, buses, and canters. Request a driver and our dispatch team will confirm availability.",
};

export default function DriversPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-[#1a1a1a]">
          Driver contacts
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-[#6b6b6b]">
          Every driver on this roster has completed route orientation, document
          verification, and safety drills. Use the request button to notify our
          dispatch desk about your preference.
        </p>
      </header>
      <DriverDirectory drivers={drivers} />
    </div>
  );
}


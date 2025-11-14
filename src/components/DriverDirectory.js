'use client';

import { useMemo, useState } from "react";

import Modal from "./Modal";

export default function DriverDirectory({ drivers }) {
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [toast, setToast] = useState(null);

  const sortedDrivers = useMemo(() => {
    return [...drivers].sort((a, b) => a.name.localeCompare(b.name));
  }, [drivers]);

  function handleRequest(driver) {
    setSelectedDriver(driver);
  }

  function closeModal() {
    setSelectedDriver(null);
  }

  function confirmRequest(driver) {
    setToast({
      message: `Request logged for ${driver.name}. Dispatch will reach out shortly.`,
    });
    setSelectedDriver(null);
    setTimeout(() => setToast(null), 3500);
  }

  return (
    <div className="space-y-6">
      {toast ? (
        <div className="rounded-2xl border border-[#CDE7D8] bg-[#F3FBF6] px-4 py-3 text-sm text-[#22563F]">
          {toast.message}
        </div>
      ) : null}
      <div className="overflow-hidden rounded-3xl border border-[#e0e0e2] bg-white shadow-sm">
        <table className="min-w-full divide-y divide-[#ececee]">
          <thead className="bg-[#f7f7f8]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#1a1a1a]">
                Driver
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#1a1a1a]">
                Vehicle
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#1a1a1a]">
                Availability
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[#1a1a1a]">
                Phone
              </th>
              <th className="px-6 py-4" />
            </tr>
          </thead>
          <tbody className="divide-y divide-[#ececee]">
            {sortedDrivers.map((driver) => (
              <tr key={driver.phone} className="hover:bg-[#f9f9fa]">
                <td className="px-6 py-4 text-sm font-medium text-[#1a1a1a]">
                  {driver.name}
                </td>
                <td className="px-6 py-4 text-sm text-[#6b6b6b]">
                  {driver.vehicleType}
                </td>
                <td className="px-6 py-4 text-sm text-[#6b6b6b]">
                  {driver.availability}
                </td>
                <td className="px-6 py-4 text-sm text-[#1a1a1a]">
                  {driver.phone}
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    type="button"
                    onClick={() => handleRequest(driver)}
                    className="inline-flex items-center justify-center rounded-full border border-[#1a1a1a] px-4 py-2 text-xs font-semibold text-[#1a1a1a] transition hover:bg-[#efefef]"
                  >
                    Request this driver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal open={!!selectedDriver} onClose={closeModal}>
        {selectedDriver ? (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">
              Request {selectedDriver.name}
            </h3>
            <p className="text-sm leading-relaxed text-[#6b6b6b]">
              We will notify dispatch to check availability and call you back.
              Confirm to log this driver request for{" "}
              <span className="font-medium text-[#1a1a1a]">
                {selectedDriver.vehicleType}
              </span>{" "}
              slots.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => confirmRequest(selectedDriver)}
                className="inline-flex items-center justify-center rounded-full bg-[#1a1a1a] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#353535]"
              >
                Confirm request
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="inline-flex items-center justify-center rounded-full border border-[#1a1a1a] px-5 py-2 text-sm font-semibold text-[#1a1a1a] transition hover:bg-[#efefef]"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}


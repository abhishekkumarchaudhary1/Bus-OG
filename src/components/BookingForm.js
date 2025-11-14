'use client';

import { useMemo, useState } from "react";

const vehicleOptions = [
  { value: "car", label: "Car" },
  { value: "bus", label: "Bus" },
  { value: "canter", label: "Canter" },
];

export default function BookingForm({ defaultVehicle }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleType: defaultVehicle || "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    duration: "",
    notes: "",
    preferredDriver: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle" });

  const vehicleLabel = useMemo(() => {
    const option = vehicleOptions.find((option) => option.value === form.vehicleType);
    return option ? option.label : "";
  }, [form.vehicleType]);

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate() {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!/^[+\\d\\s-]{7,}$/.test(form.phone.trim()))
      nextErrors.phone = "Please provide a valid phone number.";
    if (!/^[\\w-.]+@[\\w-]+\\.[\\w-.]+$/.test(form.email.trim()))
      nextErrors.email = "Please enter a valid email address.";
    if (!form.vehicleType) nextErrors.vehicleType = "Select a vehicle type.";
    if (!form.pickup.trim())
      nextErrors.pickup = "Let us know the pickup location.";
    if (!form.drop.trim())
      nextErrors.drop = "Let us know the drop-off location.";
    if (!form.date) nextErrors.date = "Choose a booking date.";
    if (!form.time) nextErrors.time = "Select a start time.";
    if (!form.duration.trim())
      nextErrors.duration = "Provide an estimated duration.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ state: "idle" });
    if (!validate()) return;

    try {
      setStatus({ state: "submitting" });
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload?.message || "Unable to submit your booking.");
      }

      setStatus({
        state: "success",
        message: `Booking received${vehicleLabel ? ` for a ${vehicleLabel}` : ""}. We will call you shortly.`,
      });
      setForm({
        name: "",
        phone: "",
        email: "",
        vehicleType: defaultVehicle || "",
        pickup: "",
        drop: "",
        date: "",
        time: "",
        duration: "",
        notes: "",
        preferredDriver: "",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message: error.message,
      });
    }
  }

  const inputClasses =
    "rounded-xl border border-[#dcdce0] bg-white px-4 py-3 text-base text-[#1a1a1a] shadow-sm outline-none transition focus:border-[#8aa6ff] focus:ring-2 focus:ring-[#cfd8ff]";

  return (
    <div className="space-y-6">
      {status.state === "success" && (
        <div className="rounded-2xl border border-[#CDE7D8] bg-[#F3FBF6] px-4 py-3 text-sm text-[#22563F]">
          {status.message}
        </div>
      )}
      {status.state === "error" && (
        <div className="rounded-2xl border border-[#F5C6CB] bg-[#FDECEF] px-4 py-3 text-sm text-[#7D1C24]">
          {status.message}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="grid gap-5 rounded-3xl border border-[#e0e0e2] bg-white p-6 shadow-sm"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Name"
            error={errors.name}
            input={
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Alex Fernandez"
                className={inputClasses}
              />
            }
          />
          <Field
            label="Phone"
            error={errors.phone}
            input={
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="+254 700 000 000"
                className={inputClasses}
              />
            }
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Email"
            error={errors.email}
            input={
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="operations@yourcompany.com"
                className={inputClasses}
              />
            }
          />
          <Field
            label="Vehicle type"
            error={errors.vehicleType}
            input={
              <select
                name="vehicleType"
                value={form.vehicleType}
                onChange={(event) =>
                  updateField("vehicleType", event.target.value)
                }
                className={inputClasses}
              >
                <option value="">Select vehicle</option>
                {vehicleOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            }
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Pickup location"
            error={errors.pickup}
            input={
              <input
                type="text"
                name="pickup"
                value={form.pickup}
                onChange={(event) => updateField("pickup", event.target.value)}
                placeholder="Industrial Area Gate 4"
                className={inputClasses}
              />
            }
          />
          <Field
            label="Drop-off location"
            error={errors.drop}
            input={
              <input
                type="text"
                name="drop"
                value={form.drop}
                onChange={(event) => updateField("drop", event.target.value)}
                placeholder="Jomo Kenyatta Intl. Airport"
                className={inputClasses}
              />
            }
          />
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          <Field
            label="Date"
            error={errors.date}
            input={
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={(event) => updateField("date", event.target.value)}
                className={inputClasses}
              />
            }
          />
          <Field
            label="Time"
            error={errors.time}
            input={
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={(event) => updateField("time", event.target.value)}
                className={inputClasses}
              />
            }
          />
          <Field
            label="Duration"
            error={errors.duration}
            input={
              <input
                type="text"
                name="duration"
                value={form.duration}
                onChange={(event) =>
                  updateField("duration", event.target.value)
                }
                placeholder="4 hours"
                className={inputClasses}
              />
            }
          />
          <Field
            label="Preferred driver"
            input={
              <input
                type="text"
                name="preferredDriver"
                value={form.preferredDriver}
                onChange={(event) =>
                  updateField("preferredDriver", event.target.value)
                }
                placeholder="Faith Mugo"
                className={inputClasses}
              />
            }
          />
        </div>
        <Field
          label="Notes"
          input={
            <textarea
              name="notes"
              rows={4}
              value={form.notes}
              onChange={(event) => updateField("notes", event.target.value)}
              placeholder="Add extra stops, cargo details, or security notes."
              className={`${inputClasses} resize-none`}
            />
          }
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[#1a1a1a] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#353535]"
          disabled={status.state === "submitting"}
        >
          {status.state === "submitting" ? "Submitting..." : "Submit booking"}
        </button>
      </form>
    </div>
  );
}

function Field({ label, input, error }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-[#1a1a1a]">
      <span>{label}</span>
      {input}
      {error ? (
        <span className="text-xs font-normal text-[#b42318]">{error}</span>
      ) : null}
    </label>
  );
}


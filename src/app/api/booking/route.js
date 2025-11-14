export async function POST(request) {
  try {
    const payload = await request.json();

    const requiredFields = [
      "name",
      "phone",
      "email",
      "vehicleType",
      "pickup",
      "drop",
      "date",
      "time",
      "duration",
    ];

    const missing = requiredFields.filter(
      (field) => !payload[field] || String(payload[field]).trim() === ""
    );

    if (missing.length > 0) {
      return Response.json(
        {
          message: `Missing required fields: ${missing.join(", ")}`,
        },
        { status: 400 }
      );
    }

    const bookingReference = `BOG-${Date.now().toString().slice(-6)}`;

    return Response.json(
      {
        message: "Booking submitted successfully.",
        reference: bookingReference,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Unable to process booking request." },
      { status: 500 }
    );
  }
}


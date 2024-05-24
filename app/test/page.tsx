import { GoogleCalendar } from "@/lib/service/calendar/google";

export default function Test() {
  const googleCalService = new GoogleCalendar();

  return (
    <section className="h-screen flex justify-center items-center">
      <a className="btn btn-primary" href={googleCalService.authUrl}>
        Connect to Google
      </a>
    </section>
  );
}

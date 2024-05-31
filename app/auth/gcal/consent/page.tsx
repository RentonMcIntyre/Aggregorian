import { useSearchParams } from 'next/navigation';
import { setGcalCode } from "@/lib/stores/auth-slice";
import { useDispatch } from 'react-redux';
import { redirect } from "next/navigation"
import { GoogleCalendar } from "@/lib/service/calendar/google"; 

export default function Consent() {
  const searchParams = useSearchParams();
  const intent = searchParams.get('init');
  const code = searchParams.get('code');
  const dispatch = useDispatch();
  const googleCalendarService = new GoogleCalendar();

  if (init) {
    console.debug(googleCalendarService.authUrl);
  }

  if (code) {
    dispatch(setGcalCode(code));
  }

  const message = code ? "Successfully authorized with Google!"
    : "Authorization failed. :(";

  return (
    <section className="h-screen flex justify-center items-center">
      {message}
    </section>
  );
}

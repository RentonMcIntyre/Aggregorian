import { useDispatch } from 'react-redux';
import { GoogleCalendar } from "@/lib/service/calendar/google"; 
import { Refreshccw } from "lucide-react"; 

export default function Consent() {
  const intent = searchParams.get('intent');
  const code = searchParams.get('code');
  const dispatch = useDispatch();
  const googleCalendarService = new GoogleCalendar();
  
  window.location.href = googleCalendarService.authUrl;

  return (
  <section className="h-screen flex justify-center items-center">
          <h1>
            Redirecting..." 
            <RefreshCcw className="animate-spin" size={20} />
          </h1>
    </section>
  )
}

"use client"

import { useSearchParams } from 'next/navigation';
import { setGcalCode } from "@/lib/stores/auth-slice";
import { useDispatch } from 'react-redux';

export default function Consent() {
  const searchParams = useSearchParams();
  const intent = searchParams.get('intent');
  const code = searchParams.get('code');
  const dispatch = useDispatch();

  if (code) {
    dispatch(setGcalCode(code));
  }

  return (
  <section className="h-screen flex justify-center text-center p-8">
      { 
        code ? <h1 class="text-secondary text-2xl font-semibold">Successfully Authenticated with Google!</h1>
          : <h1 class="text-primary text-2xl font-semibold">Authentication failed :)</h1>
      }
    </section>
  )
}

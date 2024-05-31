'use client'

import { useSearchParams } from 'next/navigation';
import { setGcalCode } from "@/lib/stores/auth-slice";
import { useDispatch } from 'react-redux';

export default function Consent() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const dispatch = useDispatch();

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

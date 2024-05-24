'use client'

import { useSearchParams } from 'next/navigation';
import authSlice, { setGcalCode } from "@/lib/stores/auth-slice";
import { Provider, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

export default function Consent() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  console.debug(code);

  if (code) {
    setGcalCode(code);
  }

  console.debug(useSelector((state: any) => state.auth))

  const message = code ? "Successfully authorized with Google!"
    : "Authorization failed. :(";

  return (
    <section className="h-screen flex justify-center items-center">
      {message}
    </section>
  );
}

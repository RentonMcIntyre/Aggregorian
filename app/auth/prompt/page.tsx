"use client"

import { setGcalCode } from "@/lib/stores/auth-slice";
import { RootState } from "@/lib/stores/store";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function Prompt() {
  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const disconnectGoogleAuth = () => {
    dispatch(setGcalCode(null));
  }

  return (
    <section id="auth-panel" className="h-screen flex justify-center items-center">
      {authState.gcal_code ?
        <button className="btn btn-primary" onMouseDown={disconnectGoogleAuth}>
          Disconnect Google
        </button>
        : <Link className="btn btn-primary" href="/auth/gcal/request" aria-label="Disconnect Google">
          Connect to Google
        </Link>
      }
    </section>

  )
}

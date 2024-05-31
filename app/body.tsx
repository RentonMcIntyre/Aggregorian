"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Menu, { MenuOption } from "@/components/ui/menu";
import { Provider } from "react-redux";
import { store } from "@/lib/stores/store";
import { LinkIcon } from 'lucide-react';
import Link from "next/link";

export default function Body(props: { children: any; className: string }) {
  const options: MenuOption[] = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "coffee", label: "Coffee" },
    { value: "retro", label: "Retro" },
  ];

  let [theme, setTheme] = useState(options[3]);

  return (
    <Provider store={store}>
      <body className={cn(props.className, "flex-1")} data-theme={theme.value}>
        <nav className="flex justify-between bg-primary px-3 py-1 items-center">
          <Link className="font-semibold text-xl hover:underline italic" href="/">
            Aggregorian
          </Link>

          <section id="actions" className="flex gap-2">
            <Menu
              anchor="end"
              options={options}
              variant="secondary"
              callback={(option) => setTheme(option)}
              label={"Theme: " + theme.label}
            />
            <Link className="btn btn-secondary btn-square"
              href="/auth/prompt">
              <LinkIcon size={20} />
            </Link>
          </section>
        </nav>

        <main>{props.children}</main>
      </body>
    </Provider>
  );
}

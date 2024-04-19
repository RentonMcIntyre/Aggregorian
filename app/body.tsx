"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Menu, { MenuOption } from "@/components/ui/menu";

export default function Body(props: { children: any; className: string }) {
  const options: MenuOption[] = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "coffee", label: "Coffee" },
    { value: "retro", label: "Retro" },
  ];

  let [theme, setTheme] = useState(options[3]);

  return (
    <body className={cn(props.className, "flex-1")} data-theme={theme.value}>
      <nav className="flex justify-end bg-primary px-5 py-1">
        <Menu
          anchor="end"
          options={options}
          variant="secondary"
          callback={(option) => setTheme(option)}
          label={"Theme: " + theme.label}
        />
      </nav>

      <main>{props.children}</main>
    </body>
  );
}

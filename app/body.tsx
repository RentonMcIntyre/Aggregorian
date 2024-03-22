"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Select, { SelectOption } from "@/components/ui/select";

export default function Body(props: { children: any; className: string }) {
  let [theme, setTheme] = useState("coffee");
  const options: SelectOption[] = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "coffee", label: "Coffee", group: "Fun" },
    { value: "retro", label: "Retro", group: "Fun" },
  ];

  return (
    <body className={cn(props.className, "flex-1")} data-theme={theme}>
      <nav className="flex justify-end bg-primary">
        <Select options={options} />
        <div className="dropdown mx-4">
          <div tabIndex={0} role="button" className="btn btn-primary">
            Theme <ChevronDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </nav>

      <main>{props.children}</main>
    </body>
  );
}

"use client";
import Select, { SelectOption } from "@/components/ui/select";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const options: SelectOption[] = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "coffee", label: "Coffee", group: "Fun" },
    { value: "retro", label: "Retro", group: "Fun" },
  ];

  return (
    <div className="flex items-center justify-center">
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


    </div>
  );
}

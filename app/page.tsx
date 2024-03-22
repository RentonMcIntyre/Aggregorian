"use client";
import Select, { SelectOption } from "@/components/ui/select";
import Image from "next/image";

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
    </div>
  );
}

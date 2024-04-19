"use client";

import { Menu } from "@headlessui/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export interface MenuOption {
  value: string;
  label: string;
}

export interface MenuComponentProps {
  options: MenuOption[];
  label?: string;
  anchor?: "start" | "end";
  position?: "top" | "bottom";
  variant?: "primary" | "secondary";
  value?: string;
  callback?: (option: MenuOption) => void;
}

const MenuComponent = (props: MenuComponentProps) => {
  const menuClasses = twMerge(
    "dropdown",
    props.anchor ? `dropdown-${props.anchor}` : "",
    props.position ? `dropdown-${props.position}` : ""
  );

  const buttonClasses = twMerge(
    "btn p-2 h-8 min-h-0",
    props.variant ? `btn-${props.variant}` : ""
  );

  const selectItem = (option: MenuOption) => {
    props.callback?.(option);
  };

  return (
    <div className={menuClasses}>
      <Menu>
        <Menu.Button className={buttonClasses}>
          {props.label || "Menu"}
        </Menu.Button>
        <Menu.Items className="dropdown-content border-primary border-2 z-[1] menu p-2 shadow bg-base-100 text-base-foreground rounded-box w-52">
          {props.options.map((option) => (
            <Menu.Item
              key={option.value}
              as="a"
              onClick={() => selectItem(option)}
              className="hover:bg-primary rounded-2xl hover:text-primary-foreground p-2"
            >
              {option.label}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};

MenuComponent.displayName = "Menu";
export default MenuComponent;

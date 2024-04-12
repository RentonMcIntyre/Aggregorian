import { Menu } from "@headlessui/react";
import { useState } from "react";

export interface MenuOption {
  value: string;
  label: string;
}

export interface MenuComponentProps {
  options: MenuOption[];
  label?: string;
  anchor?: "start" | "end";
  position?: "top" | "bottom";
  value?: string;
}

const MenuComponent = (props: MenuComponentProps) => {
  let classes = "dropdown";
  if (props.anchor) {
    classes += ` dropdown-${props.anchor}`;
  }
  if (props.position) {
    classes += ` dropdown-${props.position}`;
  }

  let [value, setValue] = useState<string | undefined>(props.value);

  return (
    <div className={classes}>
      <Menu>
        <Menu.Button className="btn btn-primary">
          {value || props.label || "Menu"}
        </Menu.Button>
        <Menu.Items className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-base-foreground rounded-box w-52">
          {props.options.map((option) => (
            <Menu.Item
              key={option.value}
              as="a"
              className="hover:bg-primary rounded-2xl hover:text-primary-foreground p-2"
            >
              <button onClick={() => setValue(option.value)}>
                {option.label}
              </button>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};

MenuComponent.displayName = "Menu";
export default MenuComponent;

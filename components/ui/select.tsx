"use client";
import * as Select from "@radix-ui/react-select";
import { SelectItem, SelectProps } from "@radix-ui/react-select";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./select.css";

import { useState } from "react";
import React from "react";

export interface SelectOption {
  value: string;
  label: string;
  group?: string; // Optional, used for categorizing options
}

export interface SelectComponentProps extends SelectProps {
  options: SelectOption[];
}

const SelectComponent = (props: SelectComponentProps) => {
  let [value, setValue] = useState(props.value);

  // Group options by their 'group' property
  const groupedOptions = props.options.reduce((acc, option) => {
    const group = option.group || "Ungrouped";
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(option);
    return acc;
  }, {} as Record<string, SelectOption[]>);

  return (
    <div className="dropdown">
      <Select.Root onValueChange={setValue}>
        <Select.Trigger className="btn btn-primary" aria-label="Food">
          <Select.Value placeholder="Select a fruit…">{value}</Select.Value>
          <Select.Icon className="SelectIcon">
            <ChevronDown />
          </Select.Icon>
        </Select.Trigger>
        <Select.Content className="menu p-2 shadow bg-base-300 rounded-box w-52">
          <Select.ScrollUpButton>
            <ChevronUp />
          </Select.ScrollUpButton>
          <Select.Viewport>
            {Object.entries(groupedOptions).map(([group, options]) => (
              <React.Fragment key={group}>
                <Select.Group>
                  <Select.Label>{group}</Select.Label>
                  {options.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="hover:bg-opacity-50"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </Select.Group>
                <Select.Separator />
              </React.Fragment>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton>
            <ChevronDown />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Root>
    </div>
  );
};

SelectComponent.displayName = "Select";

export default SelectComponent;

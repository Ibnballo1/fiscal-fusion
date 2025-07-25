// formSchemas.ts
import { Field } from "@/type/form";

export const formSchemas: Record<string, { type: string; fields: Field[] }> = {
  clients: {
    type: "Client",
    fields: [
      { name: "name", label: "Name", placeholder: "Client Name", type: "text" },
      { name: "email", label: "Email", placeholder: "Email", type: "email" },
      {
        name: "region",
        label: "Region",
        placeholder: "Select region",
        type: "select",
        options: [
          { label: "West", value: "west" },
          { label: "East", value: "east" },
        ],
      },
    ],
  },
  devices: {
    type: "Device",
    fields: [
      { name: "deviceName", label: "Device Name", type: "text" },
      {
        name: "deviceType",
        label: "Device Type",
        type: "select",
        options: [
          { label: "Router", value: "router" },
          { label: "Modem", value: "modem" },
        ],
      },
    ],
  },
  // Add more as needed
};

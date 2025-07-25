// types/form.ts
export type FieldType = "text" | "email" | "select"; // Expand as needed

export type Field = {
  name: string;
  label: string;
  placeholder?: string;
  type: FieldType;
  options?: { label: string; value: string }[];
};

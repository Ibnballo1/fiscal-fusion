"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { usePathname } from "next/navigation";

type Field = {
  name: string;
  label: string;
  placeholder?: string;
  type: "text" | "email" | "select";
  options?: { label: string; value: string }[];
};

interface AddItemFormProps {
  type: string; // e.g. "client", "device"
  fields: Field[];
  onSubmit: (data: Record<string, string>) => void;
}

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  region: z
    .string({
      required_error: "Please select a country",
    })
    .min(1, "Please select a country"),
});

const AddItemForm = ({ type, fields, onSubmit }: AddItemFormProps) => {
  const formSchema = z.object(
    fields.reduce((acc, field) => {
      acc[field.name] = z.string().min(1, `${field.label} is required`);
      return acc;
    }, {} as Record<string, z.ZodTypeAny>)
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {} as Record<string, string>),
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#235E2F]">Add New {type}</Button>
      </DialogTrigger>

      <DialogContent className="p-4">
        <DialogHeader className="border-b px-3 pb-3">
          <DialogTitle>Add New {type}</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 px-3"
          >
            {fields.map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name}
                render={({ field: controlField }) => (
                  <FormItem>
                    <FormLabel>{field.label}</FormLabel>
                    <FormControl>
                      {field.type === "select" ? (
                        <Select
                          onValueChange={controlField.onChange}
                          defaultValue={controlField.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder={field.placeholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {field.options?.map((opt) => (
                              <SelectItem key={opt.value} value={opt.value}>
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <Input
                          placeholder={field.placeholder}
                          {...controlField}
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <DialogFooter className="pt-2">
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>

              <Button type="submit" className="bg-[#235E2F]">
                Add New {type}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddItemForm;

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

// const FormSchema = z.object({
//   view_only_admin: z.boolean().default(false).optional(),
//   manager_admin: z.boolean().default(false).optional(),
//   super_admin: z.boolean(),
// });

export default function RolesAndPermissionsPage() {
  //   const form = useForm<z.infer<typeof FormSchema>>({
  //     resolver: zodResolver(FormSchema),
  //     defaultValues: {
  //       super_admin: true,
  //     },
  //   });

  //   function onSubmit(data: z.infer<typeof FormSchema>) {
  //     // toast("You submitted the following values", {
  //     //   description: (
  //     //     <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
  //     //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //     //     </pre>
  //     //   ),
  //     // });
  //   }

  return (
    <div className="p-4">
      <h3 className="mb-2 text-lg font-medium">Admin Roles & Permissions</h3>
      <div className="pb-2 mb-4 flex justify-between items-center border-b">
        <div className="space-y-0.5">
          <p className="text-foreground text-sm">View-Only Admins</p>
          <p className="text-muted-foreground text-sm">
            Dashboard & report access
          </p>
        </div>
        <div>
          <Switch
          //   checked={field.value}
          //   onCheckedChange={field.onChange}
          />
        </div>
      </div>
      <div className="pb-2 mb-4 flex justify-between items-center border-b">
        <div className="space-y-0.5">
          <p className="text-foreground text-sm">Manager Admin</p>
          <p className="text-muted-foreground text-sm">
            User management & configuration
          </p>
        </div>
        <div>
          <Switch
          //   checked={field.value}
          //   onCheckedChange={field.onChange}
          //   disabled
          //   aria-readonly
          />
        </div>
      </div>
      <div className="pb-2 mb-4 flex justify-between items-center border-b">
        <div className="space-y-0.5">
          <p className="text-foreground text-sm">Super Admin</p>
          <p className="text-muted-foreground text-sm">Full system access</p>
        </div>
        <div>
          <Switch
          //   checked={field.value}
          //   onCheckedChange={field.onChange}
          />
        </div>
      </div>
    </div>
  );
}

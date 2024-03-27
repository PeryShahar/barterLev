import { zodResolver } from "@hookform/resolvers/zod";
import { type ClassValue, clsx } from "clsx"
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const formSchema = z.object({
  receive: z.string().min(1, { message: "This field is required" }).max(200),
  give: z.string().min(1, { message: "This field is required" }).max(200),
  country: z.string().min(1, { message: "This field is required" }),
  city: z.string().min(1, { message: "This field is required" }),
  personal_info: z.string().min(1, { message: "This field is required" }),
  birth_year: z.string().min(1, { message: "This field is required" }),
}).strict();

export function useInitializeForm(user: any) {
  return useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      receive: user?.receive ?? "",
      give: user?.give ?? "",
      country: user?.country ?? "",
      city: user?.city ?? "",
      personal_info: user?.personal_info ?? "",
      birth_year: user?.birth_year ?? "",
    },
  });
}


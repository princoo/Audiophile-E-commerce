"use client";

import { useFormContext } from "react-hook-form";
import { FormField } from "@/components/ui/FormField";
import { FormInput } from "@/components/ui/FormInput";
import type { CheckoutFormData } from "@/types/checkout";

export function BillingDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormData>();

  return (
    <div className="space-y-6">
      <h2 className="text-sm font-bold text-secondary uppercase tracking-wider">
        billing details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Name" error={errors.name?.message}>
          <FormInput
            {...register("name")}
            placeholder="Alexei Ward"
            error={!!errors.name}
          />
        </FormField>

        <FormField label="Email Address" error={errors.email?.message}>
          <FormInput
            {...register("email")}
            type="email"
            placeholder="alexei@mail.com"
            error={!!errors.email}
          />
        </FormField>
      </div>

      <FormField label="Phone Number" error={errors.phone?.message}>
        <FormInput
          {...register("phone")}
          placeholder="+1 202-555-0136"
          error={!!errors.phone}
          className="md:w-1/2"
        />
      </FormField>
    </div>
  );
}

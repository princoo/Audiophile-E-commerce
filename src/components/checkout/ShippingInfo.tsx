"use client";

import { useFormContext } from "react-hook-form";
import { FormField } from "@/components/ui/FormField";
import { FormInput } from "@/components/ui/FormInput";
import type { CheckoutFormData } from "@/types/checkout";

export function ShippingInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormData>();

  return (
    <div className="space-y-6">
      <h2 className="text-sm font-bold text-secondary uppercase tracking-wider">
        SHIPPING INFO
      </h2>

      <FormField label="Your Address" error={errors.address?.message}>
        <FormInput
          {...register("address")}
          placeholder="1137 Williams Avenue"
          error={!!errors.address}
        />
      </FormField>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="ZIP Code" error={errors.zipCode?.message}>
          <FormInput
            {...register("zipCode")}
            placeholder="10001"
            error={!!errors.zipCode}
          />
        </FormField>

        <FormField label="City" error={errors.city?.message}>
          <FormInput
            {...register("city")}
            placeholder="New York"
            error={!!errors.city}
          />
        </FormField>
      </div>

      <FormField label="Country" error={errors.country?.message}>
        <FormInput
          {...register("country")}
          placeholder="United States"
          error={!!errors.country}
          className="md:w-1/2"
        />
      </FormField>
    </div>
  );
}

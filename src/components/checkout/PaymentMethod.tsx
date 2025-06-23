"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { FormField } from "@/components/ui/FormField";
import { FormInput } from "@/components/ui/FormInput";
import type { CheckoutFormData } from "@/types/checkout";
import Image from "next/image";

export function PaymentMethod() {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<CheckoutFormData>();

  const paymentMethod = useWatch({
    control,
    name: "paymentMethod",
    defaultValue: "e-money",
  });

  return (
    <div className="space-y-6">
      <h2 className="text-sm font-bold text-secondary uppercase tracking-wider">
        PAYMENT DETAILS
      </h2>

      <div className="space-y-4 flex justify-between">
        <span className="text-sm font-bold text-black flex-1">
          Payment Method
        </span>

        <div className="space-y-3 flex-1">
          <label className="flex items-center gap-4 p-4 border border-gray-secondary rounded-lg cursor-pointer hover:border-secondary">
            <input
              {...register("paymentMethod")}
              type="radio"
              value="e-money"
              className="w-5 h-5 text-secondary"
            />
            <span className="text-sm font-bold">e-Money</span>
          </label>

          <label className="flex items-center gap-4 p-4 border border-gray-secondary rounded-lg cursor-pointer hover:border-secondary">
            <input
              {...register("paymentMethod")}
              type="radio"
              value="cash"
              className="w-5 h-5 text-secondary"
            />
            <span className="text-sm font-bold">Cash on Delivery</span>
          </label>
        </div>
      </div>

      {paymentMethod === "e-money" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="e-Money Number"
            error={errors.eMoneyNumber?.message}
          >
            <FormInput
              {...register("eMoneyNumber")}
              placeholder="238521993"
              error={!!errors.eMoneyNumber}
            />
          </FormField>

          <FormField label="e-Money PIN" error={errors.eMoneyPin?.message}>
            <FormInput
              {...register("eMoneyPin")}
              placeholder="6891"
              error={!!errors.eMoneyPin}
            />
          </FormField>
        </div>
      ) : (
        <div className="flex gap-5 items-center text-sm">
          <Image
            src="/icon-cash-on-delivery.svg"
            alt="Cash on Delivery Icon"
            width={32}
            height={32}
            className="mb-4"
          />
          <p>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </div>
  );
}

"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BillingDetails } from "@/components/checkout/BillingDetails";
import { ShippingInfo } from "@/components/checkout/ShippingInfo";
import { PaymentMethod } from "@/components/checkout/PaymentMethod";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { checkoutSchema } from "@/lib/checkoutValidation";
import type { CheckoutFormData } from "@/types/checkout";
import { useState } from "react";
import NavigateBack from "@/components/NavigateBack";

export default function CheckoutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: "e-money",
    },
  });

  const onSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true);
    console.log("Checkout data:", data);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-box-background py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <NavigateBack />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
              {/* Checkout Form */}
              <div className="lg:col-span-2 bg-white rounded-lg p-6 lg:p-8">
                <h1 className="text-2xl lg:text-3xl font-bold text-black uppercase tracking-wider mb-8">
                  CHECKOUT
                </h1>

                <div className="space-y-12">
                  <BillingDetails />
                  <ShippingInfo />
                  <PaymentMethod />
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <OrderSummary
                  onSubmit={methods.handleSubmit(onSubmit)}
                  isSubmitting={isSubmitting}
                />
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

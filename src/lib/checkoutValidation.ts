import { z } from "zod";

export const checkoutSchema = z
  .object({
    name: z.string().min(1, "Field cannot be empty"),
    email: z
      .string()
      .min(1, "Field cannot be empty")
      .email("Invalid email format"),
    phone: z.string().min(1, "Field cannot be empty"),
    address: z.string().min(1, "Field cannot be empty"),
    zipCode: z.string().min(1, "Field cannot be empty"),
    city: z.string().min(1, "Field cannot be empty"),
    country: z.string().min(1, "Field cannot be empty"),
    paymentMethod: z.enum(["e-money", "cash"]),
    eMoneyNumber: z.string().optional(),
    eMoneyPin: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.paymentMethod === "e-money") {
        return data.eMoneyNumber && data.eMoneyPin;
      }
      return true;
    },
    {
      message: "e-Money details are required",
      path: ["eMoneyNumber"],
    }
  );

import { z } from "zod";
import { CakeSize, Occasion, EggPreference, AlcoholPreference } from "@/types";

export const cakeOrderSchema = z.object({
  size: z.custom<CakeSize>((val) => typeof val === "string" && val.endsWith("kg"), {
    message: "Please select a size",
  }),
  quantity: z.number().min(1).max(20),
  occasion: z.custom<Occasion>().optional(),
  customText: z.string().max(60, "Maximum 60 characters").optional(),
  eggPreference: z.custom<EggPreference>().optional(),
  alcoholPreference: z.custom<AlcoholPreference>().optional(),
  additionalNotes: z.string().max(500).optional(),
});

export const cupcakeOrderSchema = z.object({
  flavor: z.string().min(1, "Please enter your preferred flavor/theme"),
  quantity: z.number().min(6, "Minimum order is 6 cupcakes").max(100),
  customText: z.string().max(60, "Maximum 60 characters").optional(),
  additionalNotes: z.string().max(500).optional(),
});

export const pastryOrderSchema = z.object({
  type: z.string().min(1, "Please select the type of pastry"),
  quantity: z.number().min(1).max(100),
  additionalNotes: z.string().max(500).optional(),
});

export const iceCreamOrderSchema = z.object({
  flavor: z.string().min(1, "Please specify flavor preferences"),
  quantity: z.number().min(1).max(50),
  additionalNotes: z.string().max(500).optional(),
});

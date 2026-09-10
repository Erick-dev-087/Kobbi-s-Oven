"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Product, OrderFormData } from "@/types";
import {
  cakeOrderSchema,
  cupcakeOrderSchema,
  pastryOrderSchema,
  iceCreamOrderSchema,
} from "@/lib/validation";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

interface OrderModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function OrderModal({ product, isOpen, onClose }: OrderModalProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Determine schema based on product category
  const getSchema = () => {
    if (!product) return cakeOrderSchema;
    switch (product.category) {
      case "cakes":
        return cakeOrderSchema;
      case "cupcakes":
        return cupcakeOrderSchema;
      case "pastries":
        return pastryOrderSchema;
      case "ice-cream":
        return iceCreamOrderSchema;
      default:
        return cakeOrderSchema;
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(getSchema()),
    defaultValues: {
      quantity: product?.category === "cupcakes" ? 6 : 1,
    },
  });

  // Reset form when product changes
  useEffect(() => {
    if (product) {
      reset({
        quantity: product.category === "cupcakes" ? 6 : 1,
        // Set defaults for radio group equivalents
        eggPreference: "no-preference",
        alcoholPreference: "no-preference",
      });
    }
  }, [product, reset]);

  if (!isOpen || !product) return null;

  const onSubmit = (data: any) => {
    const orderData: OrderFormData = {
      ...data,
      productId: product.id,
      productName: product.name,
      category: product.category,
    };

    const url = generateWhatsAppUrl(orderData);
    window.open(url, "_blank");
    onClose();
  };

  const occasions = [
    { value: "", label: "None" },
    { value: "birthday", label: "Birthday" },
    { value: "wedding", label: "Wedding" },
    { value: "graduation", label: "Graduation" },
    { value: "valentines", label: "Valentine's" },
    { value: "ruracio", label: "Ruracio" },
    { value: "baby-shower", label: "Baby Shower" },
  ];

  const minQuantity = product.category === "cupcakes" ? 6 : 1;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-12">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-cream rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close button - absolute top right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-black/50 hover:text-black bg-cream/80 backdrop-blur-md rounded-full transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left: Product Image */}
          <div className="relative w-full md:w-2/5 lg:w-1/2 h-64 md:h-auto shrink-0 bg-vanilla hidden md:block">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right: Scrollable details & form */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12">
            
            {/* Header / Details */}
            <div className="mb-8">
              <p className="text-caramel font-body text-xs font-bold uppercase tracking-widest mb-2">
                {product.category}
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-black mb-3 leading-tight">
                {product.name}
              </h2>
              {product.startingPrice && (
                <p className="font-display text-2xl text-cocoa">
                  KES {product.startingPrice.toLocaleString()}
                </p>
              )}
            </div>

            {/* Form */}
            <form id="order-form" onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              
              {/* === CAKES FLOW === */}
              {product.category === "cakes" && (
                <>
                  {/* Size (Pills) */}
                  <div>
                    <label className="block text-sm font-body font-bold text-black mb-3">
                      Size <span className="font-normal text-black/50">(affects price)</span> <span className="text-red-500">*</span>
                    </label>
                    <Controller
                      name="size"
                      control={control}
                      render={({ field }) => (
                        <div className="flex flex-wrap gap-2">
                          {product.options?.sizes?.map((size) => (
                            <button
                              key={size}
                              type="button"
                              onClick={() => field.onChange(size)}
                              className={`px-5 py-2.5 rounded-xl font-body text-sm font-medium transition-all duration-200 border-2 ${
                                field.value === size
                                  ? "bg-caramel border-caramel text-white shadow-md"
                                  : "bg-transparent border-black/10 text-black hover:border-caramel/50"
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      )}
                    />
                    {((errors as unknown) as Record<string, any>).size && (
                      <p className="text-red-500 text-xs mt-2 font-body">
                        {((errors as unknown) as Record<string, any>).size.message as string}
                      </p>
                    )}
                  </div>

                  {/* Egg Preference (Pills) */}
                  {product.options?.eggPreference && (
                    <div>
                      <label className="block text-sm font-body font-bold text-black mb-3">
                        Egg Preference
                      </label>
                      <Controller
                        name="eggPreference"
                        control={control}
                        render={({ field }) => (
                          <div className="flex flex-wrap gap-2">
                            {[
                              { id: "no-preference", label: "No Preference" },
                              { id: "with-eggs", label: "With Eggs" },
                              { id: "eggless", label: "Eggless" }
                            ].map((pref) => (
                              <button
                                key={pref.id}
                                type="button"
                                onClick={() => field.onChange(pref.id)}
                                className={`px-4 py-2 rounded-xl font-body text-sm font-medium transition-all duration-200 border-2 ${
                                  field.value === pref.id
                                    ? "bg-caramel border-caramel text-white shadow-md"
                                    : "bg-transparent border-black/10 text-black hover:border-caramel/50"
                                }`}
                              >
                                {pref.label}
                              </button>
                            ))}
                          </div>
                        )}
                      />
                    </div>
                  )}

                  {/* Alcohol Preference (Pills) */}
                  {product.options?.alcoholPreference && (
                    <div>
                      <label className="block text-sm font-body font-bold text-black mb-3">
                        Alcohol Preference
                      </label>
                      <Controller
                        name="alcoholPreference"
                        control={control}
                        render={({ field }) => (
                          <div className="flex flex-wrap gap-2">
                            {[
                              { id: "no-preference", label: "No Preference" },
                              { id: "with-alcohol", label: "With Alcohol" },
                              { id: "without-alcohol", label: "Without Alcohol" }
                            ].map((pref) => (
                              <button
                                key={pref.id}
                                type="button"
                                onClick={() => field.onChange(pref.id)}
                                className={`px-4 py-2 rounded-xl font-body text-sm font-medium transition-all duration-200 border-2 ${
                                  field.value === pref.id
                                    ? "bg-caramel border-caramel text-white shadow-md"
                                    : "bg-transparent border-black/10 text-black hover:border-caramel/50"
                                }`}
                              >
                                {pref.label}
                              </button>
                            ))}
                          </div>
                        )}
                      />
                    </div>
                  )}

                  {/* Occasion (Pills) */}
                  <div>
                    <label className="block text-sm font-body font-bold text-black mb-3">
                      Occasion <span className="font-normal text-black/50">(optional)</span>
                    </label>
                    <Controller
                      name="occasion"
                      control={control}
                      render={({ field }) => (
                        <div className="flex flex-wrap gap-2">
                          {occasions.map((occ) => (
                            <button
                              key={occ.value}
                              type="button"
                              onClick={() => field.onChange(occ.value)}
                              className={`px-4 py-2 rounded-xl font-body text-sm font-medium transition-all duration-200 border-2 ${
                                (field.value === occ.value || (!field.value && occ.value === ""))
                                  ? "bg-caramel border-caramel text-white shadow-md"
                                  : "bg-transparent border-black/10 text-black hover:border-caramel/50"
                              }`}
                            >
                              {occ.label}
                            </button>
                          ))}
                        </div>
                      )}
                    />
                  </div>

                  {/* Custom Text */}
                  {product.options?.customText && (
                    <div>
                      <label className="block text-sm font-body font-bold text-black mb-3">
                        Cake Message <span className="font-normal text-black/50">(optional)</span>
                      </label>
                      <input
                        type="text"
                        {...register("customText")}
                        placeholder="e.g. Happy Birthday Sarah!"
                        className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-black font-body text-sm focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors shadow-sm"
                      />
                      {((errors as unknown) as Record<string, any>).customText && (
                        <p className="text-red-500 text-xs mt-2 font-body">
                          {((errors as unknown) as Record<string, any>).customText.message as string}
                        </p>
                      )}
                    </div>
                  )}
                </>
              )}

              {/* === CUPCAKES FLOW === */}
              {product.category === "cupcakes" && (
                <>
                  <div>
                    <label className="block text-sm font-body font-bold text-black mb-3">
                      Flavor / Theme <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("flavor")}
                      placeholder="e.g. Vanilla, Chocolate, Superhero theme"
                      className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-black font-body text-sm focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors shadow-sm"
                    />
                    {((errors as unknown) as Record<string, any>).flavor && (
                      <p className="text-red-500 text-xs mt-2 font-body">
                        {((errors as unknown) as Record<string, any>).flavor.message as string}
                      </p>
                    )}
                  </div>
                  
                  {product.options?.customText && (
                    <div>
                      <label className="block text-sm font-body font-bold text-black mb-3">
                        Custom Text / Initials <span className="font-normal text-black/50">(optional)</span>
                      </label>
                      <input
                        type="text"
                        {...register("customText")}
                        placeholder="e.g. Happy 5th Birthday"
                        className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-black font-body text-sm focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors shadow-sm"
                      />
                    </div>
                  )}
                </>
              )}

              {/* === PASTRIES FLOW === */}
              {product.category === "pastries" && (
                <div>
                  <label className="block text-sm font-body font-bold text-black mb-3">
                    Type <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("type")}
                    placeholder="e.g. Beef, Chicken, Plain"
                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-black font-body text-sm focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors shadow-sm"
                  />
                  {((errors as unknown) as Record<string, any>).type && (
                    <p className="text-red-500 text-xs mt-2 font-body">
                      {((errors as unknown) as Record<string, any>).type.message as string}
                    </p>
                  )}
                </div>
              )}

              {/* === ICE CREAM FLOW === */}
              {product.category === "ice-cream" && (
                <div>
                  <label className="block text-sm font-body font-bold text-black mb-3">
                    Flavor <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("flavor")}
                    placeholder="e.g. Vanilla, Strawberry, Chocolate"
                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-black font-body text-sm focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors shadow-sm"
                  />
                  {((errors as unknown) as Record<string, any>).flavor && (
                    <p className="text-red-500 text-xs mt-2 font-body">
                      {((errors as unknown) as Record<string, any>).flavor.message as string}
                    </p>
                  )}
                </div>
              )}

              {/* === UNIVERSAL FIELDS (Quantity & Notes & Submit) === */}
              <div className="pt-2">
                <label className="block text-sm font-body font-bold text-black mb-3">
                  Quantity {product.category === "cupcakes" && <span className="font-normal text-black/50">(Min 6)</span>}
                </label>
                <Controller
                  name="quantity"
                  control={control}
                  render={({ field }) => (
                    <div className="inline-flex items-center bg-white border border-black/10 rounded-xl p-1 shadow-sm">
                      <button
                        type="button"
                        onClick={() => field.onChange(Math.max(minQuantity, Number(field.value) - 1))}
                        disabled={Number(field.value) <= minQuantity}
                        className="w-10 h-10 flex items-center justify-center text-xl text-black hover:bg-black/5 rounded-lg disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        {...field}
                        className="w-14 text-center font-body font-medium text-black bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          if (!isNaN(val)) field.onChange(Math.max(minQuantity, val));
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => field.onChange(Number(field.value) + 1)}
                        className="w-10 h-10 flex items-center justify-center text-xl text-black hover:bg-black/5 rounded-lg transition-colors"
                      >
                        +
                      </button>
                    </div>
                  )}
                />
                {errors.quantity && (
                  <p className="text-red-500 text-xs mt-2 font-body">
                    {errors.quantity.message as string}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-body font-bold text-black mb-3">
                  Additional Notes <span className="font-normal text-black/50">(optional)</span>
                </label>
                <textarea
                  {...register("additionalNotes")}
                  rows={2}
                  placeholder="Colors, theme, delivery notes..."
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-black font-body text-sm focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors shadow-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-black/5">
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-lg shadow-xl shadow-caramel/20 hover:-translate-y-1 transition-transform duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Send Order via WhatsApp
                </button>
              </div>

            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

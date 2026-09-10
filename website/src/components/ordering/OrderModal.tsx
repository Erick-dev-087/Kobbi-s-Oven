"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
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

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
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
          className="relative w-full max-w-2xl bg-cream rounded-2xl sm:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 sm:p-8 border-b border-black/5 bg-vanilla shrink-0">
            <h2 className="font-display text-2xl sm:text-3xl text-black">
              Order Details
            </h2>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-black/50 hover:text-black transition-colors rounded-full hover:bg-black/5"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            {/* Product summary */}
            <div className="flex gap-4 sm:gap-6 mb-8 pb-8 border-b border-black/5">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 shadow-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-caramel font-body text-xs font-semibold uppercase tracking-wider mb-1">
                  {product.category}
                </p>
                <h3 className="font-display text-xl sm:text-2xl text-black mb-2">
                  {product.name}
                </h3>
                {product.startingPrice && (
                  <p className="text-cocoa font-body text-sm font-medium">
                    Starting from KSh {product.startingPrice.toLocaleString()}
                  </p>
                )}
              </div>
            </div>

            {/* Form */}
            <form id="order-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* === CAKES FLOW === */}
              {product.category === "cakes" && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Size */}
                    <div>
                      <label className="block text-sm font-body font-semibold text-black mb-2">
                        Size <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register("size")}
                        className="w-full bg-vanilla border border-black/10 rounded-lg px-4 py-3 text-black font-body text-sm focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors"
                      >
                        <option value="">Select a size...</option>
                        {product.options?.sizes?.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                      {((errors as unknown) as Record<string, any>).size && (
                        <p className="text-red-500 text-xs mt-1 font-body">
                          {((errors as unknown) as Record<string, any>).size.message as string}
                        </p>
                      )}
                    </div>

                    {/* Occasion */}
                    <div>
                      <label className="block text-sm font-body font-semibold text-black mb-2">
                        Occasion
                      </label>
                      <select
                        {...register("occasion")}
                        className="w-full bg-vanilla border border-black/10 rounded-lg px-4 py-3 text-black font-body text-sm focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors"
                      >
                        <option value="">Select occasion (optional)</option>
                        <option value="birthday">Birthday</option>
                        <option value="wedding">Wedding</option>
                        <option value="graduation">Graduation</option>
                        <option value="valentines">Valentine&apos;s</option>
                        <option value="ruracio">Ruracio</option>
                        <option value="baby-shower">Baby Shower</option>
                        <option value="custom">Other Celebration</option>
                      </select>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-body font-semibold text-black mb-2">
                      Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      {...register("quantity", { valueAsNumber: true })}
                      min="1"
                      className="w-full sm:w-1/3 bg-vanilla border border-black/10 rounded-lg px-4 py-3 text-black font-body text-sm focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors"
                    />
                    {errors.quantity && (
                      <p className="text-red-500 text-xs mt-1 font-body">
                        {errors.quantity.message as string}
                      </p>
                    )}
                  </div>

                  {/* Preferences Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-5 bg-vanilla border border-black/5 rounded-xl">
                    {product.options?.eggPreference && (
                      <div>
                        <label className="block text-sm font-body font-semibold text-black mb-3">
                          Egg Preference
                        </label>
                        <div className="space-y-2">
                          {["no-preference", "with-eggs", "eggless"].map((val) => (
                            <label key={val} className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="radio"
                                value={val}
                                {...register("eggPreference")}
                                className="w-4 h-4 text-caramel focus:ring-caramel border-black/20"
                                defaultChecked={val === "no-preference"}
                              />
                              <span className="text-sm font-body text-black/80 capitalize">
                                {val.replace("-", " ")}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.options?.alcoholPreference && (
                      <div>
                        <label className="block text-sm font-body font-semibold text-black mb-3">
                          Alcohol Preference
                        </label>
                        <div className="space-y-2">
                          {["no-preference", "with-alcohol", "without-alcohol"].map((val) => (
                            <label key={val} className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="radio"
                                value={val}
                                {...register("alcoholPreference")}
                                className="w-4 h-4 text-caramel focus:ring-caramel border-black/20"
                                defaultChecked={val === "no-preference"}
                              />
                              <span className="text-sm font-body text-black/80 capitalize">
                                {val.replace("-", " ")}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Custom Text */}
                  {product.options?.customText && (
                    <div>
                      <label className="block text-sm font-body font-semibold text-black mb-2">
                        Custom Text on Cake
                      </label>
                      <input
                        type="text"
                        {...register("customText")}
                        placeholder="e.g. Happy Birthday Sarah!"
                        className="w-full bg-vanilla border border-black/10 rounded-lg px-4 py-3 text-black font-body text-sm focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors"
                      />
                      {((errors as unknown) as Record<string, any>).customText && (
                        <p className="text-red-500 text-xs mt-1 font-body">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-body font-semibold text-black mb-2">
                        Flavor / Theme <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...register("flavor")}
                        placeholder="e.g. Vanilla, Chocolate, Superhero theme"
                        className="w-full bg-vanilla border border-black/10 rounded-lg px-4 py-3 text-black font-body text-sm focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors"
                      />
                      {((errors as unknown) as Record<string, any>).flavor && (
                        <p className="text-red-500 text-xs mt-1 font-body">
                          {((errors as unknown) as Record<string, any>).flavor.message as string}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-body font-semibold text-black mb-2">
                        Quantity <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        {...register("quantity", { valueAsNumber: true })}
                        min="6"
                        className="w-full bg-vanilla border border-black/10 rounded-lg px-4 py-3 text-black font-body text-sm focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors"
                      />
                      <p className="text-black/50 text-xs mt-1 font-body">Minimum order is 6</p>
                      {errors.quantity && (
                        <p className="text-red-500 text-xs mt-1 font-body">
                          {errors.quantity.message as string}
                        </p>
                      )}
                    </div>
                  </div>
                  {product.options?.customText && (
                    <div>
                      <label className="block text-sm font-body font-semibold text-black mb-2">
                        Custom Text / Initials
                      </label>
                      <input
                        type="text"
                        {...register("customText")}
                        placeholder="e.g. Happy 5th Birthday"
                        className="w-full bg-vanilla border border-black/10 rounded-lg px-4 py-3 text-black font-body text-sm focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors"
                      />
                    </div>
                  )}
                </>
              )}

              {/* === PASTRIES FLOW === */}
              {product.category === "pastries" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-body font-semibold text-black mb-2">
                      Type <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("type")}
                      placeholder="e.g. Beef, Chicken, Plain"
                      className="w-full bg-vanilla border border-black/10 rounded-lg px-4 py-3 text-black font-body text-sm focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors"
                    />
                    {((errors as unknown) as Record<string, any>).type && (
                      <p className="text-red-500 text-xs mt-1 font-body">
                        {((errors as unknown) as Record<string, any>).type.message as string}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-black mb-2">
                      Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      {...register("quantity", { valueAsNumber: true })}
                      min="1"
                      className="w-full bg-vanilla border border-black/10 rounded-lg px-4 py-3 text-black font-body text-sm focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors"
                    />
                    {errors.quantity && (
                      <p className="text-red-500 text-xs mt-1 font-body">
                        {errors.quantity.message as string}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* === ICE CREAM FLOW === */}
              {product.category === "ice-cream" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-body font-semibold text-black mb-2">
                      Flavor <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("flavor")}
                      placeholder="e.g. Vanilla, Strawberry, Chocolate"
                      className="w-full bg-vanilla border border-black/10 rounded-lg px-4 py-3 text-black font-body text-sm focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors"
                    />
                    {((errors as unknown) as Record<string, any>).flavor && (
                      <p className="text-red-500 text-xs mt-1 font-body">
                        {((errors as unknown) as Record<string, any>).flavor.message as string}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-black mb-2">
                      Quantity (Scoops/Tubs) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      {...register("quantity", { valueAsNumber: true })}
                      min="1"
                      className="w-full bg-vanilla border border-black/10 rounded-lg px-4 py-3 text-black font-body text-sm focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors"
                    />
                    {errors.quantity && (
                      <p className="text-red-500 text-xs mt-1 font-body">
                        {errors.quantity.message as string}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* === UNIVERSAL FIELDS === */}
              <div className="pt-4">
                <label className="block text-sm font-body font-semibold text-black mb-2">
                  Additional Notes
                </label>
                <textarea
                  {...register("additionalNotes")}
                  rows={3}
                  placeholder="Colors, theme, serving style, pickup notes, or other preferences."
                  className="w-full bg-vanilla border border-black/10 rounded-lg px-4 py-3 text-black font-body text-sm focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors resize-none"
                />
              </div>

            </form>
          </div>

          {/* Footer CTA */}
          <div className="p-6 sm:p-8 bg-cream border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <p className="text-black/60 font-body text-xs sm:text-sm text-center sm:text-left">
              Clicking below will open WhatsApp with your order details pre-filled.
            </p>
            <button
              type="submit"
              form="order-form"
              className="w-full sm:w-auto btn-primary whitespace-nowrap shadow-lg shadow-caramel/20"
            >
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Send via WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

import { OrderFormData } from "@/types";

// The bakery's WhatsApp number
const WHATSAPP_NUMBER = "254722433102";

export function generateWhatsAppUrl(order: OrderFormData): string {
  let message = `Hello Kobbi's Oven, I'd like to place an order:\n\n`;

  message += `*Product:* ${order.productName}\n`;
  message += `*Quantity:* ${order.quantity}\n`;

  if (order.category === "cakes") {
    message += `*Size:* ${order.size}\n`;
    if (order.occasion) {
      // Capitalize first letter
      const occ = order.occasion.charAt(0).toUpperCase() + order.occasion.slice(1);
      message += `*Occasion:* ${occ}\n`;
    }
    if (order.customText) {
      message += `*Custom Text:* "${order.customText}"\n`;
    }
    if (order.eggPreference) {
      const pref = order.eggPreference.replace("-", " ");
      message += `*Egg Preference:* ${pref}\n`;
    }
    if (order.alcoholPreference) {
      const pref = order.alcoholPreference.replace("-", " ");
      message += `*Alcohol Preference:* ${pref}\n`;
    }
  } else if (order.category === "cupcakes" || order.category === "ice-cream") {
    message += `*Flavor/Type:* ${order.flavor}\n`;
    if (order.category === "cupcakes" && order.customText) {
      message += `*Custom Text:* "${order.customText}"\n`;
    }
  } else if (order.category === "pastries") {
    message += `*Type:* ${order.type}\n`;
  }

  if (order.additionalNotes) {
    message += `\n*Additional Notes:*\n${order.additionalNotes}\n`;
  }

  // Encode the message for a URL
  const encodedMessage = encodeURIComponent(message);
  
  // Create the wa.me link
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
} 
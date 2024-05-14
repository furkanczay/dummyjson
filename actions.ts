"use server"

import { redirect } from "next/navigation";

export async function sendFeedback(formData: FormData){
  console.log(formData)
  const date = new Date();
  const response = await fetch("https://discord.com/api/webhooks/1240043702844522588/GHL7CJ7oeJDWXoMy296OuoCymcUqkzek9HjqfIQthu0R1fhWECdOPmDVZQYRbmg6hGlO", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      embeds: [
        {
          author: {
            name: formData.get("email") as string
          },
          title: formData.get("fullname") as string,
          description: formData.get("comments") as string,
          footer: {
            text: `Tarih ve Saat: ${date.toLocaleString()}`
          }
        }
      ]
    }),
  });
  return redirect("/?feedback=success");
}
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqData = [
  {
    question: "Is Skype Shutting Down in 2025? What You Need to Know",
    answer: (
      <div>
        While Skype isn't officially shutting down yet, Microsoft has shifted
        focus to{" "}
        <Link
          href="/items/microsoft-teams"
          className="text-blue-600 hover:underline"
        >
          Microsoft Teams
        </Link>
        , their preferred business communication platform. Many users are
        switching to better Skype alternatives like{" "}
        <Link href="/items/zoom" className="text-blue-600 hover:underline">
          Zoom
        </Link>{" "}
        for video calls and{" "}
        <Link href="/items/discord" className="text-blue-600 hover:underline">
          Discord
        </Link>{" "}
        for community chat. These modern Skype replacements offer better video
        quality, more features, and regular updates.
      </div>
    ),
  },
  {
    question: "When Will Skype Shut Down? Timeline and Alternatives",
    answer: (
      <div>
        Microsoft hasn't announced when Skype will shut down as of May 2025.
        However, with{" "}
        <Link
          href="/items/microsoft-teams"
          className="text-blue-600 hover:underline"
        >
          Microsoft Teams
        </Link>{" "}
        becoming Microsoft's primary focus, experts predict Skype may phase out
        within 3-5 years. Smart users are already switching to alternatives like{" "}
        <Link href="/items/viber" className="text-blue-600 hover:underline">
          Viber
        </Link>{" "}
        for free international calls or{" "}
        <Link
          href="/items/ringcentral"
          className="text-blue-600 hover:underline"
        >
          RingCentral
        </Link>{" "}
        for business communications.
      </div>
    ),
  },
  {
    question:
      "What's the Best Alternative to Skype? Top Replacements by Category",
    answer: (
      <div>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Best Skype Alternative for Personal Use</strong>:{" "}
            <Link
              href="/items/discord"
              className="text-blue-600 hover:underline"
            >
              Discord
            </Link>{" "}
            - Perfect for gaming, community chats, and group voice calls
          </li>
          <li>
            <strong>Best Skype Replacement for Video Meetings</strong>:{" "}
            <Link href="/items/zoom" className="text-blue-600 hover:underline">
              Zoom
            </Link>{" "}
            - Industry-leading video quality and screen sharing
          </li>
          <li>
            <strong>Most Secure Alternative to Skype</strong>:{" "}
            <Link
              href="/items/signal"
              className="text-blue-600 hover:underline"
            >
              Signal
            </Link>{" "}
            - Military-grade end-to-end encryption
          </li>
          <li>
            <strong>Best Skype Alternative for Business</strong>:{" "}
            <Link
              href="/items/microsoft-teams"
              className="text-blue-600 hover:underline"
            >
              Microsoft Teams
            </Link>{" "}
            - Full Microsoft 365 integration
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "Best Apps Like Skype for International Calling - Save Money on Global Calls",
    answer: (
      <div>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/items/viber" className="text-blue-600 hover:underline">
              Viber
            </Link>{" "}
            - Free app-to-app international calls plus cheap Viber Out rates to
            55+ countries
          </li>
          <li>
            <Link
              href="/items/whatsapp"
              className="text-blue-600 hover:underline"
            >
              WhatsApp
            </Link>{" "}
            - Completely free international voice and video calls over WiFi
          </li>
          <li>
            <Link href="/items/yolla" className="text-blue-600 hover:underline">
              Yolla
            </Link>{" "}
            - Call 190+ countries with competitive rates and offline calling
            features
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "Best Skype Alternatives for Calling Landlines - Home & Business Solutions",
    answer: (
      <div>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link
              href="/items/vonage"
              className="text-blue-600 hover:underline"
            >
              Vonage
            </Link>{" "}
            - Professional VoIP service with crystal-clear landline calls and
            voicemail-to-email
          </li>
          <li>
            <Link
              href="/items/magicjack"
              className="text-blue-600 hover:underline"
            >
              MagicJack
            </Link>{" "}
            - Budget-friendly hardware solution for unlimited home landline
            calls
          </li>
          <li>
            <Link href="/items/ooma" className="text-blue-600 hover:underline">
              Ooma
            </Link>{" "}
            - Premium VoIP service with Telo device for reliable landline
            connections
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Skype vs Modern Alternatives: Why Users Are Switching in 2025",
    answer: (
      <div>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Better Video Quality</strong>:{" "}
            <Link href="/items/zoom" className="text-blue-600 hover:underline">
              Zoom
            </Link>{" "}
            delivers HD video that doesn't freeze during group calls
          </li>
          <li>
            <strong>Enhanced Security</strong>:{" "}
            <Link
              href="/items/signal"
              className="text-blue-600 hover:underline"
            >
              Signal
            </Link>{" "}
            provides superior end-to-end encryption compared to Skype
          </li>
          <li>
            <strong>Gaming Features</strong>:{" "}
            <Link
              href="/items/discord"
              className="text-blue-600 hover:underline"
            >
              Discord
            </Link>{" "}
            offers ultra-low latency voice chat for gamers
          </li>
          <li>
            <strong>Business Tools</strong>:{" "}
            <Link
              href="/items/microsoft-teams"
              className="text-blue-600 hover:underline"
            >
              Microsoft Teams
            </Link>{" "}
            includes collaboration features Skype lacks
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Free Alternatives to Skype - Best No-Cost Options",
    answer: (
      <div>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link
              href="/items/discord"
              className="text-blue-600 hover:underline"
            >
              Discord
            </Link>{" "}
            - 100% free voice, video, and text communication
          </li>
          <li>
            <Link href="/items/zoom" className="text-blue-600 hover:underline">
              Zoom
            </Link>{" "}
            - Free tier allows 40-minute meetings with 100 participants
          </li>
          <li>
            <Link
              href="/items/jitsi-meet"
              className="text-blue-600 hover:underline"
            >
              Jitsi Meet
            </Link>{" "}
            - Open-source, completely free video conferencing
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Best Video Conferencing Alternatives to Skype for Remote Work",
    answer: (
      <div>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/items/zoom" className="text-blue-600 hover:underline">
              Zoom
            </Link>{" "}
            - Gold standard for video meetings with breakout rooms and webinar
            features
          </li>
          <li>
            <Link
              href="/items/whereby"
              className="text-blue-600 hover:underline"
            >
              Whereby
            </Link>{" "}
            - No-download meetings that work instantly in any browser
          </li>
          <li>
            <Link
              href="/items/jitsi-meet"
              className="text-blue-600 hover:underline"
            >
              Jitsi Meet
            </Link>{" "}
            - Privacy-focused, open-source video conferencing
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "Most Secure Skype Alternatives - Privacy-First Communication Apps",
    answer: (
      <div>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link
              href="/items/signal"
              className="text-blue-600 hover:underline"
            >
              Signal
            </Link>{" "}
            - Open-source app with unbreakable end-to-end encryption
          </li>
          <li>
            <Link href="/items/wire" className="text-blue-600 hover:underline">
              Wire
            </Link>{" "}
            - Swiss-based secure messaging with enterprise-grade encryption
          </li>
          <li>
            <Link
              href="/items/telegram"
              className="text-blue-600 hover:underline"
            >
              Telegram
            </Link>{" "}
            - Feature-rich messaging with optional secret chats
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Best Skype Alternatives for Gaming - Crystal Clear Game Chat",
    answer: (
      <div>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link
              href="/items/discord"
              className="text-blue-600 hover:underline"
            >
              Discord
            </Link>{" "}
            - #1 gaming chat app with server features and screen sharing
          </li>
          <li>
            <Link
              href="/items/teamspeak"
              className="text-blue-600 hover:underline"
            >
              TeamSpeak
            </Link>{" "}
            - Professional-grade voice chat with custom server hosting
          </li>
          <li>
            <Link
              href="/items/mumble"
              className="text-blue-600 hover:underline"
            >
              Mumble
            </Link>{" "}
            - Ultra-low latency voice chat for competitive gaming
          </li>
        </ul>
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            FAQ: Best Skype Alternatives for International Calls and Landline
            Calling in 2025
          </h2>
          <p className="text-lg text-gray-600">
            Looking for the best Skype alternatives? This comprehensive guide
            answers your questions about Skype replacements, international
            calling apps, and landline calling solutions. Whether you need a
            Skype substitute for business or personal use, we've got you
            covered.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

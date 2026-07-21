"use client";
import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";
import { Plus } from "lucide-react";

const QUESTIONS = [
  {
    question: "CreativeHub, c'est quoi exactement ?",
    answer:
      "Réponse placeholder : CreativeHub est une plateforme créative fictive qui regroupe des outils de génération d'images, de vidéos, d'audio et de 3D.",
  },
  {
    question: "J'ai déjà un abonnement — que se passe-t-il maintenant ?",
    answer:
      "Réponse placeholder : votre abonnement actuel reste valable ; vous serez migré automatiquement vers la nouvelle offre équivalente.",
  },
  {
    question: "Le contenu stock reste-t-il disponible, ou tout est-il désormais IA ?",
    answer:
      "Réponse placeholder : la banque de contenus stock reste disponible et se combine avec vos générations IA.",
  },
  {
    question: "J'ai déjà une offre payante. Que devient-elle ?",
    answer:
      "Réponse placeholder : elle est conservée à l'identique jusqu'à son renouvellement, puis alignée sur les nouvelles offres.",
  },
  {
    question: "À qui appartient le contenu que je crée ?",
    answer:
      "Réponse placeholder : à vous. Tous les contenus générés sur les plans payants vous appartiennent, usage commercial compris.",
  },
];

export function Faq() {
  return (
    <section className="bg-marketing-surface-0 px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr]">

        <div>
          <h2 className="max-w-xs font-display text-3xl font-bold text-marketing-foreground-0 lg:text-4xl">
            Réponses à vos questions
          </h2>

          <Link
            href="#"
            className="mt-6 inline-block rounded-lg border border-black/20 px-5 py-2.5 text-sm font-medium text-marketing-foreground-0 transition-colors hover:bg-black/5"
          >
            Contacter le support
          </Link>
        </div>

        <Accordion.Root type="single" collapsible className="flex flex-col">
          {QUESTIONS.map((item, index) => (
            <Accordion.Item
              key={index}
              value={`question-${index}`}
              className="border-b border-black/10"
            >

              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-medium text-marketing-foreground-0 transition-colors hover:text-marketing-foreground-1">
                  {item.question}

                  <Plus className="h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-data-[state=open]:rotate-45" />
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="grid overflow-hidden transition-all duration-300 data-[state=closed]:grid-rows-[0fr] data-[state=closed]:opacity-0 data-[state=open]:grid-rows-[1fr] data-[state=open]:opacity-100">
                <div className="overflow-hidden">
                  <p className="pb-5 text-sm leading-relaxed text-marketing-foreground-2">
                    {item.answer}
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

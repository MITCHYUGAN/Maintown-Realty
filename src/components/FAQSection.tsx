import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // Default open first FAQ

  const faqs: FAQItem[] = [
    {
      question: "Can landlords still receive yearly rent upfront?",
      answer: "Absolutely. In fact, 100% of landlords on our platform receive their requested 1-year or 2-year rent upfront, in full, on the very day the lease is executed. MainTown Realty completely assumes the tenant's payment timeline, ensuring landlords get secure, uninterrupted cash flows while tenants pay monthly."
    },
    {
      question: "How does the monthly payment work?",
      answer: "When you find an apartment on our portal (or bring your own), you complete a simple digital KYC and financial evaluation. Once approved, MainTown purchases the annual lease from the landlord upfront. You then pay MainTown a fixed monthly subscription containing your base monthly rent plus a small, transparent service spread. Payments are automated via card or bank debit."
    },
    {
      question: "What happens if I miss a rent payment?",
      answer: "We understand that life happens. If you expect a payment delay, you can request a grace period directly from your dashboard. However, consistent missed payments without notice will affect your MainTown tenant health score, reported directly to credit bureaus, and may eventually lead to standard lease termination procedures. Our team works proactively with tenants to adjust plans where possible."
    },
    {
      question: "How do you verify listings and protect users from scams?",
      answer: "MainTown maintains a dedicated physical verification crew. Before any property is listed, we inspect the physical premises, verify utility networks, check property deeds with local land registries, and do complete background checks on the landlord's legal authority to lease the property. This guarantees that 100% of properties on our dashboard are scam-free."
    },
    {
      question: "Is my money secure?",
      answer: "Yes, entirely. All customer funds and rent deposits are held securely in escrow accounts with licensed institutional trustees. MainTown Realty operates under high-standard NDPR data protection regulations and utilizes bank-grade, PCI-DSS compliant financial processing lines to handle card details safely."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-secondary/30 relative overflow-hidden border-t border-border">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 relative">
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Any Questions?
          </p>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Get clear, comprehensive details on how MainTown bridges the rental upfront barrier in Nigeria.
          </p>
        </div>

        {/* Collapsible Accordion Grid */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card overflow-hidden shadow-xs hover:border-primary/40 transition-all duration-300"
              >
                {/* Header / Trigger */}
                <button
                  id={`faq-trigger-${idx}`}
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-sans text-sm sm:text-base font-semibold text-foreground tracking-tight pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full border transition-all ${isOpen ? 'bg-primary/10 border-primary/20 text-primary rotate-180' : 'bg-secondary border-border text-muted-foreground'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-6 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

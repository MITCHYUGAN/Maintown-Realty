import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Check, Copy, Lock, ChevronRight, MessageCircle } from "lucide-react";
import { WaitlistSubmission } from "../types";

interface WaitlistSectionProps {
  selectedRole?: "tenant" | "landlord" | "agent";
  selectedMarket?: "Nigeria" | "Canada" | "Both";
}

export default function WaitlistSection({ selectedRole = "tenant", selectedMarket = "Nigeria" }: WaitlistSectionProps) {
  const [role, setRole] = useState<"tenant" | "landlord" | "agent">(selectedRole);
  const [market, setMarket] = useState<"Nigeria" | "Canada" | "Both">(selectedMarket);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    if (selectedRole) setRole(selectedRole);
  }, [selectedRole]);

  useEffect(() => {
    if (selectedMarket) setMarket(selectedMarket);
  }, [selectedMarket]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submission, setSubmission] = useState<WaitlistSubmission | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newSubmission: WaitlistSubmission = {
        name,
        contact,
        role,
        market,
        createdAt: new Date().toISOString(),
        queuePosition: 1,
      };

      localStorage.setItem("maintown_waitlist_joined", JSON.stringify(newSubmission));
      setSubmission(newSubmission);
      setIsSubmitting(false);
    }, 800);
  };

  const copyReferral = () => {
    if (!submission) return;
    const refLink = `${window.location.origin}?ref=${encodeURIComponent(submission.name.toLowerCase().replace(/\s+/g, "-"))}`;
    navigator.clipboard.writeText(refLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    if (!submission) return;
    const refLink = `${window.location.origin}?ref=${encodeURIComponent(submission.name.toLowerCase().replace(/\s+/g, "-"))}`;
    const text = encodeURIComponent(`I just joined the early access waitlist for MainTown Realty! They are building verified rental housing for Nigeria & Canada. Check it out: ${refLink}`);
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <section id="waitlist-form" className="py-20 md:py-28 bg-white border-t border-border relative">
      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20 relative">
        {/* Container Box */}
        <div className="bg-white p-8 sm:p-12 md:p-14 rounded-3xl border border-slate-200/90 shadow-xs relative overflow-hidden text-left">
          {!submission ? (
            <div>
              {/* Header */}
              <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">EARLY ACCESS</p>

                <h2 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold text-slate-900 tracking-tight leading-[1.18]">Be First In Line</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">Join the early access list and we'll reach out on WhatsApp the moment listings go live in your area.</p>
              </div>

              {/* Form */}
              <form id="inline-waitlist-form" onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    id="inline-input-name"
                    type="text"
                    required
                    placeholder="e.g. Babatunde Ogunlesi"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 h-12 rounded-xl border border-slate-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-slate-900 outline-none transition-all text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">WhatsApp Number or Email</label>
                  <input
                    id="inline-input-contact"
                    type="text"
                    required
                    placeholder="e.g. +234 801 234 5678 or name@email.com"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-4 h-12 rounded-xl border border-slate-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-slate-900 outline-none transition-all text-sm font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">I am a...</label>
                    <select
                      id="inline-select-role"
                      value={role}
                      onChange={(e) => setRole(e.target.value as any)}
                      className="w-full px-4 h-12 rounded-xl border border-slate-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-slate-900 outline-none transition-all text-sm font-medium cursor-pointer"
                    >
                      <option value="tenant">Tenant</option>
                      <option value="landlord">Landlord</option>
                      <option value="agent">Agent</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Which Market?</label>
                    <select
                      id="inline-select-market"
                      value={market}
                      onChange={(e) => setMarket(e.target.value as any)}
                      className="w-full px-4 h-12 rounded-xl border border-slate-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-slate-900 outline-none transition-all text-sm font-medium cursor-pointer"
                    >
                      <option value="Nigeria">Nigeria (Lagos)</option>
                      <option value="Canada">Canada Relocation</option>
                      <option value="Both">Both Markets</option>
                    </select>
                  </div>
                </div>

                <button
                  id="inline-waitlist-submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 h-12 px-6 bg-primary hover:bg-primary/90 disabled:opacity-50 text-primary-foreground font-medium rounded-xl shadow-xs transition-all text-base cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Securing Priority Spot...</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Join the Waitlist
                      <ChevronRight className="w-5 h-5" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* Success State */
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-4 space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                <Check className="w-8 h-8 text-emerald-700" />
              </div>

              <div className="space-y-2">
                <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">You're on the list, {submission.name.split(" ")[0]}!</h3>
                <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed font-normal">
                  We'll message you on WhatsApp the moment listings are verified in your target neighborhood.
                </p>
              </div>

              {/* Status Box */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-xs max-w-md mx-auto text-left space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-wider font-mono">
                  <span>Early Access Status</span>
                  <span className="text-emerald-400 font-semibold">Confirmed</span>
                </div>
                <div className="pt-2 border-t border-slate-800 text-xs text-slate-300 space-y-1.5 font-normal">
                  <p>
                    Target Market: <span className="font-semibold text-white">{submission.market}</span>
                  </p>
                  <p>
                    Account Type: <span className="font-semibold text-white capitalize">{submission.role}</span>
                  </p>
                  <p>
                    Contact: <span className="font-mono text-slate-200">{submission.contact}</span>
                  </p>
                </div>
              </div>

              {/* Share Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
                <button
                  id="inline-share-wa-btn"
                  onClick={handleShareWhatsApp}
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 h-11 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl text-xs transition-all shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Share on WhatsApp
                </button>
                <button
                  id="inline-copy-link-btn"
                  onClick={copyReferral}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 h-11 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-medium rounded-xl text-xs transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>Copy Referral Link</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

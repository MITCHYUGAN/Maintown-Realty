import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, Share2, Sparkles, Lock, ChevronRight, MessageCircle } from 'lucide-react';
import { WaitlistSubmission } from '../types';

export default function WaitlistSection() {
  const [role, setRole] = useState<'tenant' | 'landlord' | 'agent'>('tenant');
  const [market, setMarket] = useState<'Nigeria' | 'Canada' | 'Both'>('Nigeria');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submission, setSubmission] = useState<WaitlistSubmission | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const seed = Math.abs(contact.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0));
      const tenantBase = 2410;
      const landlordBase = 320;
      const queuePos = role === 'tenant' ? tenantBase + (seed % 900) : landlordBase + (seed % 150);

      const newSubmission: WaitlistSubmission = {
        name,
        contact,
        role,
        market,
        createdAt: new Date().toISOString(),
        queuePosition: queuePos,
      };

      localStorage.setItem('maintown_waitlist_joined', JSON.stringify(newSubmission));
      setSubmission(newSubmission);
      setIsSubmitting(false);
    }, 1000);
  };

  const copyReferral = () => {
    if (!submission) return;
    const refLink = `${window.location.origin}?ref=${encodeURIComponent(submission.name.toLowerCase().replace(/\s+/g, '-'))}`;
    navigator.clipboard.writeText(refLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    if (!submission) return;
    const refLink = `${window.location.origin}?ref=${encodeURIComponent(submission.name.toLowerCase().replace(/\s+/g, '-'))}`;
    const text = encodeURIComponent(
      `I just joined the waitlist for MainTown Realty! They are fixing renting in Nigeria & Canada with verified listings and safe payments. Check it out: ${refLink}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section id="waitlist-form" className="py-24 md:py-32 bg-white border-t border-slate-100 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Background Subtle Gradient Box */}
        <div className="bg-gradient-to-br from-purple-50/80 via-white to-amber-50/50 p-8 sm:p-12 md:p-14 rounded-3xl border border-purple-100 shadow-xl relative overflow-hidden text-left">
          
          {!submission ? (
            <div>
              {/* Header */}
              <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                  <span>Early Access Onboarding</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Be First In Line
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Join the waitlist and we'll reach out on WhatsApp the moment it's your turn.
                </p>
              </div>

              {/* Form */}
              <form id="inline-waitlist-form" onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    id="inline-input-name"
                    type="text"
                    required
                    placeholder="e.g. Babatunde Ogunlesi"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-slate-900 outline-none transition-all text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    WhatsApp Number or Email
                  </label>
                  <input
                    id="inline-input-contact"
                    type="text"
                    required
                    placeholder="e.g. +234 801 234 5678 or name@email.com"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-slate-900 outline-none transition-all text-sm font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      I am a...
                    </label>
                    <select
                      id="inline-select-role"
                      value={role}
                      onChange={(e) => setRole(e.target.value as any)}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-slate-900 outline-none transition-all text-sm font-medium"
                    >
                      <option value="tenant">Tenant</option>
                      <option value="landlord">Landlord</option>
                      <option value="agent">Agent</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Which Market?
                    </label>
                    <select
                      id="inline-select-market"
                      value={market}
                      onChange={(e) => setMarket(e.target.value as any)}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-slate-900 outline-none transition-all text-sm font-medium"
                    >
                      <option value="Nigeria">Nigeria (Lagos)</option>
                      <option value="Canada">Canada Relocation</option>
                      <option value="Both">Both Markets</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                  <Lock className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>No spam ever. Direct onboarding notification via WhatsApp.</span>
                </div>

                <button
                  id="inline-waitlist-submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white font-bold rounded-2xl shadow-xl shadow-purple-200 transition-all text-base cursor-pointer"
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
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4F5E0] text-emerald-800 mb-4">
                <Check className="w-8 h-8 text-emerald-700" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                You're on the list, {submission.name.split(' ')[0]}!
              </h3>

              <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-md mx-auto leading-relaxed">
                We'll message you on WhatsApp when it's your turn. In the meantime, share MainTown with 3 friends to move up the list.
              </p>

              {/* Queue Position Box */}
              <div className="my-6 p-6 rounded-2xl bg-purple-700 text-white shadow-xl relative overflow-hidden max-w-md mx-auto">
                <p className="text-xs text-purple-200 font-bold uppercase tracking-wider">
                  Priority Queue Position
                </p>
                <p className="font-display text-4xl font-extrabold tracking-tight mt-1">
                  #{submission.queuePosition.toLocaleString()}
                </p>
                <div className="h-2 w-full bg-white/20 rounded-full mt-4 overflow-hidden">
                  <div className="h-full bg-[#D4F5E0] rounded-full w-[82%]" />
                </div>
                <p className="text-xs text-purple-100 mt-2 font-medium">
                  Market: <span className="font-bold">{submission.market}</span> • Role: <span className="font-bold capitalize">{submission.role}</span>
                </p>
              </div>

              {/* Share Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <button
                  id="inline-share-wa-btn"
                  onClick={handleShareWhatsApp}
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-all shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Share on WhatsApp
                </button>
                <button
                  id="inline-copy-link-btn"
                  onClick={copyReferral}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-bold rounded-xl text-xs transition-all cursor-pointer"
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

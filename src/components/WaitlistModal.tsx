import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Copy, Share2, Sparkles, Building, User, Users, ChevronRight, Lock, MessageCircle } from 'lucide-react';
import { WaitlistSubmission } from '../types';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: 'tenant' | 'landlord' | 'agent';
  defaultMarket?: 'Nigeria' | 'Canada' | 'Both';
}

export default function WaitlistModal({
  isOpen,
  onClose,
  defaultRole = 'tenant',
  defaultMarket = 'Nigeria',
}: WaitlistModalProps) {
  const [role, setRole] = useState<'tenant' | 'landlord' | 'agent'>(defaultRole);
  const [market, setMarket] = useState<'Nigeria' | 'Canada' | 'Both'>(defaultMarket);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submission, setSubmission] = useState<WaitlistSubmission | null>(null);
  const [copied, setCopied] = useState(false);

  // Check if user already joined on mount/open
  useEffect(() => {
    if (isOpen) {
      const saved = localStorage.getItem('maintown_waitlist_joined');
      if (saved) {
        setSubmission(JSON.parse(saved));
      } else {
        setSubmission(null);
      }
      setRole(defaultRole);
      setMarket(defaultMarket);
    }
  }, [isOpen, defaultRole, defaultMarket]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Generate realistic queue position based on hash
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
      `I just joined the waitlist for MainTown Realty! They are fixing rent in Nigeria & Canada with verified listings and safe payments. Check it out: ${refLink}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.1 }}
            id="waitlist-modal"
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto no-scrollbar text-left"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-52 h-52 bg-purple-100/70 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100/70 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!submission ? (
              <div>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
                    Priority Waitlist
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Be First In Line
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    Join the waitlist and we'll reach out on WhatsApp the moment it's your turn.
                  </p>
                </div>

                {/* Role Tabs */}
                <div className="grid grid-cols-3 p-1 bg-slate-100 rounded-xl mb-6 text-xs font-semibold">
                  <button
                    id="role-modal-tenant"
                    onClick={() => setRole('tenant')}
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg transition-all cursor-pointer ${
                      role === 'tenant' ? 'bg-white text-purple-700 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    Tenant
                  </button>
                  <button
                    id="role-modal-landlord"
                    onClick={() => setRole('landlord')}
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg transition-all cursor-pointer ${
                      role === 'landlord' ? 'bg-white text-purple-700 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Building className="w-3.5 h-3.5" />
                    Landlord
                  </button>
                  <button
                    id="role-modal-agent"
                    onClick={() => setRole('agent')}
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg transition-all cursor-pointer ${
                      role === 'agent' ? 'bg-white text-purple-700 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    Agent
                  </button>
                </div>

                {/* Form */}
                <form id="waitlist-form-element" onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="waitlist-input-name"
                      type="text"
                      required
                      placeholder="e.g. Babatunde Ogunlesi"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-slate-900 outline-none transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      WhatsApp Number or Email
                    </label>
                    <input
                      id="waitlist-input-contact"
                      type="text"
                      required
                      placeholder="e.g. +234 801 234 5678 or name@email.com"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-slate-900 outline-none transition-all text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        I am a...
                      </label>
                      <select
                        id="waitlist-select-role"
                        value={role}
                        onChange={(e) => setRole(e.target.value as any)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-slate-900 outline-none transition-all text-sm font-medium"
                      >
                        <option value="tenant">Tenant</option>
                        <option value="landlord">Landlord</option>
                        <option value="agent">Agent</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Which Market?
                      </label>
                      <select
                        id="waitlist-select-market"
                        value={market}
                        onChange={(e) => setMarket(e.target.value as any)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-slate-900 outline-none transition-all text-sm font-medium"
                      >
                        <option value="Nigeria">Nigeria (Lagos)</option>
                        <option value="Canada">Canada Relocation</option>
                        <option value="Both">Both Markets</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500">
                    <Lock className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                    <span>
                      Your info is confidential. We will notify you on WhatsApp as soon as onboarding spots open up.
                    </span>
                  </div>

                  <button
                    id="waitlist-modal-submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white font-bold rounded-xl shadow-lg shadow-purple-200 transition-all text-sm cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Securing Spot...
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        Join the Waitlist
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              /* Success Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4F5E0] text-emerald-800 mb-4 relative">
                  <Check className="w-8 h-8 text-emerald-700" />
                </div>

                <h3 className="font-display text-2xl font-extrabold text-slate-900 tracking-tight">
                  You're on the list, {submission.name.split(' ')[0]}!
                </h3>
                
                <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                  We'll message you on WhatsApp when it's your turn. In the meantime, share MainTown with 3 friends to move up the list.
                </p>

                {/* Queue Card */}
                <div className="my-5 p-5 rounded-2xl bg-purple-700 text-white shadow-lg relative overflow-hidden">
                  <p className="text-[10px] text-purple-200 font-bold uppercase tracking-wider">
                    Waitlist Queue Position
                  </p>
                  <p className="font-display text-3xl font-extrabold tracking-tight mt-1">
                    #{submission.queuePosition.toLocaleString()}
                  </p>
                  <div className="h-2 w-full bg-white/20 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-[#D4F5E0] rounded-full w-[80%]" />
                  </div>
                  <p className="text-xs text-purple-100 mt-2 flex items-center justify-center gap-1 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                    Market Selected: <span className="font-bold">{submission.market}</span>
                  </p>
                </div>

                {/* Referral Controls */}
                <div className="space-y-2.5">
                  <div className="flex gap-2">
                    <button
                      id="modal-share-wa-btn"
                      onClick={handleShareWhatsApp}
                      className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-all shadow-md cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Share on WhatsApp
                    </button>
                    <button
                      id="modal-copy-link-btn"
                      onClick={copyReferral}
                      className="flex items-center gap-1.5 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-all cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-slate-500" />
                          <span>Copy Link</span>
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    id="modal-reset-btn"
                    onClick={() => {
                      localStorage.removeItem('maintown_waitlist_joined');
                      setSubmission(null);
                    }}
                    className="text-xs text-slate-400 hover:text-slate-600 underline pt-1 cursor-pointer"
                  >
                    Submit another response
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

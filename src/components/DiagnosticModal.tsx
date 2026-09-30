'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { X, ArrowRight, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DiagnosticModal({ isOpen, onClose }: DiagnosticModalProps) {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [businessType, setBusinessType] = useState<string>('B2B / Professional Services');
  const [primaryFriction, setPrimaryFriction] = useState<string[]>([
    'Enquiries come in but drop off before sales call',
  ]);
  const [monthlyLeads, setMonthlyLeads] = useState<string>('20 - 100 enquiries / mo');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Body scroll locking & Escape key handler
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const businessTypes = [
    'B2B / Professional Services',
    'Construction & Trades',
    'Manufacturing & Industrial',
    'Real Estate & Property',
    'Healthcare & Medical',
    'High-Ticket Services & Education',
    'E-Commerce & Digital Products',
    'Local Business',
  ];

  const frictionOptions = [
    'Traffic arrives but very few people enquire (Clarity Leak)',
    'Enquiries come in but response time is slow (Response Leak)',
    'Sales team wastes time on low-quality, unfit leads (Qualification Leak)',
    'Proposals are sent but prospects vanish into radio silence (Decision Void)',
    'Past enquiries are forgotten after one unreturned message (Follow-Up Void)',
    'Ad spend is increasing while overall revenue remains flat (Acquisition Leak)',
  ];

  const toggleFriction = (option: string) => {
    if (primaryFriction.includes(option)) {
      setPrimaryFriction(primaryFriction.filter((item) => item !== option));
    } else {
      setPrimaryFriction([...primaryFriction, option]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/diagnose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone ? phone.trim() : undefined,
          businessType,
          primaryFriction,
          monthlyLeads,
          notes: notes ? notes.trim() : undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit diagnostic intake.');
      }

      setSubmitted(true);
      router.push('/thank-you');
      onClose();
    } catch (err: any) {
      console.error('Submission error:', err);
      setSubmitError(err.message || 'A network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0F1012]/80 backdrop-blur-sm overflow-y-auto"
    >
      <div className="bg-white border border-[#E6E1D6] rounded-xl max-w-2xl w-full p-6 sm:p-8 relative shadow-card my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded text-[#737887] hover:text-[#0F1012] hover:bg-[#FAF8F5] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6 space-y-2 pr-8">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#FAF8F5] border border-[#E6E1D6] text-[11px] font-mono font-bold text-[#C84B27] uppercase tracking-wider">
                DIAGNOSTIC INTAKE // STEP 0{step} OF 03
              </div>
              <h3 className="text-2xl font-bold text-[#0F1012]">
                Find Where You're Losing Revenue
              </h3>
              <p className="text-xs text-[#4A4E58]">
                No commitment. No predefined package. No pitch disguised as a diagnosis.
              </p>
            </div>

            {/* Error Message Alert */}
            {submitError && (
              <div className="mb-6 p-4 bg-[#FDF4F0] border border-[#E8D5CC] rounded text-xs font-mono text-[#C84B27] flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            {/* STEP 1: Business Type & Friction Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F1012] mb-3">
                    01. Select Your Business Domain:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {businessTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setBusinessType(type)}
                        className={`p-3 text-left rounded text-xs font-medium border transition-all ${
                          businessType === type
                            ? 'border-[#0F1012] bg-[#FAF8F5] font-bold text-[#0F1012] ring-1 ring-[#0F1012]'
                            : 'border-[#E6E1D6] bg-white text-[#4A4E58] hover:border-[#B0A894]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F1012] mb-3">
                    02. Select Primary Friction Symptoms You Notice (Select all that apply):
                  </label>
                  <div className="space-y-2">
                    {frictionOptions.map((opt) => {
                      const selected = primaryFriction.includes(opt);
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => toggleFriction(opt)}
                          className={`w-full p-3 text-left rounded text-xs border transition-all flex items-start gap-2.5 ${
                            selected
                              ? 'border-[#C84B27] bg-[#FDF4F0] font-semibold text-[#0F1012]'
                              : 'border-[#E6E1D6] bg-white text-[#4A4E58] hover:border-[#B0A894]'
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] ${
                              selected
                                ? 'border-[#C84B27] bg-[#C84B27] text-white'
                                : 'border-[#D4CDBC] bg-white'
                            }`}
                          >
                            {selected && '✓'}
                          </span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1012] hover:bg-[#C84B27] rounded transition-colors"
                  >
                    <span>Continue To Contact & Context</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Volume & Description */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F1012] mb-2">
                    Estimated Monthly Enquiries / Leads Received:
                  </label>
                  <select
                    value={monthlyLeads}
                    onChange={(e) => setMonthlyLeads(e.target.value)}
                    className="w-full p-3 border border-[#E6E1D6] rounded text-xs font-medium text-[#0F1012] bg-white focus:outline-none focus:border-[#0F1012]"
                  >
                    <option value="0 - 20 enquiries / mo">0 - 20 enquiries / month</option>
                    <option value="20 - 100 enquiries / mo">20 - 100 enquiries / month</option>
                    <option value="100 - 500 enquiries / mo">100 - 500 enquiries / month</option>
                    <option value="500+ enquiries / mo">500+ enquiries / month</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F1012] mb-2">
                    Describe What Is Happening Between Enquiry & Revenue (Optional):
                  </label>
                  <textarea
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us what you're seeing — slow follow-up, poor lead quality, lost proposals, or simply a feeling that conversion should be higher..."
                    className="w-full p-3 border border-[#E6E1D6] rounded text-xs font-medium text-[#0F1012] bg-white focus:outline-none focus:border-[#0F1012]"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#E6E1D6]">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-mono text-[#737887] hover:text-[#0F1012] uppercase tracking-wider"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1012] hover:bg-[#C84B27] rounded transition-colors"
                  >
                    <span>Proceed To Review & Direct Contact</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Contact Info & Submission */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-[#FAF8F5] p-4 rounded border border-[#E6E1D6] space-y-2 text-xs font-mono">
                  <div className="text-[#C84B27] font-bold uppercase">
                    DIAGNOSTIC SUMMARY PREVIEW:
                  </div>
                  <div className="text-[#0F1012]">
                    <span className="text-[#737887]">Domain: </span>
                    {businessType}
                  </div>
                  <div className="text-[#0F1012]">
                    <span className="text-[#737887]">Flagged Leaks: </span>
                    {primaryFriction.length} points selected
                  </div>
                  <div className="text-[#0F1012]">
                    <span className="text-[#737887]">Monthly Inflow: </span>
                    {monthlyLeads}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F1012] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Arun Kumar"
                      className="w-full p-3 border border-[#E6E1D6] rounded text-xs font-medium text-[#0F1012] bg-white focus:outline-none focus:border-[#0F1012]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F1012] mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.in"
                        className="w-full p-3 border border-[#E6E1D6] rounded text-xs font-medium text-[#0F1012] bg-white focus:outline-none focus:border-[#0F1012]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F1012] mb-1">
                        WhatsApp / Phone (Direct)
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3 text-xs font-mono font-bold text-[#737887] select-none">
                          🇮🇳 +91
                        </span>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="98765 43210"
                          className="w-full p-3 pl-16 border border-[#E6E1D6] rounded text-xs font-medium text-[#0F1012] bg-white focus:outline-none focus:border-[#0F1012]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#E6E1D6]">
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setStep(2)}
                    className="text-xs font-mono text-[#737887] hover:text-[#0F1012] uppercase tracking-wider disabled:opacity-50"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C84B27] hover:bg-[#B23E1C] rounded transition-colors shadow-subtle disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Intake...</span>
                      </>
                    ) : (
                      <>
                        <span>Start The Conversation</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Confirmed Backend Success Screen */
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#2B5246] text-[#2B5246] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-[#0F1012]">
                Diagnostic Review Confirmed
              </h3>
              <p className="text-sm text-[#4A4E58] leading-relaxed">
                Thank you, <span className="font-semibold text-[#0F1012]">{name}</span>. Your commercial intake details have been securely recorded. We will review your customer journey context and reach out directly to schedule a focused diagnostic conversation.
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded border border-[#E6E1D6] text-xs font-mono text-[#737887] max-w-md mx-auto">
              No sales pitch. No predefined package. Pure commercial clarity on where your customer journey is losing revenue.
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1012] rounded hover:bg-[#C84B27] transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

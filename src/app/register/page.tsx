'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users, User, Send, CheckCircle2, ChevronDown,
    Calendar, Mail, Phone, MapPin
} from 'lucide-react';
import PageHero from '@/components/PageHero';

type RegistrationType = 'team' | 'individual';

const AGE_GROUPS = [
    { value: 'u8', label: 'Under 8 (U-8)' },
    { value: 'u11', label: 'Under 11 (U-11)' },
    { value: 'u13', label: 'Under 13 (U-13)' },
    { value: 'u15', label: 'Under 15 (U-15)' },
    { value: 'u17', label: 'Under 17 (U-17)' },
    { value: 'u19', label: 'Under 19 (U-19)' },
];

const DIVISIONS = [
    { value: 'development', label: 'Development Division' },
    { value: 'competitive', label: 'Competitive Division' },
    { value: 'elite', label: 'Elite Division' },
];

const RegistrationTypeSelector: React.FC<{
    type: RegistrationType;
    onTypeChange: (type: RegistrationType) => void;
}> = ({ type, onTypeChange }) => (
    <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <button
            type="button"
            onClick={() => onTypeChange('team')}
            className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${type === 'team'
                ? 'border-secondary bg-secondary/10 shadow-lg'
                : 'border-gray-200 hover:border-secondary/50'
                }`}
        >
            <div className={`p-3 rounded-xl ${type === 'team' ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-600'}`}>
                <Users size={24} />
            </div>
            <div className="text-left">
                <h4 className="font-heading text-lg text-primary font-bold uppercase">Team Registration</h4>
                <p className="font-body text-sm text-primary/60">Register your entire team</p>
            </div>
        </button>
        <button
            type="button"
            onClick={() => onTypeChange('individual')}
            className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${type === 'individual'
                ? 'border-secondary bg-secondary/10 shadow-lg'
                : 'border-gray-200 hover:border-secondary/50'
                }`}
        >
            <div className={`p-3 rounded-xl ${type === 'individual' ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-600'}`}>
                <User size={24} />
            </div>
            <div className="text-left">
                <h4 className="font-heading text-lg text-primary font-bold uppercase">Individual Registration</h4>
                <p className="font-body text-sm text-primary/60">Join as a solo player</p>
            </div>
        </button>
    </div>
);

const FormField: React.FC<{
    label: string;
    required?: boolean;
    children: React.ReactNode;
}> = ({ label, required, children }) => (
    <div className="space-y-2">
        <label className="text-[10px] uppercase font-bold tracking-widest text-primary/40">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        {children}
    </div>
);

const SelectField: React.FC<{
    options: { value: string; label: string }[];
    placeholder: string;
    required?: boolean;
    value: string;
    onChange: (value: string) => void;
}> = ({ options, placeholder, required, value, onChange }) => (
    <div className="relative">
        <select
            required={required}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-bg-light border-b-2 border-primary/10 p-4 font-body focus:border-secondary outline-none transition-colors appearance-none cursor-pointer"
        >
            <option value="">{placeholder}</option>
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
        <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/40 pointer-events-none" />
    </div>
);

const TeamRegistrationForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
    const [ageGroup, setAgeGroup] = useState('');
    const [division, setDivision] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            onSuccess();
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField label="Team Name" required>
                    <input
                        required
                        type="text"
                        className="w-full bg-bg-light border-b-2 border-primary/10 p-4 font-body focus:border-secondary outline-none transition-colors"
                        placeholder="Texoma Tigers"
                    />
                </FormField>
                <FormField label="Coach / Manager Name" required>
                    <input
                        required
                        type="text"
                        className="w-full bg-bg-light border-b-2 border-primary/10 p-4 font-body focus:border-secondary outline-none transition-colors"
                        placeholder="John Smith"
                    />
                </FormField>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField label="Age Group" required>
                    <SelectField
                        options={AGE_GROUPS}
                        placeholder="Select age group"
                        required
                        value={ageGroup}
                        onChange={setAgeGroup}
                    />
                </FormField>
                <FormField label="Division" required>
                    <SelectField
                        options={DIVISIONS}
                        placeholder="Select division"
                        required
                        value={division}
                        onChange={setDivision}
                    />
                </FormField>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField label="Contact Email" required>
                    <input
                        required
                        type="email"
                        className="w-full bg-bg-light border-b-2 border-primary/10 p-4 font-body focus:border-secondary outline-none transition-colors"
                        placeholder="coach@example.com"
                    />
                </FormField>
                <FormField label="Contact Phone" required>
                    <input
                        required
                        type="tel"
                        className="w-full bg-bg-light border-b-2 border-primary/10 p-4 font-body focus:border-secondary outline-none transition-colors"
                        placeholder="(555) 123-4567"
                    />
                </FormField>
            </div>

            <FormField label="Number of Players">
                <input
                    type="number"
                    min="8"
                    max="15"
                    className="w-full bg-bg-light border-b-2 border-primary/10 p-4 font-body focus:border-secondary outline-none transition-colors"
                    placeholder="11"
                />
            </FormField>

            <FormField label="Additional Notes">
                <textarea
                    rows={3}
                    className="w-full bg-bg-light border-b-2 border-primary/10 p-4 font-body focus:border-secondary outline-none transition-colors resize-none"
                    placeholder="Any special requirements or notes..."
                />
            </FormField>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-primary text-white font-subheading font-bold tracking-[0.2em] uppercase rounded-lg hover:bg-accent transition-all shadow-lg flex items-center justify-center gap-3"
            >
                {isSubmitting ? 'Submitting...' : <><Send size={16} /> Register Team</>}
            </button>
        </form>
    );
};

const IndividualRegistrationForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
    const [ageGroup, setAgeGroup] = useState('');
    const [division, setDivision] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            onSuccess();
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField label="First Name" required>
                    <input
                        required
                        type="text"
                        className="w-full bg-bg-light border-b-2 border-primary/10 p-4 font-body focus:border-secondary outline-none transition-colors"
                        placeholder="John"
                    />
                </FormField>
                <FormField label="Last Name" required>
                    <input
                        required
                        type="text"
                        className="w-full bg-bg-light border-b-2 border-primary/10 p-4 font-body focus:border-secondary outline-none transition-colors"
                        placeholder="Doe"
                    />
                </FormField>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField label="Date of Birth" required>
                    <input
                        required
                        type="date"
                        className="w-full bg-bg-light border-b-2 border-primary/10 p-4 font-body focus:border-secondary outline-none transition-colors"
                    />
                </FormField>
                <FormField label="Age Group" required>
                    <SelectField
                        options={AGE_GROUPS}
                        placeholder="Select age group"
                        required
                        value={ageGroup}
                        onChange={setAgeGroup}
                    />
                </FormField>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField label="Division Preference" required>
                    <SelectField
                        options={DIVISIONS}
                        placeholder="Select division"
                        required
                        value={division}
                        onChange={setDivision}
                    />
                </FormField>
                <FormField label="Playing Position">
                    <SelectField
                        options={[
                            { value: 'batsman', label: 'Batsman' },
                            { value: 'bowler', label: 'Bowler' },
                            { value: 'allrounder', label: 'All-Rounder' },
                            { value: 'wicketkeeper', label: 'Wicket-Keeper' },
                        ]}
                        placeholder="Select position"
                        value=""
                        onChange={() => { }}
                    />
                </FormField>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField label="Parent/Guardian Email" required>
                    <input
                        required
                        type="email"
                        className="w-full bg-bg-light border-b-2 border-primary/10 p-4 font-body focus:border-secondary outline-none transition-colors"
                        placeholder="parent@example.com"
                    />
                </FormField>
                <FormField label="Parent/Guardian Phone" required>
                    <input
                        required
                        type="tel"
                        className="w-full bg-bg-light border-b-2 border-primary/10 p-4 font-body focus:border-secondary outline-none transition-colors"
                        placeholder="(555) 123-4567"
                    />
                </FormField>
            </div>

            <FormField label="Previous Cricket Experience">
                <textarea
                    rows={3}
                    className="w-full bg-bg-light border-b-2 border-primary/10 p-4 font-body focus:border-secondary outline-none transition-colors resize-none"
                    placeholder="Describe any previous cricket experience..."
                />
            </FormField>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-primary text-white font-subheading font-bold tracking-[0.2em] uppercase rounded-lg hover:bg-accent transition-all shadow-lg flex items-center justify-center gap-3"
            >
                {isSubmitting ? 'Submitting...' : <><Send size={16} /> Register Player</>}
            </button>
        </form>
    );
};

const SuccessMessage: React.FC<{ onReset: () => void }> = ({ onReset }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-super shadow-super border border-primary/5 text-center"
    >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
        </div>
        <h3 className="font-heading text-3xl text-primary uppercase font-bold mb-4">Registration Submitted!</h3>
        <p className="font-body text-text-dark/60 mb-4">Thank you for registering with Texoma Cricket League.</p>
        <p className="font-body text-text-dark/60 mb-8">You will receive a confirmation email shortly with further details about upcoming tournaments and next steps.</p>
        <button
            onClick={onReset}
            className="text-secondary font-bold font-subheading tracking-widest uppercase text-xs hover:text-primary transition-colors"
        >
            Submit Another Registration
        </button>
    </motion.div>
);

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; content: string; sub: string }> = ({ icon, title, content, sub }) => (
    <div className="bg-white p-6 rounded-2xl shadow-elevated border border-gray-100 flex items-start gap-4">
        <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
            {icon}
        </div>
        <div>
            <h4 className="font-heading text-sm text-primary font-bold uppercase mb-1">{title}</h4>
            <p className="font-heading text-lg text-text-dark font-medium">{content}</p>
            <p className="font-body text-xs text-text-dark/40 italic">{sub}</p>
        </div>
    </div>
);

export default function RegisterPage() {
    const [registrationType, setRegistrationType] = useState<RegistrationType>('team');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSuccess = () => setIsSuccess(true);
    const handleReset = () => setIsSuccess(false);

    return (
        <div className="bg-bg-cream min-h-screen">
            <PageHero
                title="Register"
                description="Join Texoma Cricket League and be part of youth cricket excellence in the Texoma region."
                image="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=95&w=2600"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Register', active: true }
                ]}
                align="center"
            />

            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
                    <div className="lg:w-3/5">
                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <SuccessMessage key="success" onReset={handleReset} />
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="bg-white p-10 md:p-14 rounded-super shadow-elevated border border-gray-100 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
                                    <h3 className="font-heading text-3xl text-primary font-black uppercase mb-6">
                                        {registrationType === 'team' ? 'Team Registration' : 'Player Registration'}
                                    </h3>
                                    <p className="font-body text-primary/60 mb-8">
                                        Fill out the form below to register for upcoming tournaments. All fields marked with * are required.
                                    </p>

                                    <RegistrationTypeSelector
                                        type={registrationType}
                                        onTypeChange={setRegistrationType}
                                    />

                                    {registrationType === 'team' ? (
                                        <TeamRegistrationForm onSuccess={handleSuccess} />
                                    ) : (
                                        <IndividualRegistrationForm onSuccess={handleSuccess} />
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="lg:w-2/5 space-y-6">
                        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                            <h4 className="font-heading text-xl text-primary font-bold uppercase mb-4">Registration Info</h4>
                            <ul className="space-y-3 font-body text-sm text-primary/70">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                    Team registrations require a minimum of 8 players
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                    Individual players will be placed on teams based on age group and skill level
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                    All tournaments are hosted at Sports Texoma facilities
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                    Registration confirmation will be sent via email within 24 hours
                                </li>
                            </ul>
                        </div>

                        <InfoCard
                            icon={<Calendar size={20} />}
                            title="Next Tournament"
                            content="Spring Championship 2025"
                            sub="Registration closes Feb 15"
                        />
                        <InfoCard
                            icon={<MapPin size={20} />}
                            title="Venue"
                            content="Sports Texoma"
                            sub="Pottsboro, TX 75076"
                        />
                        <InfoCard
                            icon={<Mail size={20} />}
                            title="Questions?"
                            content="info@sports-texoma.com"
                            sub="We respond within 24 hours"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

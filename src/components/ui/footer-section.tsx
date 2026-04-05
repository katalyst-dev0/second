'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { KatalystLogo } from '@/components/ui/katalyst-logo';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Services',
		links: [
			{ title: 'Our Process', href: '#process' },
			{ title: 'Global Reach', href: '#reach' },
			{ title: 'Community', href: '#community' },
			{ title: 'Feedback', href: '#feedback' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'FAQs', href: '/#faq' },
			{ title: 'About Us', href: '/#process' },
			{ title: 'Privacy Policy', href: '/privacy' },
			{ title: 'Terms of Services', href: '/terms' },
		],
	},
	{
		label: 'Resources',
		links: [
			{ title: 'Blog', href: '/blog' },
			{ title: 'Changelog', href: '/changelog' },
			{ title: 'Brand', href: '/brand' },
			{ title: 'Help', href: '/help' },
		],
	},
	{
		label: 'Social Links',
		links: [
			{ title: 'Facebook', href: '#', icon: Facebook },
			{ title: 'Instagram', href: '#', icon: Instagram },
			{ title: 'Youtube', href: '#', icon: Youtube },
			{ title: 'LinkedIn', href: '#', icon: Linkedin },
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-[48px] relative w-full max-w-7xl mx-auto flex flex-col items-center rounded-t-3xl border-t border-white/10 bg-[radial-gradient(35%_128px_at_50%_0%,rgba(207,47,47,0.15),transparent)] px-6 pt-16 pb-12 lg:pt-24 lg:pb-24">
			<div className="bg-red-500/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-12 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="flex flex-col items-center xl:items-start text-center xl:text-left">
					<div className="hidden sm:block">
						<KatalystLogo width={180} height={39} />
					</div>
					<div className="sm:hidden">
						<KatalystLogo width={140} height={30} />
					</div>
					<p className="text-gray-400 mt-6 text-xs sm:text-sm max-w-xs">
						Building high-performance marketing systems that scale with your ambitions.
					</p>
				</AnimatedContainer>

				<div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-8 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
								<h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">{section.label}</h3>
								<ul className="text-gray-400 space-y-3 text-sm flex flex-col items-center md:items-start">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-white inline-flex items-center transition-all duration-300"
											>
												{link.icon && <link.icon className="me-2 size-4" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>

			{/* Bottom Copyright Section */}
			<div className="w-full mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
				<p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest">
					© {new Date().getFullYear()} Katalyst Marketing. All rights reserved.
				</p>
				<div className="flex gap-6">
					<a href="#" className="text-gray-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Privacy</a>
					<a href="#" className="text-gray-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Terms</a>
				</div>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	const variants: Variants = {
		initial: { filter: 'blur(4px)', translateY: -8, opacity: 0 },
		whileInView: { filter: 'blur(0px)', translateY: 0, opacity: 1 },
	};

	return (
		<motion.div
			initial="initial"
			whileInView="whileInView"
			variants={variants}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};

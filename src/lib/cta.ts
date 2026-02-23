export const BOOKING_URL =
	import.meta.env.PUBLIC_BOOKING_URL ??
	import.meta.env.PUBLIC_CALENDLY_URL ??
	'/#contact';

export function isExternalUrl(url: string) {
	return /^https?:\/\//i.test(url);
}

export function isCalendlyUrl(url: string) {
	return /calendly\.com/i.test(url);
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzdakggg';

export function getFormspreeAction() {
	const raw = import.meta.env.PUBLIC_FORMSPREE_ACTION ?? '';
	if (raw && !raw.includes('yourFormId')) return raw;
	return FORMSPREE_ENDPOINT;
}

export type CTAContext = 'aec' | 'design' | 'marketing' | 'role' | 'general';

/** Returns the primary CTA button label for a given page context. */
export function getCTAText(context: CTAContext, role?: string): string {
	switch (context) {
		case 'aec':
			return 'Book an AEC Talent Call';
		case 'design':
			return 'Book a Design Team Call';
		case 'marketing':
			return 'Book a Marketing Scoping Call';
		case 'role':
			return role ? `Hire a ${role} — Book a Call` : 'Book a Scoping Call';
		default:
			return 'Book a 30-Minute Scoping Call';
	}
}

/** Returns the secondary / inline CTA label (form open trigger). */
export function getSecondaryCTAText(context: CTAContext): string {
	switch (context) {
		case 'aec':
			return 'Tell Us Your AEC Needs';
		case 'design':
			return 'Tell Us Your Design Needs';
		case 'marketing':
			return 'Tell Us Your Marketing Needs';
		default:
			return 'Tell Us What You Need';
	}
}

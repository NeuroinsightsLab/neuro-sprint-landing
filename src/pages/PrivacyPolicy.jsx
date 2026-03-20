import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Cookie } from "lucide-react";
import { clearConsent } from "@/lib/cookieConsent";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 max-w-3xl">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="font-display text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-10">Last updated: March 2026</p>

        <div className="space-y-10 text-sm leading-relaxed">

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">1. Data Controller</h2>
            <p>
              Decoder Agency S.L. ("Decoder", "we", "us") is the data controller responsible for
              your personal data. Contact:{" "}
              <a href="mailto:hello@decoder.digital" className="text-primary underline underline-offset-2">
                hello@decoder.digital
              </a>{" "}
              · Barcelona, España.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">2. What Data We Collect</h2>
            <p className="mb-2">When you submit the contact form we collect:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Full name</li>
              <li>Email address</li>
              <li>Company name (optional)</li>
              <li>Message content</li>
            </ul>
            <p className="mt-2">
              We do not collect sensitive personal data, payment data, or data from minors under 16.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">3. Legal Basis for Processing</h2>
            <p>
              We process your data on the basis of your explicit consent (Art. 6(1)(a) GDPR), given
              when you tick the consent checkbox and submit the form. You may withdraw consent at any
              time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">4. How We Use Your Data</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>To respond to your proposal or enquiry</li>
              <li>To send you information about our services if requested</li>
              <li>We do not use your data for automated decision-making or profiling</li>
              <li>We do not sell or share your data with third parties for marketing purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">5. Data Processors</h2>
            <p className="mb-2">We use the following sub-processors to handle form submissions:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>
                <strong className="text-foreground">Formspree Inc.</strong> — form submission
                processing (USA, covered by Standard Contractual Clauses)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">6. Data Retention</h2>
            <p>
              We retain your data for no longer than 12 months from the date of submission, unless a
              longer period is required by law or to fulfil a contract.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">7. Your Rights (GDPR)</h2>
            <p className="mb-2">Under the GDPR you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><strong className="text-foreground">Access</strong> — request a copy of your data</li>
              <li><strong className="text-foreground">Rectification</strong> — correct inaccurate data</li>
              <li><strong className="text-foreground">Erasure</strong> — request deletion ("right to be forgotten")</li>
              <li><strong className="text-foreground">Restriction</strong> — limit how we process your data</li>
              <li><strong className="text-foreground">Portability</strong> — receive your data in a machine-readable format</li>
              <li><strong className="text-foreground">Withdraw consent</strong> — at any time without affecting prior processing</li>
              <li><strong className="text-foreground">Lodge a complaint</strong> — with the Spanish Data Protection Agency (AEPD) at{" "}
                <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">
                  aepd.es
                </a>
              </li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, email{" "}
              <a href="mailto:hello@decoder.digital" className="text-primary underline underline-offset-2">
                hello@decoder.digital
              </a>{" "}
              with the subject "GDPR Request".
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">8. Cookies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies on this website. A cookie is a small
              text file stored in your browser. We request your consent before placing any
              non-essential cookies (Art. 5(3) ePrivacy Directive + GDPR Art. 6(1)(a)).
            </p>

            <h3 className="font-semibold text-base mb-2">8.1 Necessary cookies</h3>
            <p className="mb-3 text-muted-foreground">
              These are required for the website to function and cannot be disabled.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-xs border border-border rounded-lg overflow-hidden">
                <thead className="bg-secondary text-foreground">
                  <tr>
                    <th className="text-left px-3 py-2 font-semibold">Cookie</th>
                    <th className="text-left px-3 py-2 font-semibold">Purpose</th>
                    <th className="text-left px-3 py-2 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-t border-border">
                    <td className="px-3 py-2 font-mono">decoder_cookie_consent</td>
                    <td className="px-3 py-2">Stores your cookie consent preferences</td>
                    <td className="px-3 py-2">12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-semibold text-base mb-2">8.2 Analytics cookies <span className="text-xs font-normal text-muted-foreground">(consent required)</span></h3>
            <p className="mb-3 text-muted-foreground">
              Help us understand how visitors interact with the site. Only placed with your consent.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-xs border border-border rounded-lg overflow-hidden">
                <thead className="bg-secondary text-foreground">
                  <tr>
                    <th className="text-left px-3 py-2 font-semibold">Cookie</th>
                    <th className="text-left px-3 py-2 font-semibold">Provider</th>
                    <th className="text-left px-3 py-2 font-semibold">Purpose</th>
                    <th className="text-left px-3 py-2 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-t border-border">
                    <td className="px-3 py-2 font-mono">_ga</td>
                    <td className="px-3 py-2">Google Analytics</td>
                    <td className="px-3 py-2">Distinguishes unique users</td>
                    <td className="px-3 py-2">2 years</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-3 py-2 font-mono">_gid</td>
                    <td className="px-3 py-2">Google Analytics</td>
                    <td className="px-3 py-2">Distinguishes users (session)</td>
                    <td className="px-3 py-2">24 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-semibold text-base mb-2">8.3 Marketing cookies <span className="text-xs font-normal text-muted-foreground">(consent required)</span></h3>
            <p className="mb-3 text-muted-foreground">
              Used to track visits across sites and show relevant ads. Only placed with your consent.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-xs border border-border rounded-lg overflow-hidden">
                <thead className="bg-secondary text-foreground">
                  <tr>
                    <th className="text-left px-3 py-2 font-semibold">Cookie</th>
                    <th className="text-left px-3 py-2 font-semibold">Provider</th>
                    <th className="text-left px-3 py-2 font-semibold">Purpose</th>
                    <th className="text-left px-3 py-2 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-t border-border">
                    <td className="px-3 py-2 font-mono">_fbp</td>
                    <td className="px-3 py-2">Meta (Facebook)</td>
                    <td className="px-3 py-2">Ad conversion tracking</td>
                    <td className="px-3 py-2">3 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary border border-border">
              <Cookie className="w-4 h-4 text-primary shrink-0" />
              <p className="text-xs text-muted-foreground">
                You can change or withdraw your cookie consent at any time using the{" "}
                <button
                  onClick={() => { clearConsent(); navigate("/"); }}
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  Cookie Settings
                </button>{" "}
                link in the footer.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. The latest version is always available at
              this URL. Material changes will be notified by email if we hold your contact details.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">10. Contact</h2>
            <p>
              Questions about this policy?{" "}
              <a href="mailto:hello@decoder.digital" className="text-primary underline underline-offset-2">
                hello@decoder.digital
              </a>
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-border text-xs text-muted-foreground">
          © {new Date().getFullYear()} Decoder Agency S.L. All rights reserved.
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;

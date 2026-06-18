export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-8">
        Privacy Policy
      </h1>

      <div className="space-y-6 text-slate-1000 leading-8">
        <p>
          We respect your privacy and are committed to
          protecting your personal information.
        </p>

        <h2 className="text-2xl font-semibold">
          Information We Collect
        </h2>

        <p>
          We may collect information you voluntarily
          provide through contact forms or newsletter
          subscriptions.
        </p>

        <h2 className="text-2xl font-semibold">
          Cookies
        </h2>

        <p>
          This website may use cookies to improve user
          experience and analyze website traffic.
        </p>

        <h2 className="text-2xl font-semibold">
          Third-Party Services
        </h2>

        <p>
          We may use third-party services such as Google
          Analytics and Google AdSense.
        </p>

        <h2 className="text-2xl font-semibold">
          Contact
        </h2>

        <p>
          If you have questions regarding this policy,
          please contact us through our Contact page.
        </p>
      </div>
    </main>
  );
}
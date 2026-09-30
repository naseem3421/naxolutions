import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col items-center justify-center p-6 text-center">
      <span className="text-xs font-mono font-bold text-[#C84B27] uppercase tracking-widest mb-2">
        404 // ROUTE NOT FOUND
      </span>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        This path does not exist in the conversion journey.
      </h1>
      <p className="text-sm text-[#4A4E58] mb-6 max-w-md">
        Return to the main page to diagnose your customer-to-revenue conversion system.
      </p>
      <Link
        href="/"
        className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1012] rounded hover:bg-[#C84B27] transition-colors"
      >
        Return To Main Diagnosis Page
      </Link>
    </div>
  );
}

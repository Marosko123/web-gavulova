"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PortfolioPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to main page with portfolio hash
    router.replace('/#portfolio');
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500 mx-auto mb-4"></div>
        <p className="text-white">Presmerovávam...</p>
      </div>
    </div>
  );
}

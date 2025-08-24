import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl lg:text-8xl font-heading font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-white mb-4">
            Stránka nenájdená
          </h2>
          <p className="text-lg text-white/70 max-w-md mx-auto">
            Stránka, ktorú hľadáte, neexistuje alebo bola premiestnená.
          </p>
        </div>
        
        <Link href="/">
          <Button size="lg">
            Späť domov
          </Button>
        </Link>
      </div>
    </div>
  );
}

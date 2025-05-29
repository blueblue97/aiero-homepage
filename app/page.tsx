import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        <Image
          src="/aiero_logo.png"
          alt="AIero Logo"
          width={200}
          height={200}
          className="mx-auto"
        />
        <h1 className="text-5xl font-bold">AIero</h1>
        <p className="text-xl text-gray-300">
          Autonomous Conflict Detection for the Skies
        </p>
        <Button asChild className="text-lg px-6 py-4 bg-blue-600 hover:bg-blue-700">
          <a href="https://aiero-conflict-detector-ef4vi8au2h35fgfcaebcuq.streamlit.app/" target="_blank">
            Launch Conflict Detector <ArrowRight className="inline ml-2" />
          </a>
        </Button>
        <Card className="bg-gray-900 border-gray-700 mt-8">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-gray-400">
              AIero empowers airspace safety with AI-driven detection and visualization. We help defense, commercial, and aerospace partners identify in-flight conflicts faster and more reliably.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
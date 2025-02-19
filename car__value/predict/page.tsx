"use client"

import { useState } from "react"
import { BackButton } from "@/components/back-button"
import { PredictionForm } from "@/components/prediction-form"
import { PredictionResult } from "@/components/prediction-result"
import { MarketInsights } from "@/components/market-insights"
import { RecommendedCars } from "@/components/recommended-cars"
import { AIAssistant } from "@/components/ai-assistant"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function PredictPage() {
  const [predictionResult, setPredictionResult] = useState<any>(null)
  const [showInsights, setShowInsights] = useState(false)
  const { theme, setTheme } = useTheme()

  const handlePrediction = (result: any) => {
    setPredictionResult(result)
    setShowInsights(true)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <BackButton />
          <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>

        <h1 className="text-3xl font-bold mb-8 text-center">Predict Your Car's Value</h1>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <PredictionForm onPrediction={handlePrediction} />
            <AIAssistant />
          </div>

          {predictionResult && (
            <div className="space-y-8">
              <PredictionResult result={predictionResult} />
              {showInsights && (
                <>
                  <MarketInsights carDetails={predictionResult.carDetails} />
                  <RecommendedCars category={predictionResult.category} />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


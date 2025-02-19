"use client"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { CarCarousel } from "@/components/car-carousel"
import { PredictPriceSection } from "@/components/predict-price-section"
import { PromisesSection } from "@/components/promises-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userDetails, setUserDetails] = useState<{
    name: string
    email: string
    phone?: string
    address?: string
  } | null>(null)

  const handleLogin = (name: string, email: string, phone?: string, address?: string) => {
    setIsLoggedIn(true)
    setUserDetails({ name, email, phone, address })
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserDetails(null)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar isLoggedIn={isLoggedIn} userDetails={userDetails} onLogout={handleLogout} onLogin={handleLogin} />
      <main>
        <HeroSection />
        <MissionSection />
        <CarCarousel />
        <PredictPriceSection />
        <PromisesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}


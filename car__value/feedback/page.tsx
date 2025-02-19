"use client"

import { BackButton } from "@/components/back-button"
import { TestimonialForm } from "@/components/testimonial-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeedbackPage() {
  const handleSubmit = (testimonial: any) => {
    // Here you would typically send the feedback to your backend
    console.log("Feedback submitted:", testimonial)
    // You could also show a success message or redirect the user
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container px-4 py-8">
        <BackButton />
        <h1 className="text-3xl font-bold mb-8">Feedback</h1>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>Share Your Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <TestimonialForm onSubmit={handleSubmit} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


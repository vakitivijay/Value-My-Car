import { BackButton } from "@/components/back-button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <main className="container mx-auto px-4 py-16">
        <BackButton />
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-white">About Value My Car</h1>
            <p className="text-xl text-gray-400">
              Your trusted partner in used car price prediction
            </p>
          </div>

          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white text-center">Our Mission</h2>
              <p className="text-gray-400 text-center">
                At Value My Car, we're revolutionizing the way people value their used cars. 
                Using cutting-edge machine learning algorithms and real-time market data, 
                we provide accurate and reliable car price predictions that help both buyers 
                and sellers make informed decisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white text-center">How It Works</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="p-6 bg-gray-800 rounded-lg text-center">
                  <h3 className="font-semibold text-white mb-2">Data Collection</h3>
                  <p className="text-gray-400">
                    We analyze millions of car listings and transactions to build our 
                    prediction models.
                  </p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg text-center">
                  <h3 className="font-semibold text-white mb-2">AI Processing</h3>
                  <p className="text-gray-400">
                    Our AI models consider multiple factors including make, model, year, 
                    mileage, and market trends.
                  </p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg text-center">
                  <h3 className="font-semibold text-white mb-2">Instant Results</h3>
                  <p className="text-gray-400">
                    Get accurate price predictions in seconds, helping you make better 
                    decisions.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white text-center">Why Choose Us</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-400 text-center">
                <li>Advanced AI-powered price prediction</li>
                <li>Real-time market data analysis</li>
                <li>Real-time market data analysis</li>
                <li>Comprehensive vehicle history consideration</li>
                <li>User-friendly interface</li>
                <li>Free instant valuations</li>
                <li>Expert support team</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}


'use client'

import { BackButton } from "@/components/back-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts'

const priceData = [
  { month: 'Jan', price: 15000 },
  { month: 'Feb', price: 15200 },
  { month: 'Mar', price: 15400 },
  { month: 'Apr', price: 15100 },
  { month: 'May', price: 15600 },
  { month: 'Jun', price: 15800 },
]

const demandData = [
  { brand: 'Toyota', searches: 1200 },
  { brand: 'Honda', searches: 980 },
  { brand: 'BMW', searches: 850 },
  { brand: 'Mercedes', searches: 780 },
  { brand: 'Audi', searches: 720 },
]

const fuelTypeData = [
  { name: 'Petrol', value: 45 },
  { name: 'Diesel', value: 30 },
  { name: 'Hybrid', value: 15 },
  { name: 'Electric', value: 10 },
]

const COLORS = ['#ef4444', '#f97316', '#84cc16', '#06b6d4']

export default function MarketInsightsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container px-4 py-8">
        <div className="mb-8">
          <BackButton />
          <h1 className="text-4xl font-bold mt-4">Market Insights</h1>
          <p className="text-gray-400 mt-2">Comprehensive analysis of the used car market</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Price Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Line type="monotone" dataKey="price" stroke="#ef4444" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Most Searched Brands</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={demandData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="brand" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Bar dataKey="searches" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Fuel Type Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={fuelTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {fuelTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
                      labelStyle={{ color: '#fff' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Add more insight cards here */}
        </div>
      </div>
    </div>
  )
}


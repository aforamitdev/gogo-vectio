import React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { DollarSign, Fuel, User } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Mock data for trip costs
const tripCosts = [
  {
    id: 'TRIP001',
    vehicle: 'Truck-001',
    fuelCost: 150.75,
    driverCost: 120.0,
    totalCost: 270.75,
    distance: 180,
    duration: '4h 30m',
  },
  {
    id: 'TRIP002',
    vehicle: 'Truck-002',
    fuelCost: 180.5,
    driverCost: 95.0,
    totalCost: 275.5,
    distance: 220,
    duration: '3h 45m',
  },
  {
    id: 'TRIP003',
    vehicle: 'Truck-003',
    fuelCost: 90.25,
    driverCost: 60.0,
    totalCost: 150.25,
    distance: 120,
    duration: '2h 15m',
  },
]

const chartData = tripCosts.map((trip) => ({
  name: trip.vehicle,
  fuel: trip.fuelCost,
  driver: trip.driverCost,
  total: trip.totalCost,
}))

export function TripCosts() {
  const totalFuelCost = tripCosts.reduce((sum, trip) => sum + trip.fuelCost, 0)
  const totalDriverCost = tripCosts.reduce(
    (sum, trip) => sum + trip.driverCost,
    0,
  )
  const totalCost = tripCosts.reduce((sum, trip) => sum + trip.totalCost, 0)

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Fuel Cost
            </CardTitle>
            <Fuel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalFuelCost.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              Across all active trips
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Driver Cost
            </CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalDriverCost.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">Driver compensation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cost</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalCost.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Combined expenses</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Cost Breakdown by Trip</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="fuel" name="Fuel Cost" fill="#8884d8" />
                <Bar dataKey="driver" name="Driver Cost" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

import React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Clock, DollarSign, Star, Truck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Mock data for driver stats
const driverStats = [
  {
    id: 'DRV001',
    name: 'John Doe',
    totalHours: 1240,
    totalEarnings: 43400,
    averageRating: 4.8,
    completedTrips: 156,
    monthlyHours: [180, 165, 190, 175, 185, 170],
    monthlyEarnings: [6300, 5775, 6650, 6125, 6475, 5950],
  },
  {
    id: 'DRV002',
    name: 'Jane Smith',
    totalHours: 980,
    totalEarnings: 31850,
    averageRating: 4.9,
    completedTrips: 98,
    monthlyHours: [160, 155, 170, 165, 175, 155],
    monthlyEarnings: [5200, 5037.5, 5525, 5362.5, 5687.5, 5037.5],
  },
  {
    id: 'DRV003',
    name: 'Mike Johnson',
    totalHours: 1860,
    totalEarnings: 70680,
    averageRating: 4.7,
    completedTrips: 243,
    monthlyHours: [190, 185, 195, 190, 200, 185],
    monthlyEarnings: [7220, 7030, 7410, 7220, 7600, 7030],
  },
]

const monthlyData = [
  { month: 'Jan', hours: 180, earnings: 6300 },
  { month: 'Feb', hours: 165, earnings: 5775 },
  { month: 'Mar', hours: 190, earnings: 6650 },
  { month: 'Apr', hours: 175, earnings: 6125 },
  { month: 'May', hours: 185, earnings: 6475 },
  { month: 'Jun', hours: 170, earnings: 5950 },
]

export function DriverStats() {
  const totalHours = driverStats.reduce(
    (sum, driver) => sum + driver.totalHours,
    0,
  )
  const totalEarnings = driverStats.reduce(
    (sum, driver) => sum + driver.totalEarnings,
    0,
  )
  const averageRating =
    driverStats.reduce((sum, driver) => sum + driver.averageRating, 0) /
    driverStats.length
  const totalTrips = driverStats.reduce(
    (sum, driver) => sum + driver.completedTrips,
    0,
  )

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalHours}</div>
            <p className="text-xs text-muted-foreground">Across all drivers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Earnings
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalEarnings.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Combined earnings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Rating
            </CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {averageRating.toFixed(1)}/5.0
            </div>
            <p className="text-xs text-muted-foreground">Overall rating</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Trips</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalTrips}</div>
            <p className="text-xs text-muted-foreground">Completed trips</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="hours" name="Hours" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="earnings"
                    name="Earnings"
                    stroke="#82ca9d"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Driver Performance Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={driverStats}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="completedTrips"
                  name="Completed Trips"
                  fill="#8884d8"
                />
                <Bar
                  dataKey="averageRating"
                  name="Average Rating"
                  fill="#82ca9d"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

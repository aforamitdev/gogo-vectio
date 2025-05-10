import React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { DollarSign, Fuel, Receipt, User } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Mock data for cost breakdown
const costBreakdown = [
  {
    id: 'TRIP001',
    vehicle: 'Truck-001',
    route: 'NYC → Boston',
    driverCost: 120.0,
    fuelCost: 150.75,
    roadTax: 45.0,
    maintenance: 35.0,
    other: 25.0,
    total: 375.75,
  },
  {
    id: 'TRIP002',
    vehicle: 'Truck-002',
    route: 'LA → SF',
    driverCost: 95.0,
    fuelCost: 180.5,
    roadTax: 55.0,
    maintenance: 40.0,
    other: 30.0,
    total: 400.5,
  },
  {
    id: 'TRIP003',
    vehicle: 'Truck-003',
    route: 'Chicago → Detroit',
    driverCost: 60.0,
    fuelCost: 90.25,
    roadTax: 30.0,
    maintenance: 25.0,
    other: 15.0,
    total: 220.25,
  },
]

const chartData = costBreakdown.map((trip) => ({
  name: trip.vehicle,
  driver: trip.driverCost,
  fuel: trip.fuelCost,
  roadTax: trip.roadTax,
  maintenance: trip.maintenance,
  other: trip.other,
}))

export function CostBreakdown() {
  const totalDriverCost = costBreakdown.reduce(
    (sum, trip) => sum + trip.driverCost,
    0,
  )
  const totalFuelCost = costBreakdown.reduce(
    (sum, trip) => sum + trip.fuelCost,
    0,
  )
  const totalRoadTax = costBreakdown.reduce(
    (sum, trip) => sum + trip.roadTax,
    0,
  )
  const totalMaintenance = costBreakdown.reduce(
    (sum, trip) => sum + trip.maintenance,
    0,
  )
  const totalOther = costBreakdown.reduce((sum, trip) => sum + trip.other, 0)
  const grandTotal = costBreakdown.reduce((sum, trip) => sum + trip.total, 0)

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Driver Costs</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalDriverCost.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              {((totalDriverCost / grandTotal) * 100).toFixed(1)}% of total
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fuel Costs</CardTitle>
            <Fuel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalFuelCost.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              {((totalFuelCost / grandTotal) * 100).toFixed(1)}% of total
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Road Tax</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRoadTax.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              {((totalRoadTax / grandTotal) * 100).toFixed(1)}% of total
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cost Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="driver" name="Driver Cost" fill="#8884d8" />
                <Bar dataKey="fuel" name="Fuel Cost" fill="#82ca9d" />
                <Bar dataKey="roadTax" name="Road Tax" fill="#ffc658" />
                <Bar dataKey="maintenance" name="Maintenance" fill="#ff8042" />
                <Bar dataKey="other" name="Other" fill="#a4de6c" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Detailed Cost Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Trip ID</TableHead>
                <TableHead>Vehicle</TableHead>
                <TableHead>Route</TableHead>
                <TableHead>Driver Cost</TableHead>
                <TableHead>Fuel Cost</TableHead>
                <TableHead>Road Tax</TableHead>
                <TableHead>Maintenance</TableHead>
                <TableHead>Other</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {costBreakdown.map((trip) => (
                <TableRow key={trip.id}>
                  <TableCell>{trip.id}</TableCell>
                  <TableCell>{trip.vehicle}</TableCell>
                  <TableCell>{trip.route}</TableCell>
                  <TableCell>${trip.driverCost.toFixed(2)}</TableCell>
                  <TableCell>${trip.fuelCost.toFixed(2)}</TableCell>
                  <TableCell>${trip.roadTax.toFixed(2)}</TableCell>
                  <TableCell>${trip.maintenance.toFixed(2)}</TableCell>
                  <TableCell>${trip.other.toFixed(2)}</TableCell>
                  <TableCell className="font-bold">
                    ${trip.total.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="font-bold">
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell>${totalDriverCost.toFixed(2)}</TableCell>
                <TableCell>${totalFuelCost.toFixed(2)}</TableCell>
                <TableCell>${totalRoadTax.toFixed(2)}</TableCell>
                <TableCell>${totalMaintenance.toFixed(2)}</TableCell>
                <TableCell>${totalOther.toFixed(2)}</TableCell>
                <TableCell>${grandTotal.toFixed(2)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

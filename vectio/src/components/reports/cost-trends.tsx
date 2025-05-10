import React from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Mock data for cost trends
const monthlyTrends = [
  {
    month: 'Jan',
    driverCost: 2500,
    fuelCost: 3200,
    roadTax: 800,
    maintenance: 600,
    other: 400,
  },
  {
    month: 'Feb',
    driverCost: 2800,
    fuelCost: 3500,
    roadTax: 850,
    maintenance: 650,
    other: 450,
  },
  {
    month: 'Mar',
    driverCost: 2600,
    fuelCost: 3300,
    roadTax: 820,
    maintenance: 620,
    other: 420,
  },
  {
    month: 'Apr',
    driverCost: 2900,
    fuelCost: 3600,
    roadTax: 880,
    maintenance: 680,
    other: 480,
  },
  {
    month: 'May',
    driverCost: 2700,
    fuelCost: 3400,
    roadTax: 840,
    maintenance: 640,
    other: 440,
  },
  {
    month: 'Jun',
    driverCost: 3000,
    fuelCost: 3800,
    roadTax: 900,
    maintenance: 700,
    other: 500,
  },
]

const weeklyTrends = [
  {
    week: 'Week 1',
    driverCost: 650,
    fuelCost: 820,
    roadTax: 200,
    maintenance: 150,
    other: 100,
  },
  {
    week: 'Week 2',
    driverCost: 680,
    fuelCost: 850,
    roadTax: 210,
    maintenance: 160,
    other: 110,
  },
  {
    week: 'Week 3',
    driverCost: 720,
    fuelCost: 900,
    roadTax: 220,
    maintenance: 170,
    other: 120,
  },
  {
    week: 'Week 4',
    driverCost: 700,
    fuelCost: 880,
    roadTax: 215,
    maintenance: 165,
    other: 115,
  },
]

export function CostTrends() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="monthly" className="space-y-4">
        <TabsList>
          <TabsTrigger value="monthly">Monthly Trends</TabsTrigger>
          <TabsTrigger value="weekly">Weekly Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Cost Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="driverCost"
                      name="Driver Cost"
                      stackId="1"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                    <Area
                      type="monotone"
                      dataKey="fuelCost"
                      name="Fuel Cost"
                      stackId="1"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                    />
                    <Area
                      type="monotone"
                      dataKey="roadTax"
                      name="Road Tax"
                      stackId="1"
                      stroke="#ffc658"
                      fill="#ffc658"
                    />
                    <Area
                      type="monotone"
                      dataKey="maintenance"
                      name="Maintenance"
                      stackId="1"
                      stroke="#ff8042"
                      fill="#ff8042"
                    />
                    <Area
                      type="monotone"
                      dataKey="other"
                      name="Other"
                      stackId="1"
                      stroke="#a4de6c"
                      fill="#a4de6c"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="weekly">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Cost Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="driverCost"
                      name="Driver Cost"
                      stroke="#8884d8"
                    />
                    <Line
                      type="monotone"
                      dataKey="fuelCost"
                      name="Fuel Cost"
                      stroke="#82ca9d"
                    />
                    <Line
                      type="monotone"
                      dataKey="roadTax"
                      name="Road Tax"
                      stroke="#ffc658"
                    />
                    <Line
                      type="monotone"
                      dataKey="maintenance"
                      name="Maintenance"
                      stroke="#ff8042"
                    />
                    <Line
                      type="monotone"
                      dataKey="other"
                      name="Other"
                      stroke="#a4de6c"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

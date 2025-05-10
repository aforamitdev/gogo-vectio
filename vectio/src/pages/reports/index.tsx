import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CostBreakdown } from '@/components/reports/cost-breakdown'
import { TripComparison } from '@/components/reports/trip-comparison'
import { CostTrends } from '@/components/reports/cost-trends'

const ReportsPage = () => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Cost Reports</h2>
      </div>
      <Tabs defaultValue="breakdown" className="space-y-4">
        <TabsList>
          <TabsTrigger value="breakdown">Cost Breakdown</TabsTrigger>
          <TabsTrigger value="comparison">Trip Comparison</TabsTrigger>
          <TabsTrigger value="trends">Cost Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="breakdown" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Cost Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <CostBreakdown />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="comparison" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trip Cost Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <TripComparison />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cost Trends Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <CostTrends />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ReportsPage

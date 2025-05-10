import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ActiveTrips } from '@/components/trips/active-trips'
import { TripMap } from '@/components/trips/trip-map'
import { TripCosts } from '@/components/trips/trip-costs'

const TripsPage = () => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Trips Management</h2>
      </div>
      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Trips</TabsTrigger>
          <TabsTrigger value="map">Live Map</TabsTrigger>
          <TabsTrigger value="costs">Trip Costs</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Trips</CardTitle>
            </CardHeader>
            <CardContent>
              <ActiveTrips />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="map" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Live Vehicle Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <TripMap />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="costs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trip Costs Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <TripCosts />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default TripsPage

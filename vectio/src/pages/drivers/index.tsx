import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DriverList } from '@/components/drivers/driver-list'
import { DriverStats } from '@/components/drivers/driver-stats'
import { DriverSchedule } from '@/components/drivers/driver-schedule'

const DriversPage = () => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Drivers Management
        </h2>
      </div>
      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">Driver List</TabsTrigger>
          <TabsTrigger value="stats">Driver Stats</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>
        <TabsContent value="list" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Drivers</CardTitle>
            </CardHeader>
            <CardContent>
              <DriverList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="stats" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Driver Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <DriverStats />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Driver Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <DriverSchedule />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default DriversPage

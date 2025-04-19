"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
const chartData = [
	{ date: "2024-04-01", trips: 222, revenue: 150 },
	{ date: "2024-04-02", trips: 97, revenue: 180 },
	{ date: "2024-04-03", trips: 167, revenue: 120 },
	{ date: "2024-04-04", trips: 242, revenue: 260 },
	{ date: "2024-04-05", trips: 373, revenue: 290 },
	{ date: "2024-04-06", trips: 301, revenue: 340 },
	{ date: "2024-04-07", trips: 245, revenue: 180 },
	{ date: "2024-04-08", trips: 409, revenue: 320 },
	{ date: "2024-04-09", trips: 59, revenue: 110 },
	{ date: "2024-04-10", trips: 261, revenue: 190 },
	{ date: "2024-04-11", trips: 327, revenue: 350 },
	{ date: "2024-04-12", trips: 292, revenue: 210 },
	{ date: "2024-04-13", trips: 342, revenue: 380 },
	{ date: "2024-04-14", trips: 137, revenue: 220 },
	{ date: "2024-04-15", trips: 120, revenue: 170 },
	{ date: "2024-04-16", trips: 138, revenue: 190 },
	{ date: "2024-04-17", trips: 446, revenue: 360 },
	{ date: "2024-04-18", trips: 364, revenue: 410 },
	{ date: "2024-04-19", trips: 243, revenue: 180 },
	{ date: "2024-04-20", trips: 89, revenue: 150 },
	{ date: "2024-04-21", trips: 137, revenue: 200 },
	{ date: "2024-04-22", trips: 224, revenue: 170 },
	{ date: "2024-04-23", trips: 138, revenue: 230 },
	{ date: "2024-04-24", trips: 387, revenue: 290 },
	{ date: "2024-04-25", trips: 215, revenue: 250 },
	{ date: "2024-04-26", trips: 75, revenue: 130 },
	{ date: "2024-04-27", trips: 383, revenue: 420 },
	{ date: "2024-04-28", trips: 122, revenue: 180 },
	{ date: "2024-04-29", trips: 315, revenue: 240 },
	{ date: "2024-04-30", trips: 454, revenue: 380 },
	{ date: "2024-05-01", trips: 165, revenue: 220 },
	{ date: "2024-05-02", trips: 293, revenue: 310 },
	{ date: "2024-05-03", trips: 247, revenue: 190 },
	{ date: "2024-05-04", trips: 385, revenue: 420 },
	{ date: "2024-05-05", trips: 481, revenue: 390 },
	{ date: "2024-05-06", trips: 498, revenue: 520 },
	{ date: "2024-05-07", trips: 388, revenue: 300 },
	{ date: "2024-05-08", trips: 149, revenue: 210 },
	{ date: "2024-05-09", trips: 227, revenue: 180 },
	{ date: "2024-05-10", trips: 293, revenue: 330 },
	{ date: "2024-05-11", trips: 335, revenue: 270 },
	{ date: "2024-05-12", trips: 197, revenue: 240 },
	{ date: "2024-05-13", trips: 197, revenue: 160 },
	{ date: "2024-05-14", trips: 448, revenue: 490 },
	{ date: "2024-05-15", trips: 473, revenue: 380 },
	{ date: "2024-05-16", trips: 338, revenue: 400 },
	{ date: "2024-05-17", trips: 499, revenue: 420 },
	{ date: "2024-05-18", trips: 315, revenue: 350 },
	{ date: "2024-05-19", trips: 235, revenue: 180 },
	{ date: "2024-05-20", trips: 177, revenue: 230 },
	{ date: "2024-05-21", trips: 82, revenue: 140 },
	{ date: "2024-05-22", trips: 81, revenue: 120 },
	{ date: "2024-05-23", trips: 252, revenue: 290 },
	{ date: "2024-05-24", trips: 294, revenue: 220 },
	{ date: "2024-05-25", trips: 201, revenue: 250 },
	{ date: "2024-05-26", trips: 213, revenue: 170 },
	{ date: "2024-05-27", trips: 420, revenue: 460 },
	{ date: "2024-05-28", trips: 233, revenue: 190 },
	{ date: "2024-05-29", trips: 78, revenue: 130 },
	{ date: "2024-05-30", trips: 340, revenue: 280 },
	{ date: "2024-05-31", trips: 178, revenue: 230 },
	{ date: "2024-06-01", trips: 178, revenue: 200 },
	{ date: "2024-06-02", trips: 470, revenue: 410 },
	{ date: "2024-06-03", trips: 103, revenue: 160 },
	{ date: "2024-06-04", trips: 439, revenue: 380 },
	{ date: "2024-06-05", trips: 88, revenue: 140 },
	{ date: "2024-06-06", trips: 294, revenue: 250 },
	{ date: "2024-06-07", trips: 323, revenue: 370 },
	{ date: "2024-06-08", trips: 385, revenue: 320 },
	{ date: "2024-06-09", trips: 438, revenue: 480 },
	{ date: "2024-06-10", trips: 155, revenue: 200 },
	{ date: "2024-06-11", trips: 92, revenue: 150 },
	{ date: "2024-06-12", trips: 492, revenue: 420 },
	{ date: "2024-06-13", trips: 81, revenue: 130 },
	{ date: "2024-06-14", trips: 426, revenue: 380 },
	{ date: "2024-06-15", trips: 307, revenue: 350 },
	{ date: "2024-06-16", trips: 371, revenue: 310 },
	{ date: "2024-06-17", trips: 475, revenue: 520 },
	{ date: "2024-06-18", trips: 107, revenue: 170 },
	{ date: "2024-06-19", trips: 341, revenue: 290 },
	{ date: "2024-06-20", trips: 408, revenue: 450 },
	{ date: "2024-06-21", trips: 169, revenue: 210 },
	{ date: "2024-06-22", trips: 317, revenue: 270 },
	{ date: "2024-06-23", trips: 480, revenue: 530 },
	{ date: "2024-06-24", trips: 132, revenue: 180 },
	{ date: "2024-06-25", trips: 141, revenue: 190 },
	{ date: "2024-06-26", trips: 434, revenue: 380 },
	{ date: "2024-06-27", trips: 448, revenue: 490 },
	{ date: "2024-06-28", trips: 149, revenue: 200 },
	{ date: "2024-06-29", trips: 103, revenue: 160 },
	{ date: "2024-06-30", trips: 446, revenue: 400 },
]

const chartConfig = {
	visitors: {
		label: "Visitors",
	},
	desktop: {
		label: "Desktop",
		color: "hsl(var(--chart-1))",
	},
	mobile: {
		label: "Mobile",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig

export function TripChart() {
	const isMobile = useIsMobile()
	const [timeRange, setTimeRange] = React.useState("30d")

	React.useEffect(() => {
		if (isMobile) {
			setTimeRange("7d")
		}
	}, [isMobile])

	const filteredData = chartData.filter((item) => {
		const date = new Date(item.date)
		const referenceDate = new Date("2024-06-30")
		let daysToSubtract = 90
		if (timeRange === "30d") {
			daysToSubtract = 30
		} else if (timeRange === "7d") {
			daysToSubtract = 7
		}
		const startDate = new Date(referenceDate)
		startDate.setDate(startDate.getDate() - daysToSubtract)
		return date >= startDate
	})

	return (
		<Card className="@container/card">
			<CardHeader className="relative">
				<CardTitle>Trips </CardTitle>
				<CardDescription>
					<span className="@[540px]/card:block hidden">Total for the last 3 months</span>
					<span className="@[540px]/card:hidden">Last 3 months</span>
				</CardDescription>
				<div className="absolute right-4 top-4">
					<ToggleGroup
						type="single"
						value={timeRange}
						onValueChange={setTimeRange}
						variant="outline"
						className="@[767px]/card:flex hidden"
					>
						<ToggleGroupItem value="90d" className="h-8 px-2.5">
							Last 3 months
						</ToggleGroupItem>
						<ToggleGroupItem value="30d" className="h-8 px-2.5">
							Last 30 days
						</ToggleGroupItem>
						<ToggleGroupItem value="7d" className="h-8 px-2.5">
							Last 7 days
						</ToggleGroupItem>
					</ToggleGroup>
					<Select value={timeRange} onValueChange={setTimeRange}>
						<SelectTrigger className="@[767px]/card:hidden flex w-40" aria-label="Select a value">
							<SelectValue placeholder="Last 3 months" />
						</SelectTrigger>
						<SelectContent className="rounded-xl">
							<SelectItem value="90d" className="rounded-lg">
								Last 3 months
							</SelectItem>
							<SelectItem value="30d" className="rounded-lg">
								Last 30 days
							</SelectItem>
							<SelectItem value="7d" className="rounded-lg">
								Last 7 days
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</CardHeader>
			<CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
				<ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
					<AreaChart data={filteredData}>
						<defs>
							<linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={1.0} />
								<stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
							</linearGradient>
							<linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
								<stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
							</linearGradient>
						</defs>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="date"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={32}
							tickFormatter={(value) => {
								const date = new Date(value)
								return date.toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
								})
							}}
						/>
						<ChartTooltip
							cursor={false}
							content={
								<ChartTooltipContent
									labelFormatter={(value) => {
										return new Date(value).toLocaleDateString("en-US", {
											month: "short",
											day: "numeric",
										})
									}}
									indicator="dot"
								/>
							}
						/>
						<Area dataKey="trips" type="natural" fill="url(#fillMobile)" stroke="var(--color-mobile)" stackId="a" />
						<Area dataKey="revenue" type="natural" fill="url(#fillDesktop)" stroke="var(--color-desktop)" stackId="a" />
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}

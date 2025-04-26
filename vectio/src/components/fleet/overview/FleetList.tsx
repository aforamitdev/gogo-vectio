import FleetCard from "./FleetCard"
import { Truck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "@tanstack/react-router"


// This would typically come from a database
const fleets = [
	{
		id: "1",
		name: "North Region Fleet",
		trucks: 12,
		activeTrips: 8,
		status: "active",
		lastUpdated: "2 hours ago",
	},
	{
		id: "2",
		name: "South Region Fleet",
		trucks: 8,
		activeTrips: 5,
		status: "active",
		lastUpdated: "1 day ago",
	},
	{
		id: "3",
		name: "East Region Fleet",
		trucks: 15,
		activeTrips: 10,
		status: "maintenance",
		lastUpdated: "5 hours ago",
	},
]

const FleetList = () => {
	return (
		<>
			<h2 className="text-2xl font-bold mb-4">Your Fleets</h2>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{fleets.map((fleet) => (
					<FleetCard key={fleet.id} fleet={fleet} />
				))}
				<Link to="/fleets" href="/fleets/create" className="block">
					<Card className="h-full border-dashed cursor-pointer hover:border-primary/50 transition-colors">
						<CardContent className="flex flex-col items-center justify-center h-full py-8">
							<Truck className="h-12 w-12 text-muted-foreground mb-4" />
							<p className="text-lg font-medium">Create New Fleet</p>
							<p className="text-sm text-muted-foreground">Add a new fleet to your organization</p>
						</CardContent>
					</Card>
				</Link>
			</div>

		</>
	)
}

export default FleetList
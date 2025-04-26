import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Link } from "@tanstack/react-router"
import { MoreHorizontal, Truck, Users } from "lucide-react"

interface Fleet {
	id: string
	name: string
	trucks: number
	activeTrips: number
	status: string
	lastUpdated: string
}

interface FleetCardProps {
	fleet: Fleet
}


function FleetCard({ fleet }: FleetCardProps) {
	return (
		<Card>
			<CardHeader className="pb-2 flex flex-row items-start justify-between space-y-0">
				<div>
					<CardTitle className="text-xl font-bold">{fleet.name}</CardTitle>
					<div className="flex items-center space-x-2 mt-1">
						<Badge variant={fleet.status === "active" ? "default" : "secondary"}>
							{fleet.status === "active" ? "Active" : "Maintenance"}
						</Badge>
						<span className="text-xs text-muted-foreground">Updated {fleet.lastUpdated}</span>
					</div>
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem>View details</DropdownMenuItem>
						<DropdownMenuItem>Edit fleet</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Add truck</DropdownMenuItem>
						<DropdownMenuItem>Manage drivers</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="text-destructive">Delete fleet</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-2 gap-4 py-2">
					<div className="flex items-center space-x-2">
						<Truck className="h-4 w-4 text-muted-foreground" />
						<span className="text-sm font-medium">{fleet.trucks} Trucks</span>
					</div>
					<div className="flex items-center space-x-2">
						<Users className="h-4 w-4 text-muted-foreground" />
						<span className="text-sm font-medium">{Math.round(fleet.trucks * 1.5)} Drivers</span>
					</div>
				</div>
				<div className="mt-2">
					<div className="text-sm font-medium">Active Trips: {fleet.activeTrips}</div>
					<div className="w-full bg-secondary h-2 rounded-full mt-1">
						<div
							className="bg-primary h-2 rounded-full"
							style={{ width: `${(fleet.activeTrips / fleet.trucks) * 100}%` }}
						/>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Link to="/fleets" href={`/fleets/${fleet.id}`} className="w-full">
					<Button variant="outline" className="w-full">
						View Fleet Details
					</Button>
				</Link>
			</CardFooter>
		</Card>
	)
}

export default FleetCard
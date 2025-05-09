import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingDownIcon } from "lucide-react"


const Revenue = () => {
	return (
		<Card className="rounded-md h-52">
			<CardHeader className="relative">
				<CardDescription>Total Revenue</CardDescription>
				<CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">$1,250.00</CardTitle>
				<div className="absolute right-4 top-4">
					<Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
						<TrendingDownIcon className="size-3" />
						-20%
					</Badge>
				</div>
			</CardHeader>
			<CardFooter className="flex-col items-start gap-1 text-sm">
				<div className="line-clamp-1 flex gap-2 font-medium">
					Down 20% this period <TrendingDownIcon className="size-4" />
				</div>
				<div className="text-muted-foreground">Acquisition needs attention</div>
			</CardFooter>
		</Card>
	)
}

export default Revenue
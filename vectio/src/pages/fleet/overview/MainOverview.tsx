import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingDownIcon } from "lucide-react"


const MainOverview = () => {
	return (
		<Card className="rounded-md">
			<CardHeader className="relative">
				<CardDescription>Total Fleet Size</CardDescription>
				<CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">80</CardTitle>
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
		</Card>)
}

export default MainOverview
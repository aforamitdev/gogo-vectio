import React from 'react'
import Revenue from "./overview/revenue/Revenue"
import { TripChart } from "./TripVisula/TripChart"

type Props = {}

const DashboardMain = (props: Props) => {
	return (
		<>
			<div className="md:flex md:gap-3  md:justify-between ">
				<div className=" w-full rounded-md" >
					<Revenue />
				</div>
				<div className="w-full rounded-md bg-muted/50" >
					<Revenue /></div>
				<div className=" w-full rounded-md bg-muted/50" >
					<Revenue /></div>
			</div>
			<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" >
				<TripChart />
			</div>
		</>
	)
}

export default DashboardMain
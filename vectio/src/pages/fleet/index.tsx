import { Link, Outlet } from "@tanstack/react-router"
import React from 'react'
import { Boxes, PlusCircle, Users } from "lucide-react"
import MainOverview from "./overview/MainOverview"
import NewFleet from "./NewFleet"
import AppContainer from "@/components/AppContainer/AppContainer"
import PageHeader from "@/components/shared/PageHeader"
import { Button } from "@/components/ui/button"
import OverViewCard from "@/components/fleet/overview/OverViewCard"
import NewFleetDialogue from "@/components/fleet/NewFleetDialogue"
import { useAtom } from "jotai"
import { newFleetDialogue } from "@/jotai/fleet/fleet"
import useNewFleetPopup from "@/jotai/fleet/useNewFleetDialouge"
import FleetList from "@/components/fleet/overview/FleetList"

type Props = {}

const FleetPage = (props: Props) => {

	const { handleOpenClose } = useNewFleetPopup()

	return (
		<>

			<div className="md:flex md:justify-between items-center  ">
				<div>
					<PageHeader title="Fleet Management" details="Manage your truck fleets and monitor their status" />
				</div>
				<div className="flex gap-2 my-3">

					<Button onClick={() => handleOpenClose()}>
						<PlusCircle className=" h-4 w-4" />
						Create Fleet
					</Button>
					<Link hraf="/trailers">
						<Button variant="outline">
							<Boxes className=" h-4 w-4" />
							Manage Trailers
						</Button>
					</Link>
					<Link hraf="/drivers">
						<Button variant="outline">
							<Users className=" h-4 w-4" />
							Manage Drivers
						</Button>
					</Link>
				</div>
			</div>
			<div className="flex justify-between gap-x-6">
				<OverViewCard title="Total Feel Size" value={3} moreInfo="10% up from last month" descriptions="Across All regions" />
				<OverViewCard title="Total Trucks" value={10} moreInfo="10% up from last month" descriptions="Across All regions" />
				<OverViewCard title="Active Trips" value={15} moreInfo="10% up from last month" descriptions="Active trucks on road" />
			</div>
			<NewFleetDialogue />
			<div>
				<FleetList />
			</div>
		</>
	)
}

export default FleetPage
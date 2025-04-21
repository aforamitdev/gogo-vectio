import AppContainer from "@/components/AppContainer/AppContainer"
import { Outlet, useParams } from "@tanstack/react-router"
import React from 'react'

type Props = {}

function FleetDetailsPage({ }: Props) {

	const { id } = useParams('/fleets/$id')


	return (
		<div>{id}</div>
	)
}

export default FleetDetailsPage
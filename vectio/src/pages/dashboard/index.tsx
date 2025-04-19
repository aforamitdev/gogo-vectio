import AppContainer from "@/components/AppContainer/AppContainer"
import DashboardMain from "@/components/dashboard"
import React from 'react'

type Props = {}

const DashboardPage = (props: Props) => {
	return (
		<AppContainer>
			<DashboardMain />
		</AppContainer>
	)
}

export default DashboardPage
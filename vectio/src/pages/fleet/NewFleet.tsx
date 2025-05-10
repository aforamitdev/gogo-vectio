import { Outlet } from '@tanstack/react-router'
import React from 'react'
import AppContainer from '@/components/AppContainer/AppContainer'
import PageHeader from '@/components/shared/PageHeader'

type Props = {}

const NewFleet = (props: Props) => {
  return (
    <div>
      <AppContainer>
        <div className="flex">
          <PageHeader
            title="Fleet"
            details="Manage your truck fleets and monitor their status

"
          />
        </div>
      </AppContainer>
    </div>
  )
}

export default NewFleet

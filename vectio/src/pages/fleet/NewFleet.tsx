import AppContainer from '@/components/AppContainer/AppContainer'
import PageHeader from '@/components/shared/PageHeader'

const NewFleet = () => {
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

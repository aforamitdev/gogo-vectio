import { useParams } from "@tanstack/react-router"


function FleetDetailsPage() {
  const { id } = useParams({ from: '/fleets/$id' })

  return <div>{id}</div>
}

export default FleetDetailsPage

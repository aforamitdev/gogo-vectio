import { useAtom } from "jotai"
import { newFleetDialogue } from "./fleet"


function useNewFleetPopup() {
	const [isOpen, setOpen] = useAtom(newFleetDialogue)
	const handleOpenClose = () => {
		setOpen(!isOpen)
	}
	return { isOpen, handleOpenClose }
}

export default useNewFleetPopup
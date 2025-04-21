import { useAtom } from "jotai"
import React from 'react'
import { newFleetDialogue } from "./fleet"


function useNewFleetPopup() {
	const [isOpen, setOpen] = useAtom(newFleetDialogue)
	const handleOpenClose = () => {
		setOpen(!isOpen)
	}
	return { isOpen, handleOpenClose }
}

export default useNewFleetPopup
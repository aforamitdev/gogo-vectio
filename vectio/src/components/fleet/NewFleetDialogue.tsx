import React from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'
import { newFleetDialogue } from '@/jotai/fleet/fleet'
import useNewFleetPopup from '@/jotai/fleet/useNewFleetDialouge'

type Props = {}

function NewFleetDialogue() {
  const { isOpen, handleOpenClose } = useNewFleetPopup()

  return (
    <Dialog open={isOpen} onOpenChange={() => handleOpenClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Fleet!</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="fleetName">Fleet Name</Label>
              <Input
                id="fleetName"
                type="text"
                placeholder="North Eastern region"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="fleetName">Manager Name</Label>
              <Input
                id="mangerName"
                type="text"
                placeholder="Thomes andersan "
                required
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => handleOpenClose()}
          >
            close
          </Button>
          <Button type="submit">Submit </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default NewFleetDialogue

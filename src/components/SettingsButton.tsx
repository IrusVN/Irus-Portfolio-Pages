"use client"

import * as React from "react"
import { DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Music } from "lucide-react"

export default function SettingsButton() {
  return (
    <DialogTrigger>
      <Button variant="ghost" size="icon-sm" className="p-2">
        <Music />
        <span className="sr-only">Open sound settings</span>
      </Button>
    </DialogTrigger>
  )
}

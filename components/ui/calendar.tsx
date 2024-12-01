"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

const Calendar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { dir?: string }
>((props, ref) => {
  const dir = props.dir || 'ltr'
  
  return (
    <div ref={ref} {...props}>
      {/* Calendar content */}
    </div>
  )
})

Calendar.displayName = "Calendar"

export { Calendar }

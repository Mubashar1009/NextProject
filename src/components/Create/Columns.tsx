"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "../UI/button"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}
export type Column  = {
  accessorKey:string,
  header:string,
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}
export const columns: ColumnDef<Column>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
   
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },

  },
]
export const payments: Payment = 
  {
    status: "pending",
    email: "m@example.com",
    id: "728ed52f",
    amount: 100,
    
  
  }



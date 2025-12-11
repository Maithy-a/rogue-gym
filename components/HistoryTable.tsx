import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import Link from "next/link";

type bookinghistoryProps = {
    invoice: string;
    status: string;
    method: string;
    amount: number;
}

const bookinghistoryData = [
    {
        invoice: 'INV001',
        status: 'Paid',
        method: 'Credit Card',
        amount: 250
    },

    {

        invoice: 'INV002',
        status: 'Pending',
        method: 'PayPal',
        amount: 150
    },

    {

        invoice: 'INV003',
        status: 'Overdue',
        method: 'Bank Transfer',
        amount: 300
    },

]


export default function HistoryTable() {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                {bookinghistoryData.map(({ invoice, status, method, amount }) => (

                    <TableRow key={invoice}>
                        <Link href={`/invoice/${invoice}`} className="w-fullflex items-center">
                            <TableCell >{invoice}</TableCell>
                            <TableCell>{status}</TableCell>
                            <TableCell>{method}</TableCell>
                            <TableCell className="text-right">${amount.toFixed(2)}</TableCell>
                        </Link>
                    </TableRow>
                ))}


            </TableBody>
        </Table>

    )
}

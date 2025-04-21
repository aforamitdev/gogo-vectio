import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import React from 'react'

type Props = {
	title: string,
	descriptions: string,
	value: number,
	moreInfo: string
}

function OverViewCard({ title, descriptions, value, moreInfo }: Props) {
	return (
		<Card className="w-full py-4 gap-2">
			<CardHeader className="pb-2 ">
				<CardTitle className="text-2xl">{title}</CardTitle>
				<CardDescription>{descriptions}</CardDescription>
			</CardHeader>
			<CardContent >
				<div className="text-2xl font-bold">{value}</div>
			</CardContent>
			<CardFooter className="text-sm">
				{moreInfo}
			</CardFooter>
		</Card>
	)
}

export default OverViewCard
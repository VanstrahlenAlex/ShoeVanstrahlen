import prisma from '@/app/lib/db'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

async function getData() {
	const data = await prisma.order.findMany({
		select: {
			amount: true,
			id: true,
			User: {
				select: {
					firtsName: true,
					profileImage: true,
					email: true,
				}
			}
		},
		orderBy: {
			createdAt: "desc"
		},
		take: 7,
	});

	return data;
}

export default async function RecentSales() {
	const data = await getData();
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Recent Sales</CardTitle>
					{/* <CardDescription>Top 10 customers based on their purchases</CardDescription> */}
				</CardHeader>
				<CardContent className="flex flex-col gap-8">
					{data.map((item) => (
						<>
							<div className="flex items-center gap-4" key={item.id}>
								<Avatar className="hidden sm:flex h-9 w-9">
									<AvatarFallback>{item.User?.firstName.slice(0, 3)}</AvatarFallback>
								</Avatar>
								<div className="grid gap-1">
									<p className="text-sm font-medium">Jan Marshal</p>
									<p className="text-sm text-muted-foreground">test@test.com</p>
								</div>
								<p className="ml-auto font-medium">+1,999.00</p>
							</div>
						</>
					))}

				</CardContent>
			</Card>
		</>
	)
}

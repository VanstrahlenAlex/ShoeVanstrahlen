import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";
import { DashboardStats } from "../components/dashboard/DashboardStats";
import RecentSales from "../components/dashboard/RecentSales";

export default function Dashboard() {
	return(
		<>
			<DashboardStats/>
			<div className="grid gap-4 md:gp-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
				<Card className="xl:col-span-2">
					<CardHeader>
						<CardTitle>Transactions</CardTitle>
						<CardDescription>Recent transactions from your store</CardDescription>
					</CardHeader>
				</Card>
			<RecentSales/>
			</div>
		</>
	)
}
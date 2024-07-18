"use client";
import { createProduct } from "@/app/actions";
import { bannerSchema } from "@/app/lib/zodSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { MoreHorizontal, PlusCircle, User2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";

export default function BannerRoute() {
	const [images, setImages] = useState(undefined);
	const [lastResult, action] = useFormState(createProduct, undefined);

	const [form, fields] = useForm({
		lastResult,

		onValidate({formData}){
			return parseWithZod(formData, {schema: bannerSchema})
		},

		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	})
	return (
		<>
			<div className="flex items-center justify-end">
				<Button asChild className="flex gap-x-2">
					<Link href="/dashboard/banner/create">
						<PlusCircle className="w-3.5 h-3.5" />
						<span>Add Banner</span>
					</Link>
				</Button>
			</div>
			<Card className="mt-5">
				<CardHeader>
					<CardTitle>Banners</CardTitle>
					<CardDescription>Manage your Banners</CardDescription>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Image</TableHead>
								<TableHead>Title</TableHead>
								<TableHead className="text-end">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>
									<User2 className="w-16 h-16 rounded-full" />
								</TableCell>
								<TableCell className="font-medium">
									Great Products
								</TableCell>
								<TableCell className="text-end">
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button size="icon" variant={"ghost"}>
												<MoreHorizontal  className='h-4 w-4' />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align='end'>
											<DropdownMenuLabel>Actions</DropdownMenuLabel>
											<DropdownMenuSeparator />
											<DropdownMenuItem className='text-red-600' asChild>
												<Link href={``}>Delete</Link> 
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</>
	)
}
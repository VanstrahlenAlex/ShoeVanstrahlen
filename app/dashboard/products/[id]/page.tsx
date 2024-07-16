import prisma from "@/app/lib/db"
import { notFound } from "next/navigation";

async function getData(productId: string) {
	const data = await prisma.product.findUnique({
		where: {
			id: productId,
		}
	});

	if(!data){
		return notFound()
	}

	return data;
}

export default async function EditRoute() {
	const data = await getData()
	return (
		<div>
			<h1>Edit</h1>
		</div>
	)
}
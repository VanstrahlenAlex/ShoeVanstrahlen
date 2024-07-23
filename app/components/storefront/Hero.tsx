import prisma from "@/app/lib/db";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

async function getData() {
	const data = await prisma.banner.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});

	return data;
}
export async function Hero(){
		const data = await getData();
	return (
		<Carousel>
			<CarouselContent>
				{data.map((item) => (
					<>
						<CarouselItem key={item.id}>
							<div className="relative h-[60vh] lg:h-[80vh]">
								<Image alt="Banner Image" src={item.imageString} fill className="object-cover h-full w-full" />
							</div>
						</CarouselItem>
					</>
				))}
			</CarouselContent>
		</Carousel>
	)
}
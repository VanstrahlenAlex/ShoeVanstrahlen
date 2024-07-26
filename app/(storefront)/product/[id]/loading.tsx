import { Skeleton } from "@/components/ui/skeleton";

export default function ProductLoadingRoute() {
	return (
		<div className="grid md:grid-cols-2 gap-6 items-start lg:gap-x-24 py-6 ">
			<div>
				<Skeleton className="h-[600px] w-full my-5" />
				<div className="grid grid-cols-5 gap-4 mt-6">
					<Skeleton className="h-[100px] w-[100px]" />
					<Skeleton className="h-[100px] w-[100px]" />
					<Skeleton className="h-[100px] w-[100px]" />
					<Skeleton className="h-[100px] w-[100px]" />
				</div>
			</div>
			<div>
				<Skeleton className="w-56 h-12" />
				<Skeleton className="w-36 h-12 mt-4" />
				<Skeleton className="w-full h-12 mt-4" />
				<Skeleton className="w-full h-12 mt-4" />
			</div>
		</div>
	)
}
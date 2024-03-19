// "use client";

import { ProductCard } from "@/components/ProductCard";
import { PageContainer } from "@/components/PageContainer";

import supabase from "../../supabase";
import Swal from "sweetalert2";

export const revalidate = 0;

export default async function Home() {
	const { data: products, error } = await supabase.from("products").select(`
      id, product_name, image_url, marketplace_url, product_gift(full_name)`);

	return (
		<PageContainer>
			<div className="grid grid-cols-2 tablet:grid-cols-3 tablet:gap-[20px] w-full tablet:w-[1000px] self-center">
				{products?.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</PageContainer>
	);
}

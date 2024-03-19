"use client";

import Image from "next/image";
import { Subtitle, Text } from "./Typography";
import Button from "./Button";
import Icon from "./Icon";
import Link from "next/link";
import Swal from "sweetalert2";
import supabase from "../../supabase";

export const ProductCard = ({
	className,
	product,
}: {
	className?: string;
	product: any;
}) => {
	const giftProduct = async () => {
		Swal.fire({
			title: "¿Quieres reservar este regalo?",
			icon: product.product_gift.length > 0 ? "warning" : "question",
			text:
				product.product_gift.length > 0
					? "Este regalo ya esta reservado por una persona"
					: "Ingresa tu nombre completo para reservar este regalo",
			input: "text",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			confirmButtonText: "¡Confirmar!",
			cancelButtonText: "Cancelar",
		}).then(async (result) => {
			if (result.isConfirmed) {
				const { value: name } = result;
				const { data, error } = await supabase
					.from("product_gift")
					.insert([{ product_id: product.id, full_name: name }]);

				console.log(data, error);

				if (error) {
					Swal.fire("Error", "No se pudo reservar el regalo", "error");
				} else {
					Swal.fire({
						title: "¡Regalo reservado!",
						text: "El regalo ha sido reservado con éxito",
						icon: "success",
						confirmButtonColor: "#3085d6",
					});
				}
			}
		});
	};

	return (
		<div
			className={`bg-white fc justify-between tablet:rounded tablet:shadow text-black p-[10px] min-h-[350px] tablet:min-h-[500px] border-b-[1px] border-l-[1px] tablet:border-[0px] ${className}`}
		>
			<div>
				<div className="tablet:border-b-[1px] border-neutral-100">
					<Image
						src={product.image_url}
						alt={product.product_name}
						width={400}
						height={400}
						className="w-full"
					/>
				</div>
				<div className="p-[10px]">
					<Subtitle>{product.product_name}</Subtitle>
					<Link
						target="_blank"
						href={product.marketplace_url}
						className="fr justify-start items-center underline"
					>
						<Text color="#0086d6" size="sm">
							Ejemplo en MercadoLibre{" "}
						</Text>
						<Icon
							name="chevron"
							className="h-[15px] w-[15px] stroke-[#0086d6]"
						/>
					</Link>
					{product.product_gift.length > 0 && (
						<div className="mt-[10px]">
							<Text size="sm" color="#999999">
								Reservado por {product.product_gift.length} persona/s
							</Text>
						</div>
					)}
				</div>
			</div>
			<Button className="justify-self-end" onClick={giftProduct}>
				Yo lo regalo!
			</Button>
		</div>
	);
};

"use client";

import Swal from "sweetalert2";
import Button from "./Button";
import Icon from "./Icon";
import { Subtitle, Text } from "./Typography";

export const Navbar = () => {
	const infoPopUp = () => {
		Swal.fire({
			title: "¿Y esta lista?",
			text: "En este momento nada nos sirve mas que plata. Sin embargo, si queres regalarnos algo en esta lista vas a encontrar algunos elementos que nos sirven igualmente. En cada producto van a encontrar un link a MercadoLibre para ver mas o menos los precios.",
			icon: "info",
			confirmButtonColor: "#3085d6",
		});
	};

	const transferPopUp = () => {
		Swal.fire({
			title: "¿Querés regalarnos plata?",
			text: "Si querés regalarnos plata, podés hacerlo cuando quieras, a través de transferencia al CVU/alias de abajo. Si tenes efectivo o crypto no hay problema, habla con nosotros y arreglamos.",
			footer: "alias: rociobuzin.bs | CBU: 0720292888000001371868",
			icon: "info",
			confirmButtonColor: "#3085d6",
		});
	};

	return (
		<div className="sticky fr center top-0 w-full h-[70px] bg-gradient-to-r from-blue-600 to-cyan-500 shadow z-20">
			<div className="fr justify-between items-center w-full tablet:w-[1000px]  px-[10px]">
				<Subtitle size="md" color="#fff" bold>
					Mati y Ro
				</Subtitle>

				<div className="fr gap-[10px]">
					<Button variant="secondary" squared onClick={transferPopUp}>
						<Icon name="money" className="h-[25px] w-[25px] fill-black" />
					</Button>
					<Button variant="secondary" squared onClick={infoPopUp}>
						<Icon name="info" className="h-[25px] w-[25px] fill-black" />
					</Button>
				</div>
			</div>
		</div>
	);
};

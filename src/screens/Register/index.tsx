import React, { useState } from "react";
import { Button } from "../../components/Form/button";
import { CategoryCard } from "../../components/Form/CategoryCard";
import { Input } from "../../components/Form/Input";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";

import {
	Container,
	Header,
	Title,
	Form,
	Field,
	FieldButtonType,
} from "./styles";

export function Register() {
	const [transactionActive, setTransactionActive] = useState("");

	function handleTransactionActive(type: "up" | "down") {
		setTransactionActive(type);
	}

	return (
		<Container>
			<Header>
				<Title>Cadastrar</Title>
			</Header>

			<Form>
				<Field>
					<Input placeholder="Nome" />
					<Input placeholder="Preço" />
					<FieldButtonType>
						<TransactionTypeButton
							title="Income"
							type="up"
							isActive={transactionActive === "up"}
							onPress={() => handleTransactionActive("up")}
						/>
						<TransactionTypeButton
							title="Outcome"
							type="down"
							isActive={transactionActive === "down"}
							onPress={() => handleTransactionActive("down")}
						/>
					</FieldButtonType>
					<CategoryCard/>
				</Field>

				<Button title="Enviar" />
			</Form>
		</Container>
	);
}

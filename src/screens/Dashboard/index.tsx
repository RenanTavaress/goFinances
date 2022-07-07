import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionsCard, TransactionsCardProps } from "../../components/TransactionsCard";



import {
	Container,
	Header,
	UserWrapper,
	UserInfo,
	Photo,
	User,
	UserGrettings,
	UserName,
	Icon,
	HighlightCards,
	Transactions,
	Title,
	TransactionList,
} from "./styles";

export interface DataProps extends TransactionsCardProps {
	id: string;
}

export default function Dashboard() {

	const data: DataProps[] = [
		{
			id: '1',
			type: "positive",
			title: "Desenvolvimento de site",
			amount: "R$ 12.000,00",
			category: {
				icon: "dollar-sign",
				name: "Vendas",
			},
			date: "13/04/2020",
		},
		{
			id: '2',
			type: "negative",
			title: "Hamburgueria Pizzy",
			amount: "R$ 59,00",
			category: {
				icon: "coffee",
				name: "Alimentação",
			},
			date: "10/04/2020",
		},
		{
			id: '3',
			type: "negative",
			title: "Aluguel do apartamento",
			amount: "R$ 1.200,00",
			category: {
				icon: "shopping-bag",
				name: "Casa",
			},
			date: "13/04/2020",
		},
	];

	return (
		<Container>
			<Header>
				<UserWrapper>
					<UserInfo>
						<Photo
							source={{
								uri: "https://avatars.githubusercontent.com/u/28938509?v=4",
							}}
						/>

						<User>
							<UserGrettings>Olá,</UserGrettings>
							<UserName>Renan</UserName>
						</User>
					</UserInfo>
					<Icon name="power" />
				</UserWrapper>
			</Header>

			<HighlightCards>
				<HighlightCard
					type="up"
					title="Entrada"
					amount="R$ 17.400,00"
					lastTransaction="Última entrada dia 13 de abril"
				/>
				<HighlightCard
					type="down"
					title="Saídas"
					amount="R$ 1.259,00"
					lastTransaction="Última saída dia 03 de abril"
				/>
				<HighlightCard
					type="total"
					title="Total"
					amount="R$ 16.1411,00"
					lastTransaction="01 à 16 de abril"
				/>
			</HighlightCards>

			<Transactions>
				<Title>Listagem</Title>
				<TransactionList
					data={data}
					keyExtractor={item => item.id}
					renderItem={({ item }) => <TransactionsCard data={item} />}
				/>
			</Transactions>
		</Container>
	);
}

import React from "react";

import {
	Container,
	Title,
	Amount,
	Footer,
	Category,
	Icon,
	CategoruName,
	Date,
} from "./styles";

interface Category {
	name: string;
	icon: string;
}

export interface TransactionsCardProps {
	type: "positive" | "negative";
	title: string;
	amount: string;
	category: Category;
	date: string;
}

interface Props {
	data: TransactionsCardProps;
}

export function TransactionsCard({ data }: Props) {
	return (
		<Container>
			<Title>{data.title}</Title>
			<Amount type={data.type}>{data.amount}</Amount>

			<Footer>
				<Category>
					<Icon name={data.category.icon} />
					<CategoruName>{data.category.name}</CategoruName>
				</Category>
				<Date>{data.date}</Date>
			</Footer>
		</Container>
	);
}

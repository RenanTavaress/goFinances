import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

interface Props extends TouchableOpacityProps {
	title: String;
	type: "up" | "down";
	isActive: boolean;
}
const icons = {
	up: "arrow-up-circle",
	down: "arrow-down-circle",
};

export const TransactionTypeButton = ({
	title,
	isActive,
	type,
	...rest
}: Props) => {
	return (
		<Container type={type} isActive={isActive} {...rest}>
			<Icon name={icons[type]} type={type} />
			<Title>{title}</Title>
		</Container>
	);
};

import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface TransactionsProps {
	type: "positive" | "negative";
}

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.shape};
	padding: ${RFValue(17)}px ${RFValue(24)}px;
	border-radius: 5px;
	margin-bottom: 16px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.text_dark};
	font-size: ${RFValue(14)}px;
	font-family: ${({ theme }) => theme.fonts.regular};

	padding-bottom: 2px;
`;

export const Amount = styled.Text<TransactionsProps>`
	font-size: ${RFValue(20)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
	margin-top: 2px;
	color: ${({ theme, type }) =>
		type === "positive" ? theme.colors.success : theme.colors.attention};
`;

export const Footer = styled.View`
	margin-top: 19px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Category = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Icon = styled(Feather)`
	color: ${({ theme }) => theme.colors.text};
	font-size: ${RFValue(20)}px;
`;

export const CategoruName = styled.Text`
	color: ${({ theme }) => theme.colors.text};
	font-size: ${RFValue(14)}px;
	font-family: ${({ theme }) => theme.fonts.regular};

	margin-left: 17px;
`;

export const Date = styled.Text`
	color: ${({ theme }) => theme.colors.text};
	font-size: ${RFValue(14)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
`;
